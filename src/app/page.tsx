import { Suspense } from "react";
import { PageParams } from "./types";
import Statistics from "./pages/statistics";
import styles from "./page.module.css";
import Loading from "./loading";

export default function Home({ params, searchParams }: PageParams) {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        <Statistics searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
