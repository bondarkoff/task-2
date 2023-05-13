import styles from './Card.module.scss';

const Card = ({ image }) => {
    return (
        <div className={styles.item}>
            <img className={styles.image} src={image.image} alt={image.id} />
        </div>
    );
};

export default Card;
