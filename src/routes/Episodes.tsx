import { useState } from 'react';
import { useEpisodes } from '../App';

import styles from './Episodes.module.scss';

import Container from '../components/styles/Container';
import EpisodesContainer from '../components/styles/episodes/EpisodesContainer';

export default function Episodes() {
    const { episodes }: any = useEpisodes();

    return (
        <div className={styles.episodesSection}>
            <Container customClass='center'>
                <EpisodesContainer episodes={episodes} animation={true} />
            </Container>
        </div>
    );
}
