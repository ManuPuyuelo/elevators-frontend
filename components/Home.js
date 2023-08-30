import styles from "../styles/Home.module.css";
import Elevator1 from "./Elevator1";
import Elevator2 from "./Elevator2";
import Building from "./Building";

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Elevator1 />
        <Elevator2 />

        <Building />
      </main>
    </div>
  );
}

export default Home;
