import styles from './Room.module.css';
import Floor from './Floor';
import Walls from './Walls';
import Roof from './Roof';

function Room() {
    return(
        <main className={styles.RoomContainer}>
            <section className={styles.Box}>
                <div className={styles.Room}>
                    <Roof/>
                    <Walls/>
                    <Floor/>
                </div>
            </section>
        </main>
    );
};

export default Room;