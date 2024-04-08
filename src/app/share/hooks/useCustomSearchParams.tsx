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

      params.set(key, value);

      console.log(params.toString());
      router.push(pathname + "?" + params.toString());
    },
    [searchParams, router, pathname]
  );

  return { setSearchParams, searchParams, router, pathname };
}

export default useCustomSearchParams;
