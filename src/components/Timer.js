import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

const Timer = () => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const startDate = new Date('January 1, 2024 00:00:00');
        const interval = setInterval(() => {
            const now = new Date();
            const diff = now.getTime() - startDate.getTime();
            setTime(diff);
        }, 1000);

    return () => clearInterval(interval);
    }, []);

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const minutes = Math.floor(time / (1000 * 60) % 60);
    const seconds = Math.floor(time / 1000 % 60);

    return (
        <div className={styles.timer}>
            <p>
                It has been <br/>
                {`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`} <br/>
                since the turn of 2024                
            </p>
        </div>
    )
}

export default Timer;


