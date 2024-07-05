import getFeedbacksById from "@/shared/lib/api/getFeedbacksById";
import React from "react";
import FeedbacksWrapper from "./FeedbacksWrapper";
import ProductCart from "./ProductCart";

interface Props {
  nmId: string;
  children?: React.ReactNode;
}

async function ModalContent({ nmId, children }: Props) {
  const feedbacks = (await getFeedbacksById(nmId)) || [];
  console.log(123);
  return (
    <>
      <ProductCart product={undefined} />{" "}
      <div>
        {children}
        <FeedbacksWrapper feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default ModalContent;
