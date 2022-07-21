import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';

export function Header() {
    const { asPath } = useRouter()

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt=""/>
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active}href="/posts">
                        <a>Posts</a>
                    </ActiveLink>
                </nav>
                <SignInButton />
            </div>
        </header>

    );
}
