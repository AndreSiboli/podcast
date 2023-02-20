import styles from './Container.module.scss';
import { ReactNode } from 'react';

type MyProps = {
    children: ReactNode;
    customClass?: string;
};

export default function Container(props: MyProps) {
    const { children, customClass = '' } = props;

    return (
        <div className={`${styles.Container} ${styles[customClass]}`}>
            {children}
        </div>
    );
}
