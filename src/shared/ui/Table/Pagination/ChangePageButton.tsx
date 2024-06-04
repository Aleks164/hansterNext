import React from "react";
import Link from "next/link";

interface Props {
  nextPage: number;
  directionIcon: React.ReactNode;
  isDisabled: boolean;
}

function ChangePageButton({ nextPage, directionIcon, isDisabled }: Props) {
  return (
    <Link
      href={{
        query: { currentPage: nextPage },
      }}
    >
      <button disabled={isDisabled}>
        <span>{directionIcon}</span>
      </button>
    </Link>
  );
}

export default ChangePageButton;
