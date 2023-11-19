import { FC } from 'react';
import styles from './notification.module.scss';

type NotificationProps = {
    message: string,
    type: 'success' | 'error';
}

const Notification: FC<NotificationProps> = ({message, type}) => {
    return (
        <div className={`${styles.notification} ${styles[type]}`}>
            {message}
        </div>
    )
}

export default Notification;