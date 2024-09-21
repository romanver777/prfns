import { SetStateAction, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import PageLayout from "../../components/PageLayout/PageLayout";
import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Filter, { TFilterData } from "../../components/Filter/Filter";
import ActionBar from "../../components/ActionBar/ActionBar";
import Table, { TCol, TRow } from "../../components/Table/Table";
import Message from "../../components/Message/Message";

export type TData = {
  rows: TRow[];
  cols: TCol[];
};

const ResiduesPage = () => {
  const [loading, setLoading] = useState(false);
  const [wasDownload, setWasDownload] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tableData, setTableData] = useState<TData | null>(null);
  const [originalData, setOriginalData] = useState<TData | null>(null);
  const [filters, setFilters] = useState<TFilterData | null>(null);
  const [isResetFilters, setIsResetFilters] = useState(false);
  const fileRef = useRef(null);

  const handleDownloadFile = async () => {
    setWasDownload(false);
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("./data.json");

      if (!response.ok) {
        setError("error");
        return;
      }
      const data = await response.json();

      setTableData(data);
      setOriginalData(JSON.parse(JSON.stringify(data)));
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
      setWasDownload(true);
    }
  };

  const handleExportFile = async () => {
    if (!tableData && fileRef.current) return;

    const options = {
      suggestedName: "data.json",
      types: [
        {
          description: "JSON",
          accept: {
            "application/json": ".json",
          },
        },
      ],
      excludeAcceptAllOption: true,
    };

    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const fileHandle = await window.showSaveFilePicker(options);
      const writableStream = await fileHandle.createWritable();

      await writableStream.write(JSON.stringify(tableData));
      await writableStream.close();

      setOriginalData(JSON.parse(JSON.stringify(tableData)));
    } catch (e) {
      console.log("Cancelled, no file selected", e);
    }
  };

  const handleClearEditing = () => {
    if (!tableData) return;
    setTableData(JSON.parse(JSON.stringify(originalData)));
    setIsResetFilters(true);
  };

  const getDate = () => {
    return Intl.DateTimeFormat().format(new Date()) + "г.";
  };

  const handleSetData = (data: TRow) => {
    setTableData((prev) => {
      return (
        prev && {
          ...prev,
          rows: prev.rows.map((row) => {
            if (row["баркод"] === data["баркод"]) {
              return data;
            }
            return row;
          }),
        }
      );
    });
  };

  const handleSetFilters = (data: SetStateAction<TFilterData | null>) => {
    setFilters(data);
    setIsResetFilters(false);
  };

  const getArrayOfSizes = (str: string) => {
    const array = str.split("-");
    const result = [];

    for (let i = 0; i <= +array[1] - +array[0]; i++) {
      const sum = +array[0] + i;
      result.push(sum.toString());
    }
    return result;
  };

  const getFilteredTableData = () => {
    if (!filters) {
      return tableData;
    }

    const newRows = tableData?.rows.filter((row) => {
      const array = Object.keys(filters).map((key: string) => {
        if (!filters[key]) return true;

        if (row[key].toString().includes("-")) {
          const sizes = getArrayOfSizes(row[key].toString());
          return sizes.includes(filters[key].toString().toLowerCase());
        }
        return row[key]
          .toString()
          .includes(filters[key].toString().toLowerCase());
      });

      return !array.includes(false);
    });

    return {
      cols: tableData ? tableData.cols : [],
      rows: newRows ? newRows : [],
    };
  };

  return (
    <PageLayout>
      <Header />
      <Box component={"main"} sx={{ paddingTop: "48px" }}>
        <Stack gap={"30px"}>
          {tableData && (
            <Title
              title={`Остатки сформированы на ${getDate()}`}
              actionTitle="Инструкции"
              actionIcon={<LibraryBooksIcon />}
            />
          )}
          <Filter
            disabled={!tableData}
            onSetFilter={handleSetFilters}
            isResetFilter={isResetFilters}
            onExportFile={handleExportFile}
          />
          <ActionBar
            onDownloadJson={handleDownloadFile}
            onClearEditing={handleClearEditing}
          />
          {loading && <Message text="Загружаем.." />}
          {(error || (wasDownload && !tableData)) && (
            <Message text="Данные не найдены" />
          )}
          {tableData && (
            <Table data={getFilteredTableData()} onSetData={handleSetData} />
          )}
        </Stack>
      </Box>
    </PageLayout>
  );
};

export default ResiduesPage;
