import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);

    return (
        <div className={ styles.profileContainer }>
            <img src="https://i.pinimg.com/originals/a1/2d/6b/a12d6bc33a1421669ff8f4b1dbae3978.png" alt="User"/>
            <div>
                <strong>Pikachu Code Café Chocolate-Charge</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}