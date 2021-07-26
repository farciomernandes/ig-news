/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';

import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

/**
 * 3 formas de buscar uma informação no next
 * Client-side
 * Server-side (SSR) -> Comentários de um post
 * Static-side (SSG) -> Conteúdos de um Post
 */

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, Welcome</span>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get acess to all publications <br/><span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() =>{
  const price = await stripe.prices.retrieve('price_1JGNrCIxrY1DjMmonl0h94wH', {
    expand: ['product'] //recupera o preço e todas as informações do produto
  });

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US',{
      style: 'currency',
      currency: 'USD'
    }).format((price.unit_amount / 100), /*Vem em centavos*/)
  };
  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 1 minuto, 1 hora, 24 horas
  }
}


