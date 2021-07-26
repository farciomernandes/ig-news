/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { stripe } from '../../services/stripe';

import { query as q } from 'faunadb';
import { fauna } from '../../services/fauna';

type User = {
    ref: {
        id: string;
    }
    data: { 
        stripe_customer_id: string; 
    }
}

export default async (request: NextApiRequest, response: NextApiResponse)=>{
    if(request.method === 'POST'){ //Só aceita metodo post
        const sessions = await getSession({req: request}); //Pega o usuario logado
        
        const user = await fauna.query<User>( //Query que busca um usuario no fauna pelo email
            q.Get(
                q.Match(
                    q.Index('user_by_email'),
                q.Casefold(sessions.user.email)
                )
            )
        )

        let customerId = user.data.stripe_customer_id;


        if(!customerId){
            const stripeCustomer = await stripe.customers.create({ //Cria um customer no stripe
                email: sessions.user.email,
            });
            await fauna.query(
            q.Update(
                q.Ref(q.Collection('users'), user.ref.id), //Referencia do usuario
                    { //Quais dados quer alterar?
                        data:{ 
                            stripe_customer_id: stripeCustomer.id,
                        }
                    }
                )
            );

            customerId = stripeCustomer.id;
        }

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: customerId,  //id do cliente
            payment_method_types: ['card'],
            billing_address_collection: 'required', //endereço do entrega é obrigatório?
            line_items: [ //Itens colocados no carrinho
                {price: 'price_1JGNrCIxrY1DjMmonl0h94wH', quantity: 1} //idItem e quantidade
            ],
            mode: 'subscription',
            allow_promotion_codes: true, //pode usar cupom de desconto na compra?
            success_url: process.env.STRIPE_SUCCESS_URL, //Para onde enviar o usuario se ele comprar?
            cancel_url: process.env.STRIPE_CANCEL_URL   //Para onde enviar o usuario se ele enviar?
        })

        return response.status(200).json({ sessionsId: stripeCheckoutSession.id})
    }else{
        response.setHeader('Allow', 'POST');
        response.status(405).end('Method not allowed');
    }
}