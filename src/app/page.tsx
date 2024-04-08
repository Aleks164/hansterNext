import { Suspense } from "react";
import Table from "./components/Table/Table";
import statColumns from "./const/statColumns";
import TableHeader from "./components/Table/TableHeader";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Suspense fallback={"...loading"}>
          <Table columns={statColumns}>
            <TableHeader columns={statColumns} />
          </Table>
        </Suspense>
      </div>
    </main>
  );
}
