import React from "react";
import ControlPanel from "@/app/pages/statistics/ControlPanel";
import Table from "@/app/components/Table/Table";
import TableHeader from "@/app/components/Table/TableHeader";
import statColumns from "@/app/const/statColumns";
import getStatistics from "@/app/lib/getStatistics";
import { SearchParams } from "@/app/types";

interface Props {
  searchParams: SearchParams;
}

async function Statistics({ searchParams }: Props) {
  const statistics = await getStatistics(searchParams);
  return (
    <>
      <ControlPanel
        searchParams={searchParams}
        maxPage={Math.ceil(statistics?.items.length / searchParams.size)}
      />
      <Table
        columns={statColumns}
        tableData={statistics}
        searchParams={searchParams}
      >
        <TableHeader columns={statColumns} />
      </Table>
    </>
  );
}

export default Statistics;
