import React from "react";

import getStatistics from "@/shared/lib/api/getStatistics";
import statColumns from "@/shared/const/statColumns";
import Table from "@/shared/ui/Table";
import { SearchParams } from "@/app/types";
import TableHeader from "@/shared/ui/Table/TableHeader";
import ControlPanel from "@/entities/ControlPanel";

interface Props {
  searchParams: SearchParams;
}

async function Statistics({ searchParams }: Props) {
  const statistics = await getStatistics(searchParams);
  const currentSize = searchParams.size ? +searchParams.size : 10;
  const maxPaginationPage =
    statistics && currentSize
      ? Math.ceil(statistics.items.length / +currentSize)
      : 1;
  return (
    <>
      <ControlPanel searchParams={searchParams} maxPage={maxPaginationPage} />
      <Table columns={statColumns} tableData={statistics}>
        <TableHeader searchParams={searchParams} columns={statColumns} />
      </Table>
    </>
  );
}

export default Statistics;
