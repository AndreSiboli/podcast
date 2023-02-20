import { Link } from "react-router-dom"
import styles from "./LinkButton.module.scss"

type MyProps = {
    to: string,
    text: string,
    customClass: string,
    handleSubmit?: Function,
}

export default function LinkButton(props: MyProps){

    const { to, text, customClass, handleSubmit } = props

    function submit(e: {
        preventDefault: Function
    }){
        e.preventDefault()
        if(typeof handleSubmit === 'function') handleSubmit()
    }

    return(
        <div className={styles.buttonContainer}>
            {
                !handleSubmit ? (
                    <Link 
                    to={to}
                    className={`${styles.buttonLink} ${styles[customClass]}`}
                    >
                        {text}
                    </Link>
                ) :

                (
                    <button 
                        className={`${styles.buttonLink} ${styles[customClass]}`}
                        onClick={(e)=>submit(e)}
                    >
                        {text}
                    </button>
                )
                   
            }
           
        </div>
    )
}