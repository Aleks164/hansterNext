import { Suspense } from "react";
import { PageParams } from "./types";
import Statistics from "./pages/statistics";
import styles from "./page.module.css";

export default function Home({ params, searchParams }: PageParams) {
  return (
    <main className={styles.main}>
      <Suspense fallback={"...loading"}>
        <Statistics searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
