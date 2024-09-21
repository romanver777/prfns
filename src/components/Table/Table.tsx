import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Box } from "@mui/material";
import { CellValueChangedEvent, ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import "./grid.css";
import { TData } from "../../app/ResiduesPage/ResiduesPage";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

export type TRow = {
  [key: string]: string | number;
  баркод: string;
  предмет: string;
  "артикул поставщика": string;
  размер: string;
  "доступно к заказу": number;
  "товары в пути": number;
  "итого кол-во товара": number;
};

export type TCol = {
  field: string;
  editable?: boolean;
  cellDataType?: string;
};

type TProps = {
  data: TData | null;
  onSetData: (data: TRow) => void;
};

const Table = ({ data, onSetData }: TProps) => {
  const gridRef = useRef(null);
  const [isLoadedTable, setIsLoadedTable] = useState(false);

  useEffect(() => {
    if (!isLoadedTable) return;
    const headerSelector = ".ag-theme-quartz";
    const scrollSelector = ".ag-body-horizontal-scroll";
    const scrollViewportSelector = ".ag-body-horizontal-scroll-viewport";

    const scrollElement = document.querySelector(scrollSelector) as HTMLElement;
    const scrollViewportElement = document.querySelector(
      scrollViewportSelector
    ) as HTMLElement;

    const cloneElement = scrollElement.cloneNode(true) as HTMLElement;
    const cloneViewportElement = cloneElement.querySelector(
      scrollViewportSelector
    ) as HTMLElement;

    const headerElement = document.querySelector(headerSelector) as HTMLElement;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    headerElement && headerElement?.prepend(cloneElement);

    const addScrollListener = () => {
      scrollViewportElement.scrollTo({
        left: cloneViewportElement.scrollLeft,
      });
    };
    cloneViewportElement.addEventListener("scroll", addScrollListener);

    scrollElement.style.visibility = "hidden";
    scrollElement.style.height = "0px !important";

    return () => removeEventListener("scroll", addScrollListener);
  }, [isLoadedTable]);

  const getSum = useCallback(
    (name: string) => {
      return data?.rows.reduce((ac, el) => ac + +el[name], 0);
    },
    [data]
  );

  const pinnedBottomRowData = useMemo(() => {
    return [
      {
        баркод: "Итого:",
        "доступно к заказу": getSum("доступно к заказу"),
        "товары в пути": getSum("товары в пути"),
        "итого кол-во товара": getSum("итого кол-во товара"),
      },
    ];
  }, [data]);

  const onGridReady = useCallback(() => {
    setIsLoadedTable(true);
  }, [data]);

  const onCellValueChanged = useCallback((event: CellValueChangedEvent) => {
    const fieldName = event.colDef.field;
    const fieldValue =
      event.newValue !== null && event.newValue >= 0
        ? event.newValue
        : event.oldValue;

    const newData = {
      ...event.data,
      [`${fieldName}`]: fieldValue,
    };
    onSetData(newData);
  }, []);

  return (
    <Box
      className="ag-theme-quartz"
      sx={{
        height: "300px",
        width: "100%",
        padding: "10px 15px 30px",
        background: "#fff",
        borderRadius: "20px",
      }}
    >
      <AgGridReact
        ref={gridRef}
        rowData={data?.rows}
        columnDefs={data?.cols}
        pinnedBottomRowData={pinnedBottomRowData}
        onGridReady={onGridReady}
        autoSizeStrategy={{
          type: "fitGridWidth",
          defaultMinWidth: 200,
        }}
        onCellValueChanged={onCellValueChanged}
      />
    </Box>
  );
};

export default Table;
