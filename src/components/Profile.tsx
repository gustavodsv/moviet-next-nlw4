import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return (
        <div className={ styles.profileContainer }>
            <img src="https://pbs.twimg.com/profile_images/1358229460684791808/pGWnIySr_400x400.jpg" alt="gustavo Venâncio"/>
            <div>
                <strong>Gustavo Venâncio</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}