import { useSession, signIn } from 'next-auth/react';
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton ({priceId}: SubscribeButtonProps) {
    const { data: session, status } = useSession();
    
    async function handleSubscribe() {
        if (!session) {
            signIn('github')
            return;
        }
        try{
            const response = await 
        }

        //criação da checkout session
    }

    return (
        <button 
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe now
        </button>
    ); 
}