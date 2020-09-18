import React from 'react';

/* React Icons */
import { BsThreeDots } from 'react-icons/bs';

import styles from '../../styles/Card.module.scss';

function Card ({ trip }) {

    const {title, firstDay, lastDay, imageUrl} = trip;
    
    return (
        <section className={styles['overview-card']}>
            <div 
                className={styles['card-image']}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className={styles['card-label']}>
                    <span className={styles['label-header']}>
                        {title}
                    </span>
                    <span className={styles['label-body']}>
                        {firstDay} - {lastDay}
                    </span>
                </div>
                <div className={styles['card-options']}>
                    <BsThreeDots />
                </div>
            </div>
        </section>
    )
}

export default Card;