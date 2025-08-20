import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className={styles.footer}>
        <a
          href="/login"
          rel="noopener noreferrer"
        >
          
          Login
        </a>
        <a href="/register" rel="noopener noreferrer">
          Registriere dich hier →
        </a>
      </footer>
    </div>
  );
}
