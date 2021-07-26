
import { signin, useSession } from 'next-auth/client';
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss';

interface SubscribeButtonProps{
    priceId: string;
}

export function SubscribeButton( { priceId }: SubscribeButtonProps){
    const [ session ] = useSession();

    async function handleSubscribe(){
        if(!session){ // se o usuario não estiver logado
            signin('github')
            return;
        }

        try {
            const response = await api.post('/subscribe');

            const { sessionsId } = response.data;

            const stripe = await getStripeJs();

            await stripe.redirectToCheckout({sessionId: sessionsId});
        } catch (error) {
            alert(error.message);
        }

        
    }
    return(
        <button 
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubscribe}
        >
        Subscribe now
        </button>
    )
}