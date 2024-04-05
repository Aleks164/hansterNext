import Image from "next/image";
import styles from "./page.module.css";
import { Suspense } from "react";
import Table from "./components/Table/Table";
import Test from "./Test";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        <Test />
        <Suspense fallback={"...loading"}>
          <Table />
        </Suspense>
      </div>
    </main>
  );
}
