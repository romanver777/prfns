import { Box, List, ListItem, ListItemButton, Stack } from "@mui/material";

const SupportMenu = () => {
  const support = [
    {
      name: "Номер поддержки:",
      descr: "8 (999) 999 99 99",
    },
    {
      name: "Почта поддержки:",
      descr: "pf1@werthesest.ru",
    },
    {
      name: "Часы работы:",
      descr: "Пн - Пт с 9:00 до 19:00 мск",
    },
  ];
  const laws = [
    "Пользовательское соглашение",
    "Политика конфиденциальности",
    "Юридическая информация",
    "Публичная оферта",
  ];

  return (
    <Box
      sx={{
        padding: "20px 20px 16px",
        background: "var(--extra-color-dark)",
        borderRadius: "20px",
      }}
    >
      <Box sx={{ fontSize: "18px", marginBottom: "22px" }}>
        Техническая поддержка
      </Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={"22px 30px"}
        flexWrap={"wrap"}
        sx={{ marginBottom: "22px" }}
      >
        {support.map((item, index) => (
          <Box key={index}>
            <Box
              sx={{ fontSize: "12px", color: "var(--secondary-color-light)" }}
            >
              {item.name}
            </Box>
            <Box>{item.descr}</Box>
          </Box>
        ))}
      </Stack>
      <List sx={{ padding: "0" }}>
        {laws.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              padding: "0",
              borderBottom: "1px solid var(--secondary-color-light)",
              "&:last-child": {
                border: "none",
              },
            }}
          >
            <ListItemButton
              sx={{
                padding: "6px 0",
                color: "var(--secondary-color-light)",
                "&:hover": {
                  filter: "grayscale(0.3)",
                },
              }}
            >
              {item}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SupportMenu;
