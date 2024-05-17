"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function useCustomSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const setSearchParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (value === "") params.delete(key);
      else params.set(key, value);

      router.push(pathname + "?" + params.toString());
    },
    [searchParams, router, pathname]
  );

  return { setSearchParams, searchParams, router, pathname };
}

export default useCustomSearchParams;
