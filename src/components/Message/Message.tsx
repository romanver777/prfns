import { Box } from "@mui/material";

type TProps = {
  text: string;
};

const Message = ({ text }: TProps) => {
  return (
    <Box sx={{ color: "var(--medium-color-dark)", textAlign: "center" }}>
      {text}
    </Box>
  );
};

export default Message;
