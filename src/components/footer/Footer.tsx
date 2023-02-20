import Container from "../styles/Container";
import styles from "./Footer.module.scss";

export default function Footer(){
    return(
        <footer className={styles.footer}>
           <Container customClass="spacing">
                <div className={styles.footerContainer}>
                    <div className={styles.footerLinks}>
                        <nav className={styles.footerLinksWrapper}>
                            <p>Siga-nos</p>
                            <a href="https://www.instagram.com">Instagram</a>
                            <a href="https://www.facebook.com">Facebook</a>
                            <a href="https://www.twitter.com">Twitter</a>
                        </nav>
                        <nav className={styles.footerLinksWrapper}>
                            <p>Onde ouvir</p>
                            <a href="https://www.stitcher.com">Stitcher</a>
                            <a href="https://www.spotify.com">Spotify</a>
                            <a href="https://www.apple.com/apple-podcasts">Podcasts da Apple</a>
                            <a href="https://podcasts.google.com/">Podcasts da Google</a>
                        </nav>
                    </div>
                    <div className={styles.footerLinksRef}>
                        <h2>Sundew Podcast</h2>
                        <p>Feito com base em um site no <a href="https://pt.squarespace.com/">Squarespace</a></p>
                    </div>
                </div>
           </Container>
        </footer>
    )
}