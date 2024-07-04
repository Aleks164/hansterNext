import { Suspense } from "react";
import Loading from "./loading";
import styles from "./page.module.css";
import Statistics from "./pages/statistics";
import { PageParams } from "./types";
import FeedbackModal from "@/entities/FeedbackModal";

export default function Home({ params, searchParams }: PageParams) {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <Statistics searchParams={searchParams} />
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Server Component */}
          <FeedbackModal searchParams={searchParams} />
        </Suspense>
      </Suspense>
    </main>
  );
}
