import { SearchParams } from "@/app/types";
import getFeedbacksById from "@/shared/lib/api/getFeedbacksById";
import React, { Suspense } from "react";
import styles from "./styles.module.css";
import Loading from "@/app/loading";
import ModalContent from "./ModalContent";
import SortControlPanel from "./SortControlPanel";

interface Props {
  searchParams: SearchParams;
}

async function FeedbackModal({ searchParams }: Props) {
  const nmId = searchParams.feedbackId;
  // if (!nmId) return null;
  console.log(123);

  return (
    <div className={styles.modal_container}>
      <div className={styles.modal_blur} />
      <Suspense fallback={<Loading />}>
        {/* @ts-expect-error Server Component */}
        <ModalContent nmId={nmId}>
          <SortControlPanel searchParams={searchParams} />
        </ModalContent>
      </Suspense>
    </div>
  );
}

export default FeedbackModal;
