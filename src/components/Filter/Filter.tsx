import { useEffect, useState } from "react";
import { Box, Button, Input, Stack } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";

type TProps = {
  disabled: boolean;
  onSetFilter: (data: TFilterData | null) => void;
  isResetFilter: boolean;
  onExportFile: () => void;
};

export type TFilterData = {
  [key: string]: string;
  баркод: string;
  "артикул поставщика": string;
  размер: string;
  категория: string;
};

const Filter = ({
  disabled,
  onSetFilter,
  isResetFilter,
  onExportFile,
}: TProps) => {
  const initFilters = {
    баркод: "",
    "артикул поставщика": "",
    размер: "",
    категория: "",
  };
  const filters = [
    { name: "баркод", size: "170px", placeholder: "213465789480" },
    { name: "артикул поставщика", size: "170px", placeholder: "брюки" },
    { name: "размер", size: "50px", placeholder: "44" },
    { name: "категория", size: "0" },
  ];
  const [filterData, setFilterData] = useState<TFilterData>({ ...initFilters });

  useEffect(() => {
    if (isResetFilter) {
      setFilterData({ ...initFilters });
      onSetFilter(null);
    }
  }, [isResetFilter]);

  const handleChange = (name: string, value: string) => {
    setFilterData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSetFilter = () => {
    const fullFilters = Object.keys(filterData).filter(
      (key: string) => filterData[key]
    );
    if (!fullFilters.length) {
      onSetFilter(null);
    } else {
      onSetFilter(filterData);
    }
  };

  const setFirstLetterUppercase = (value: string) => {
    return value[0].toUpperCase() + value.split(" ")[0].slice(1);
  };

  return (
    <Box
      sx={{
        pointerEvents: disabled ? "none" : "auto",
        opacity: disabled ? "0.5" : "1",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"8px"}
        flexWrap={"wrap"}
        marginBottom={"10px"}
      >
        {filters.map((item, index) => (
          <Stack
            key={index}
            direction={"row"}
            alignItems={"center"}
            gap={"14px"}
            sx={{
              height: "68px",
              background: "var(--color-white)",
              borderRadius: "20px",
              border: "1px solid var(--medium-color-gray)",
              padding: "8px 15px",
              color: "var(--primary-color-dark)",
            }}
          >
            <Box>{setFirstLetterUppercase(item.name)}</Box>
            {item.size !== "0" && (
              <Input
                id="outlined-number"
                value={filterData[item.name]}
                placeholder={`${
                  item.placeholder
                    ? setFirstLetterUppercase(item.placeholder)
                    : ""
                }`}
                type={item.name === "артикул поставщика" ? "text" : "number"}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleChange(item.name, event.target.value)
                }
                sx={{
                  height: "50px",
                  width: `${item.size}`,
                  padding: "18px 14px",
                  background: "var(--extra-light-color-gray)",
                  outline: "none",
                  border: "none",
                  borderRadius: "16px",
                  "&:before": {
                    display: "none",
                  },
                  "&:after": {
                    display: "none",
                  },
                  "& input[type=number]": {
                    MozAppearance: "textfield",
                  },
                  "& input[type=number]::-webkit-outer-spin-button": {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                  "& input[type=number]::-webkit-inner-spin-button": {
                    WebkitAppearance: "none",
                    margin: 0,
                  },
                }}
              />
            )}
          </Stack>
        ))}
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"6px"}>
        <Button
          sx={{
            textTransform: "unset",
            borderRadius: "20px",
            background: "var(--active-color-blue)",
            color: "var(--color-white)",
            transition: "0.3s",
            padding: "12px 19px",
            "&:hover": {
              opacity: "0.8",
              transition: "0.3s",
            },
          }}
          onClick={handleSetFilter}
        >
          Сформировать
        </Button>
        <Button
          startIcon={<IosShareIcon />}
          sx={{
            textTransform: "unset",
            borderRadius: "20px",
            background: "var(--extra-color-dark)",
            color: "var(--color-white)",
            transition: "0.3s",
            padding: "12px 19px",
            "&:hover": {
              opacity: "0.8",
              transition: "0.3s",
            },
          }}
          onClick={onExportFile}
        >
          Экспорт
        </Button>
      </Stack>
    </Box>
  );
};

export default Filter;
