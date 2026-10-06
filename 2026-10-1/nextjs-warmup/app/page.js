import styles from "./page.module.css";
import Link from "next/link";
import Counter from "./components/Counter";
import MessageButton from "./components/Message_button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Tere tulemast</h1>
        <p>minu lehele!</p>

        <Link href="/about">About</Link>
        <MessageButton />

        <Counter />
      </main>
    </div>
  );
}
