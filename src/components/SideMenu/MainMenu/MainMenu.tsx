import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";

const MainMenu = () => {
  const list = [
    {
      name: "Настройки",
      icon: (
        <SettingsOutlinedIcon sx={{ color: "var(--primary-color-light)" }} />
      ),
    },
    {
      name: "Внесение данных",
      icon: (
        <EditNoteOutlinedIcon
          sx={{
            color: "var(--primary-color-light)",
            width: "30px",
            height: "27px",
            marginRight: "-5px",
          }}
        />
      ),
    },
    {
      name: "Отчеты",
      icon: (
        <AssignmentOutlinedIcon sx={{ color: "var(--primary-color-light)" }} />
      ),
    },
    {
      name: "База знаний",
      icon: (
        <MenuBookOutlinedIcon
          sx={{
            color: "var(--primary-color-light)",
            width: "22px",
            marginLeft: "2px",
          }}
        />
      ),
    },
  ];
  return (
    <Box
      sx={{
        padding: "23px 10px 10px",
        background: "var(--extra-color-dark)",
        borderRadius: "20px",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ padding: "0 14px", marginBottom: "23px" }}
      >
        <Box sx={{ fontSize: "24px", fontWeight: "600", lineHeight: "14px" }}>
          <Box
            component={"span"}
            sx={{
              background: "var(--active-color-blue)",
              padding: "0 5px",
              borderRadius: "6px",
              marginRight: "5px",
            }}
          >
            ФИН
          </Box>
          Контроль
        </Box>
        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            color: "var(--secondary-color-light)",
            fontSize: "14px",
            background: "var(--medium-color-dark)",
            padding: "3px 5px 3px 10px",
            borderRadius: "14px",
            border: "0",
            span: {
              margin: "0",
            },
            svg: {
              fontSize: "16px !important",
            },
          }}
          endIcon={<CloseIcon sx={{ marginLeft: "4px" }} />}
        >
          Меню
        </Button>
      </Stack>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          padding: "0",
        }}
      >
        {list.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              height: "62px",
              background: "var(--medium-color-dark)",
              borderRadius: "10px",
              padding: "0",
            }}
          >
            <ListItemButton
              sx={{
                justifyContent: "space-between",
                padding: "16px",
                borderRadius: "inherit",
              }}
            >
              <Stack
                direction={"row"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={"18px"}
              >
                <ListItemIcon sx={{ minWidth: "unset" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={`${item.name}`} />
              </Stack>
              <ListItemIcon sx={{ minWidth: "unset" }}>
                <ArrowDropDownIcon
                  sx={{ color: "var(--secondary-color-light)" }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MainMenu;
