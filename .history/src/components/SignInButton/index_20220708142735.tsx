import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss';

export function SignInButton() {
    return(
        <button 
            type="button"
            className={styles.signInButton}
        >
            <FaGithub color="#04d361"/>
            Sign in with Github
        </button>
    );
}