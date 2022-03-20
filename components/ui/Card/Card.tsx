import styles from './Card.module.scss';

type Props = {
    children: JSX.Element | JSX.Element[];
    onClick: () => void;
}

const Card = ({ children, onClick }: Props) => {
    return <div className={styles.card} onClick={onClick}>
        {children}
    </div>
};

export default Card;