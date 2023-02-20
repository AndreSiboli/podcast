import styles from './HostContainer.module.scss';

type MyProps = {
    host: {
        img: string;
        name: string;
        about: string;
        socialMedia: {
            instagram: string;
            facebook: string;
            twitter: string;
        };
    };
};

export default function HostContainer({ host }: MyProps) {
    const { img, name, about, socialMedia } = host;

    return (
        <div className={styles.hostWrapper}>
            <div className={styles.hostImage}>
                <img src={img} alt="" />
            </div>
            <div className={styles.hostInfo}>
                <h1>{name}</h1>
                <p className={styles.hostInfoAbout}>{about}</p>
                <p>
                    <strong>siga-me</strong>
                </p>
                <p>
                    <a href={socialMedia.instagram}>Instagram</a> -{' '}
                    <a href={socialMedia.facebook}>Facebook</a> -{' '}
                    <a href={socialMedia.twitter}>Twitter</a>
                </p>
            </div>
        </div>
    );
}
