import { useState } from 'react';

type NotificationType = 'success' | 'error';
type Notification = { message: string; type: NotificationType } | null;

export const useNotification = () => {
    const [notification, setNotification] = useState<Notification>(null);

    const showNotification = (message: string, type: NotificationType = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3000);
    };

    return { notification, showNotification };
}