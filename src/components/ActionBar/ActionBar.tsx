import { Box, Button, Stack } from "@mui/material";
import InputIcon from "@mui/icons-material/Input";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import CloseIcon from "@mui/icons-material/Close";

type TProps = {
  onDownloadJson: () => void;
  onClearEditing: () => void;
};

const ActionBar = ({ onDownloadJson, onClearEditing }: TProps) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{
        borderBlock: "1px solid var(--medium-color-dark-gray)",
        paddingBlock: "5px",
        maxWidth: "960px",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} gap={"35px"}>
        <Button
          startIcon={<InputIcon />}
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "unset",
            color: "var(--medium-color-dark)",
            fontSize: "14px",
            lineHeight: "1",
            transition: "0.3s",
            paddingBlock: "4px",
            "&:hover": {
              background: "transparent",
              opacity: "0.8",
              transition: "0.3s",
              svg: {
                opacity: "0.8",
                transition: "0.3s",
              },
            },
          }}
          onClick={onDownloadJson}
        >
          Загрузить данные из cvs
        </Button>
        <Button
          startIcon={<SimCardDownloadIcon />}
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "unset",
            color: "var(--medium-color-dark)",
            fontSize: "14px",
            lineHeight: "1",
            transition: "0.3s",
            paddingBlock: "4px",
            "&:hover": {
              background: "transparent",
              opacity: "0.8",
              transition: "0.3s",
              svg: {
                opacity: "0.8",
                transition: "0.3s",
              },
            },
            pointerEvents: "none",
          }}
        >
          Изменить данные
        </Button>
      </Stack>
      <Box
        sx={{
          paddingLeft: "45px",
          borderLeft: "1px solid var(--medium-color-dark-gray)",
        }}
      >
        <Button
          endIcon={<CloseIcon sx={{ fontSize: "15px !important" }} />}
          sx={{
            display: "flex",
            alignItems: "center",
            textTransform: "unset",
            color: "var(--medium-color-dark)",
            fontSize: "14px",
            lineHeight: "1",
            transition: "0.3s",
            paddingInline: "4px",
            span: {
              marginLeft: "3px",
            },
            "&:hover": {
              background: "transparent",
              opacity: "0.8",
              transition: "0.3s",
              svg: {
                opacity: "0.8",
                transition: "0.3s",
              },
            },
          }}
          onClick={onClearEditing}
        >
          Очистить
        </Button>
      </Box>
    </Stack>
  );
};

export default ActionBar;
