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
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link>
                        <a href="/posts">Posts</a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>

    );
}
