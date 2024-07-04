import { Suspense } from "react";
import Loading from "./loading";
import styles from "./page.module.css";
import Statistics from "./pages/statistics";
import { PageParams } from "./types";

export default function Home({ params, searchParams }: PageParams) {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <Statistics searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
