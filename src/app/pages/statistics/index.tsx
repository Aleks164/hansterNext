import React from "react";
import ControlPanel from "@/app/pages/statistics/ControlPanel";

import getStatistics from "@/shared/lib/getStatistics";
import statColumns from "@/shared/const/statColumns";
import Table from "@/shared/ui/Table";
import { SearchParams } from "@/app/types";
import TableHeader from "@/shared/ui/Table/TableHeader";

interface Props {
  searchParams: SearchParams;
}

async function Statistics({ searchParams }: Props) {
  const statistics = await getStatistics(searchParams);
  const maxPaginationPage =
    statistics && searchParams.size && +searchParams.size
      ? Math.ceil(statistics.items.length / +searchParams.size)
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
