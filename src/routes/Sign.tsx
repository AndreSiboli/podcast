import Container from '../components/styles/Container';
import styles from './Sign.module.scss';

import image from '../assets/images/home/plataform.jpeg';
import { Link } from 'react-router-dom';

export default function Sign() {
    return (
        <div className={styles.signSection}>
            <Container>
                <div className={styles.signContainer}>
                    <div className={styles.signImage}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles.signLinks}>
                        <p>Onde mais você pode ouvir:</p>
                        <nav className={styles.signLinksWrapper}>
                            <Link to="">Podcasts da Apple</Link>
                            <Link to="">Podcasts do Google</Link>
                            <Link to="">Stitcher</Link>
                            <Link to="">Spotify</Link>
                        </nav>
                    </div>
                </div>
            </Container>
        </div>
    );
}
