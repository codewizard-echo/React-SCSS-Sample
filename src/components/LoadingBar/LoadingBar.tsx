import { FC } from 'react';
import styles from './loadingBar.module.scss';

type LoadingBarProps = {
    progress: number;
}

const LoadingBar:FC<LoadingBarProps> = ({ progress }) => {

    const barWidth = `${progress}%`;
    return (
        <>
            <div className={styles.loadingBarContainer}>
                <div className={styles.loadingBar} style={{width: barWidth}}></div>
            </div>
        </>
    )
}

export default LoadingBar;