import React from 'react';

import styles from '../../styles/SwitchBar.module.scss';

const SwitchBar = ({ showContent }) => (

    <div className={styles['switch-bar']}>
        <div className={styles['switch-items']}>

            {/* Show Upcoming Trips Content */}
            <div 
                className={styles['switch-item']}
                onClick={() => showContent('upcoming')}
                tabIndex='0'
            >
                <span>Upcoming Trips</span>
            </div>
            
            {/* Show Past Trips Content */}
            <div 
                className={styles['switch-item']}
                onClick={() => showContent('past')}
                tabIndex='1'
            >
                <span>Past Trips</span>
            </div>

        </div>
    </div>
);

export default SwitchBar;