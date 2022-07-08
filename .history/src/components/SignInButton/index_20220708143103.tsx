import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ?(
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#e"/>
            João Nogueira
        </button>
    ) : (
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#"/>
            Sign in with Github
        </button>
    )
}