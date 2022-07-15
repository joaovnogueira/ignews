import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton ({priceId}: SubscribeButtonProps) {
    function handleSubscribe() {

    }

    return (
        <button 
            type="button"
            className={styles.subscribeButton}
            onCluck={handleSubscribe}
        >
            Subscribe now
        </button>
    ); 
}