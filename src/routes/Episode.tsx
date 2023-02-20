import { useEpisodes } from '../App';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Episode.module.scss';

import Container from '../components/styles/Container';
import EpisodesImage from '../components/styles/episodes/EpisodeImage';
import Player from '../components/styles/Player';
import EpisodeButton from '../components/styles/buttons/EpisodeButton';

type MyEpisodes = {
    ep: string;
    interviewee: string;
    id: string;
    img: string;
    date: string;
};

type OtherEpisodes = {
    prev: string;
    next: string;
};

export default function Episode() {
    const { episodes }: any = useEpisodes();
    const { pathname } = useLocation();

    const [id, setId] = useState<string | null>(null);
    const [currentEp, setCurrentEp] = useState<MyEpisodes | null>(null);
    const [otherEp, setOtherEp] = useState<OtherEpisodes | null>(null);

    const side = ()=>{
        if(Number(id) === 1) return 'right'
        else if(Number(id) === episodes.length) return 'left'
        return 'center'
    }

    useEffect(() => {
        const splitId = pathname.split('/');
        const currentId = splitId[splitId.length - 1];
        setId(currentId);
    }, [pathname]);

    useEffect(() => {
        if (id === null) return;
        const episodesReverse = [...episodes].reverse();
        const myId = Number(id)-1;
        setCurrentEp(episodesReverse[myId]);
        setOtherEp({
            prev: episodesReverse[myId-1]?.interviewee,
            next: episodesReverse[myId+1]?.interviewee,
        })
    }, [id]);

    return (
        <div className={styles.episodeSection}>
            <Container>
                <div className={styles.episodeContainer}>
                    <h1>{currentEp?.interviewee}</h1>

                    <div className={styles.episodeInfo}>
                        <div className={styles.episodeImage}>
                            <EpisodesImage
                                img={currentEp !== null ? currentEp.img : ''}
                            />
                        </div>
                        <div className={styles.episodeInfoWrapper}>
                            <div className={styles.episodeInfoAbout}>
                                <p>
                                    Tudo começa com uma ideia. Talvez você
                                    queira abrir um negócio. Talvez você queira
                                    transformar um passatempo em algo mais
                                    sério. Ou talvez você tenha um projeto
                                    criativo para divulgar ao mundo. Seja o que
                                    for, o modo de contar sua história on-line
                                    faz toda a diferença.
                                </p>
                            </div>
                            <div className={styles.episodeInfoPlayer}>
                                <p>
                                    <strong>Ouça o episódio na íntegra:</strong>
                                </p>
                                <div>
                                    <Player
                                        info={{
                                            interviewee:
                                                currentEp !== null
                                                    ? currentEp.interviewee
                                                    : '',
                                            ep:
                                                currentEp !== null
                                                    ? currentEp.ep
                                                    : '',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.buttonEpisode} ${styles[side()]}`}>
                        {Number(id) >= 2 && (
                            <EpisodeButton
                                link={`${Number(id) - 1}`}
                                invert={false}
                                name={otherEp !== null ? otherEp.prev : ''}
                            />
                        )}

                        {Number(id) <= episodes.length - 1 && (
                            <EpisodeButton
                                link={`${Number(id) + 1}`}
                                invert={true}
                                name={otherEp !== null ? otherEp.next : ''}
                            />
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}
