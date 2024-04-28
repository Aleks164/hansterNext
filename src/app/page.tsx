import { Suspense } from "react";
import RangePicker from "./components/RangePicker";
import Table from "./components/Table/Table";
import TableHeader from "./components/Table/TableHeader";
import statColumns from "./const/statColumns";
import styles from "./page.module.css";
import { PageParams } from "./types";
import ControlPanel from "./components/ControlPanel";

export default function Home({ params, searchParams }: PageParams) {
  return (
    <main className={styles.main}>
      <div>
        <Suspense fallback={"...loading"}>
          <ControlPanel />
          <Table columns={statColumns} searchParams={searchParams}>
            <TableHeader columns={statColumns} />
          </Table>
        </Suspense>
      </div>
    </main>
  );
}
