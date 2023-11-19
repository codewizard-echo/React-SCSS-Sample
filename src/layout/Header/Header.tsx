import { FC } from 'react';
import styles from './header.module.scss';

const Header: FC = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>My Application</h1>
            </header>
        </>
    )
}

export default Header;