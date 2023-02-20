import styles from './EpisodeImage.module.scss'

type MyProps = {
    img: string,
    animation?: boolean
}

export default function EpisodesImage(props: MyProps){

    const { img, animation=false } = props

    return(
        <div className={styles.episodeContainer}>
            <img src={img} alt="" className={animation ? styles.effect : ''} />
        </div>
    )
}