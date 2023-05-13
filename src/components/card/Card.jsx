import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ image, onRemoveItem }) => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };

    const handleDelete = () => {
        onRemoveItem(image.id);
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
                <div className={styles.content}>
                    <div className={styles.image}>
                        <img
                            className={styles.image}
                            src={image.image}
                            alt={image.id}
                            onClick={handleClick}
                        />
                    </div>
                </div>
                <button onClick={() => handleDelete(image.id)} className={styles.remove}>
                    <img width={24} height={24} src='/close.svg' alt='' />
                </button>
            </div>
        </>
    );
};

export default Card;
