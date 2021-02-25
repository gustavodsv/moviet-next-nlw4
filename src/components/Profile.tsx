import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://pbs.twimg.com/profile_images/1358229460684791808/pGWnIySr_400x400.jpg" alt="gustavo Venâncio"/>
            <div>
                <strong>Gustavo Venâncio</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}