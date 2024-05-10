import styles from './error-message.module.css';

const ErrorMessage = ({ retryGetData }) => {
    return (
        <div className={ styles.container }>
            <p className={ styles.message }>
                При загрузке данных произошла ошибка.
            </p>
            <p className={ `${styles.message} ${styles.retry}` }
                onClick={ retryGetData }
            >
                Повторить попытку.
            </p>
        </div>
    )
};

export default ErrorMessage;