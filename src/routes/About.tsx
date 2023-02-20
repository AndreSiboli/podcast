import styles from './About.module.scss';

import Container from '../components/styles/Container';
import HostContainer from '../components/styles/HostContainer';
import { useState } from 'react';

import helenGates from '../assets/images/home/helen-gates.jpg';
import markNovo from '../assets/images/home/mark-novo.jpg';

export default function About() {
    const [hosts, setHosts] = useState([
        {
            img: helenGates,
            name: 'Helen Gates',
            about: 'Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para divulgar ao mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença.',
            socialMedia: {
                instagram: 'https://instagram.com',
                facebook: 'https://facebook.com',
                twitter: 'https://twitter.com',
            },
        },
        {
            img: markNovo,
            name: 'Mark Novo',
            about: 'Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para divulgar ao mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença.',
            socialMedia: {
                instagram: 'https://instagram.com',
                facebook: 'https://facebook.com',
                twitter: 'https://twitter.com',
            },
        },
    ]);

    return (
        <div className={styles.alignContainer}>
            <div className={styles.aboutContainer}>
                <Container>
                    <div className={styles.aboutWrapper}>
                        <div className={styles.aboutInfos}>
                            <h1>Um podcast</h1>
                            <h3>
                                sobre empreendedores criativos em design, moda e
                                fotografia.
                            </h3>
                            <p>
                                Tudo começa com uma ideia. Talvez você queira
                                abrir um negócio. Talvez você queira transformar
                                um passatempo em algo mais sério. Ou talvez você
                                tenha um projeto criativo para divulgar ao
                                mundo. Seja o que for, o modo de contar sua
                                história on-line faz toda a diferença.
                            </p>
                        </div>
                        <div className={styles.linksContainer}>
                            <nav className={styles.linksWrapper}>
                                <p>
                                    <strong>Onde ouvir</strong>
                                </p>
                                <a href="https://www.stitcher.com">Stitcher</a>
                                <a href="https://www.spotify.com">Spotify</a>
                                <a href="https://www.apple.com/apple-podcasts">
                                    Podcasts da Apple
                                </a>
                                <a href="https://podcasts.google.com/">
                                    Podcasts da Google
                                </a>
                            </nav>
                        </div>
                    </div>
                </Container>
            </div>
            <section className={styles.hostSection}>
                <Container>
                    <div className={styles.hostContainer}>
                        {hosts.map((host) => (
                            <HostContainer host={host} key={host.name} />
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}
