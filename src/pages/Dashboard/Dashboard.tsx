import { FC, useEffect } from 'react';
import { useNotification } from '../../utils/useNotification';
import Notification from '../../components/Notification/Notification';
import LoadingBar from '../../components/LoadingBar/LoadingBar';
import { useLoadingBar } from '../../utils/useLoadingBar';

const Dashboard:FC = () => {

    const { notification, showNotification } = useNotification();
    const [progress, startLoading] = useLoadingBar();
    
    useEffect(() => {
        startLoading();
    },[]);

    useEffect(() => {
        console.log(notification);
    }, [notification]);

    const handleActionSuccess = () => {
        showNotification('Action was successful',  'success');
    }

    return (
        <>
            <div className="d-flex">
                {notification && <Notification message={notification.message} type={notification.type} />}
                <div className="text-warning">
                    Hello little boy
                </div>
                <button onClick={handleActionSuccess}>Show Success</button>
            </div>
            <LoadingBar progress={progress} />;
        </>
    )
}

export default Dashboard;