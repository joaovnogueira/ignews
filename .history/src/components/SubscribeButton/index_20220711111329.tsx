import styles from './styles.module.scss'

interface

export function SubscribeButton () {
    return (
        <button 
            type="button"
            className={styles.subscribeButton}
        >
            Subscribe now
        </button>

    );
}