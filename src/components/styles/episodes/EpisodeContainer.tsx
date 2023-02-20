import styles from './EpisodeContainer.module.scss';
import EpisodesImage from './EpisodeImage';
import LinkButton from '../buttons/LinkButton';
import { Link } from 'react-router-dom';

type MyProps = {
    episode: {
        img: string;
        interviewee: string;
        ep: string;
        id: string;
        date: string;
    };

    animation?: boolean;
};

export default function EpisodesContainer({ animation, episode }: MyProps) {
    const { id, img, interviewee, ep, date } = episode;
    const isAnimation = animation;

    if (!animation) {
        return (
            <div className={styles.episodeContainer}>
                <div className={styles.episodeImage}>
                    <EpisodesImage img={img} animation={isAnimation} />
                </div>

                <div className={styles.episodeInfos}>
                    <h2>Ep. {ep}</h2>
                    <p>Entrevista - {interviewee}</p>
                    <div className={styles.buttonContainer}>
                        <LinkButton
                            to={`../episode/${id}`}
                            text="Ouça agora"
                            customClass="black"
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link to={`../episode/${id}`} className={styles.episodeContainer}>
            <div className={styles.episodeImage}>
                <EpisodesImage img={img} animation={isAnimation} />
            </div>
            <div className={styles.episodeDate}>
                <p>{date}</p>
                <h2>Entrevista - {interviewee}</h2>
            </div>
        </Link>
    );
}
