import Container from '../components/styles/Container';
import LinkButton from '../components/styles/buttons/LinkButton';
import EpisodeImage from '../components/styles/episodes/EpisodeImage';
import EpisodesContainer from '../components/styles/episodes/EpisodesContainer';

import styles from './Home.module.scss';

//Images
import firstImage from '../assets/images/episodes/9.png';
import helenGates from '../assets/images/home/helen-gates.jpg';
import markNovo from '../assets/images/home/mark-novo.jpg';

import { useEpisodes } from '../App';

export default function Home() {
    const { episodes }: any = useEpisodes();

    function submit() {
        alert("Enviado")
    }

    return (
        <div className={styles.alignContainer}>
            <main className={styles.main}>
                <Container>
                    <div className={styles.mainContainer}>
                        <div className={styles.mainWrapper}>
                            <h1>Entrevista — Hollie Beaumont</h1>
                            <p>Ouça nosso último episódio.</p>
                            <div className={styles.buttonContainer}>
                                <LinkButton
                                    to="episode/9"
                                    text="Ouça agora"
                                    customClass="beige"
                                />
                            </div>
                        </div>
                        <div className={styles.mainWrapper}>
                            <div className={styles.episodeWrapper}>
                                <EpisodeImage img={firstImage} />
                            </div>
                        </div>
                    </div>
                </Container>
            </main>

            <section className={styles.sectionPhrase}>
                <Container>
                    <h3>Um podcast sobre empreendedores criativos.</h3>
                </Container>
            </section>

            <section className={styles.sectionEpisodes}>
                <Container>
                    <div className={styles.episodesContainer}>
                        <h2>Episódios recentes</h2>
                        <EpisodesContainer episodes={episodes} />
                    </div>
                </Container>
            </section>

            <section className={styles.sectionForm}>
                <Container customClass='center'>
                    <div className={styles.sectionFormContainer}>
                        <h2>Assine nossa newsletter semanal</h2>

                        <form action="" className={styles.form}>
                            <input type="email" name="" id="" />
                            <div className={styles.buttonContainer}>
                                <LinkButton
                                    to="/"
                                    handleSubmit={submit}
                                    text="Assinar"
                                    customClass="beige"
                                />
                            </div>
                        </form>

                        <p>Respeitamos sua privacidade.</p>
                    </div>
                </Container>
            </section>

            <section className={styles.sectionAbout}>
                <Container customClass="center">
                    <div className={styles.aboutContainer}>
                        <div className={styles.aboutContainerImage}>
                            <div className={styles.aboutImage}>
                                <img src={helenGates} alt="" />
                            </div>
                            <div className={styles.aboutImage}>
                                <img src={markNovo} alt="" />
                            </div>
                        </div>
                        <div className={styles.aboutMerchandise}>
                            <h2>Conheça os apresentadores</h2>
                            <p>
                                Nossos apresentadores, Helen Gates e Mark Novo,
                                tratam de uma ampla gama de tópicos e
                                entrevistam os principais líderes em seus
                                respectivos setores.
                            </p>
                            <div className={styles.buttonContainer}>
                                <LinkButton
                                    to="about"
                                    text="Saiba mais"
                                    customClass="black"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
}
