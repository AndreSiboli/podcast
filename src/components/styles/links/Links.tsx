import { Link } from 'react-router-dom'
import styles from './Links.module.scss'

type MyProp = {
    to: string,
    text: string,
    currentPage: string,
    active: boolean,
}

export default function Links(props: MyProp){

    const { to, text, currentPage, active } = props
    const underlineColor = (currentPage  === "/podcast" || currentPage === "/podcast/about") && !active ? 'white' : 'black'
 
    return(
        <Link 
            to={to}
            className={currentPage === `/podcast/${to}`  ? `${styles.underline} ${styles[underlineColor]}`: `${styles.underlineGrowUp} ${styles[underlineColor]}`}
        >
            {text}
        </Link>
    )
}