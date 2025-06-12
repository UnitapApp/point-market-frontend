import { useContext } from "react";
import type { TableContextType } from "./table-context";
import { TableContext } from "./table-context";

export function useTableInstance<TData>() {
  const context = useContext(TableContext);

  if (!context) throw new Error("useTableInstance must be used within a Table");
  return context as TableContextType<TData>;
}
