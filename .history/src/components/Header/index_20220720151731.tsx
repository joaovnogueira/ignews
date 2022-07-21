import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'
import Link from 'next/link'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="" />
                <nav>
                    <Link>
                        <a href="/" className={styles.active}>Home</a>
                    </Link>
                    <Link>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>

    );
}
