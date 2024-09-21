import { Box, Button, Stack } from "@mui/material";

type TProps = {
  title: string;
  actionTitle: string;
  actionIcon?: React.ReactNode;
};

const Title = ({ title, actionTitle, actionIcon }: TProps) => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
      <Box
        component={"h3"}
        sx={{
          fontSize: "28px",
          fontWeight: "400",
          color: "var(--primary-color-dark)",
          margin: "0",
        }}
      >
        {title}
      </Box>
      {actionTitle && (
        <Button
          startIcon={actionIcon}
          sx={{
            textTransform: "unset",
            borderRadius: "20px",
            background: "var(--extra-color-dark)",
            color: "var(--color-white)",
            transition: "0.3s",
            padding: "8px 15px",
            "&:hover": {
              opacity: "0.8",
              transition: "0.3s",
            },
          }}
        >
          {actionTitle}
        </Button>
      )}
    </Stack>
  );
};

export default Title;
