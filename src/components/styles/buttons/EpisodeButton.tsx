import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';

import styles from './EpisodeButton.module.scss';

type MyProps = {
    name: string;
    link: string;
    invert: boolean;
};

export default function EpisodeButton(props: MyProps) {
    const { link, invert, name } = props;

    const isInvert = invert ? 'invert' : ''

    return (
        <Link to={`../episode/${link}`} className={`${styles.episodeButton} ${styles[isInvert]}`}>
            <div className={styles.arrow}>
                <FaAngleLeft />
            </div>
            <p>{name}</p>
        </Link>
    );
}
