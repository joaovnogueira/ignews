import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';

export function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ?(
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#eba417"/>
            Sign in with Github
        </button>
    ) 
}