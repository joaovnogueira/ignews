import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';

export function Header() {
    const { asPath } = useRouter()

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt=""/>
                <nav>
                    <ActiveLink href="/">
                        <a className={asPath === '/' ? styles.active : ''}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={asPath === '/posts' ? styles.active : ''}>Posts</a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>

    );
}
