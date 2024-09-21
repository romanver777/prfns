import { Box, Button, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Header = () => {
  return (
    <Box component={"header"}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{
          height: "75px",
          maxWidth: "960px",
          borderRadius: "20px",
          background: "var(--color-white)",
          paddingInline: "25px 15px",
        }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={"38px"}>
          <Button
            startIcon={
              <AccountCircleIcon sx={{ fontSize: "25px !important" }} />
            }
            sx={{
              display: "flex",
              alignItems: "center",
              textTransform: "unset",
              color: "var(--primary-color-dark)",
              fontSize: "16px",
              lineHeight: "1",
              "&:hover": {
                background: "transparent",
                opacity: "0.8",
                svg: {
                  opacity: "0.8",
                },
              },
            }}
          >
            Иванов И.И.
          </Button>
          <Button
            startIcon={<CalendarMonthIcon />}
            sx={{
              textTransform: "unset",
              background: "var(--active-color-lightblue)",
              color: "var(--active-color-blue)",
              borderRadius: "20px",
              padding: "20px",
              fontSize: "16px",
              lineHeight: "1",
              "&:hover": {
                background: "var(--active-color-lightblue-hover)",
              },
            }}
          >
            Тариф до 15.04.2024
          </Button>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
          <Button
            variant="outlined"
            sx={{
              textTransform: "unset",
              borderRadius: "20px",
              borderColor: "var(--extra-color-dark)",
              color: "var(--extra-color-dark)",
            }}
          >
            Выйти
          </Button>
          <Button
            sx={{
              textTransform: "unset",
              borderRadius: "20px",
              background: "var(--active-color-orange)",
              color: "var(--color-white)",
              transition: "0.3s",
              span: {
                marginLeft: "2px",
              },
              "&:hover": {
                opacity: "0.8",
                transition: "0.3s",
              },
            }}
            endIcon={<ArrowRightAltIcon sx={{ fontSize: "18px !important" }} />}
          >
            О нас
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
