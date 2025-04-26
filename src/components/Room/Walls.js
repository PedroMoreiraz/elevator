import styles from './Walls.module.css';

function Walls() {
    return(
        <>
            <section className={styles.wallLeft}></section>
            <section className={styles.wallElevator}></section>
            <section className={styles.wallRight}></section>
        </>
    );
};

export default Walls;