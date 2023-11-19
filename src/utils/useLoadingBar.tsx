import { useState } from 'react';

export const useLoadingBar = (): [number, () => void] => {
    const [progress, setProgress] = useState<number>(0);

    const startLoading = (): void => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress(oldProgress=> {
                if (oldProgress === 100) {
                    clearInterval(interval);
                    return 100;
                }
                const diff = Math.random() * 10;

                return Math.min(oldProgress + diff, 100);
            })
        }, 500);
    }

    return [progress, startLoading];
}