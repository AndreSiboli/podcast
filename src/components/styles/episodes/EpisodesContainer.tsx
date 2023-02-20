import styles from "./EpisodesContainer.module.scss"

import EpisodeContainer from "./EpisodeContainer"

type MyProps = {
    episodes: {}[]
    animation?: boolean,
}

export default function episodesContainer({episodes, animation=false}: MyProps){
    return(
        <div className={styles.episodesWrapper}>
            {episodes.map((ep:any)=>(
                <EpisodeContainer episode={ep} key={ep.ep} animation={animation}/>
            ))}
        </div>
    )
}