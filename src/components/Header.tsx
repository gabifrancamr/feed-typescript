import styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
            <span className={styles.title}>Ignite Feed</span>
        </header>
    )
}