import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { query as q } from 'faunadb';

import { fauna } from '../../../services/fauna';

export default NextAuth({ 
    providers: [ //Formas de realizar login
        Providers.GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'read:user' //Operação ao logar "ler usuário"
        }),
    ],
    callbacks: { //São "middlewares"
        async signIn(user, account, profile){
            const { email } = user;

            try {
                await fauna.query(
                    q.If( //Faz uma verificação if obviamente
                        q.Not( //Verificação negativa
                            q.Exists( //Verific se existe
                                q.Match( // significa que vai buscar um baseado em uma query
                                    q.Index('user_by_email'), //query que deve ser usada
                                    q.Casefold(user.email) //deve comparar com isso nas collections
                                ),
                            )   
                        ),
                        q.Create(
                            q.Collection('users'),
                            { data: { email }}
                        ),
                        q.Get( //Caso exista ele vai dar um get nesse usuario
                            q.Match(
                                q.Index('user_by_email'),
                                q.Casefold(user.email) 
                            )
                        )
                    )
                );
                return true;
            } catch (error) {
                return false;
            }
            
        }
    }
})