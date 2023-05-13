import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ image }) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    return (
        <>
            {show && (
                <div className={styles.modal} onClick={handleClick}>
                    <div className={styles.overlay}>
                        <img
                            className={styles.modalImage}
                            src={image.image}
                            alt={image.id}
                            onClick={handleClick}
                        />
                        <button className={styles.button} onClick={handleClick}>
                            Close Image
                        </button>
                    </div>
                </div>
            )}
            <div className={styles.item}>
                <img
                    className={styles.image}
                    src={image.image}
                    alt={image.id}
                    onClick={handleClick}
                />
            </div>
        </>
    );
};

export default Card;
