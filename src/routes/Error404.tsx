import styles from './Error404.module.scss';
import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <div className={styles.error}>
            <h1>Página não encontrada</h1>
            <p>Verifique se o dominio está correto</p>
            <Link to='/podcast'>Voltar à página inicial</Link>
        </div>
    );
}
