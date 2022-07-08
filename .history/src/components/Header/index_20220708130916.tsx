import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.}>
                <img src="" alt="" />
                <nav>
                    <a href="">Home</a>
                    <a href="">Posts</a>
                </nav>
            </div>
        </header>

    );
}
