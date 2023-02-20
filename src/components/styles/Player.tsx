import styles from './Player.module.scss';
import { FaPlay } from 'react-icons/fa';

type MyProps = {
    interviewee: string;
    ep: string;
};

export default function Player({ info }: { info: MyProps }) {
    const { interviewee, ep } = info;

    return (
        <div className={styles.playerContainer}>
            <div className={`${styles.player} ${styles.invalid}`}>
                <FaPlay />
            </div>
            <div className={styles.playerInfo}>
                <p>
                    {ep} - Entrevista - {interviewee}
                </p>
            </div>
        </div>
    );
}
