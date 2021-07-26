/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession, session } from 'next-auth/client';
import { stripe } from '../../services/stripe';

export default async (request: NextApiRequest, response: NextApiResponse)=>{
    if(request.method === 'POST'){ //Só aceita metodo post
        const sessions = await getSession({req: request}); //Pega o usuario logado
        
        const stripeCustomer = await stripe.customers.create({ //Cria um customer no stripe
            email: sessions.user.email,
        });

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,  //id do cliente
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