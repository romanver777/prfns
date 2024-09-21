import { Box, Button, Stack } from "@mui/material";
import MainMenu from "../SideMenu/MainMenu/MainMenu";
import SupportMenu from "../SideMenu/SupportMenu/SupportMenu";
import MessageIcon from "@mui/icons-material/Message";

type TProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: TProps) => {
  return (
    <Stack
      direction={"row"}
      gap="48px"
      sx={{
        padding: "16px",
        backgroundColor: "var(--light-color-gray)",
        minHeight: "100vh",
      }}
    >
      <Stack
        gap={"5px"}
        sx={{ width: "100%", minWidth: "320px", maxWidth: "380px" }}
      >
        <MainMenu />
        <SupportMenu />
        <Button
          variant="contained"
          startIcon={<MessageIcon />}
          sx={{
            height: "70px",
            borderRadius: "20px",
            textTransform: "none",
            fontSize: "18px",
          }}
        >
          Связаться с нами
        </Button>
      </Stack>
      <Box sx={{ width: "100%", maxWidth: "calc(100% - 380px)" }}>
        {children}
      </Box>
    </Stack>
  );
};

export default PageLayout;
