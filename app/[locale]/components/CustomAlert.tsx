import { Alert, Snackbar } from "@mui/material";
import { cl } from "../constant/color";
import { CheckCircleOutline, ErrorOutline } from "@mui/icons-material";

const CustomAlert = ({
  open = false,
  message = "",
  type = "error",
  position = { vertical: "bottom", horizontal: "right" },
}: any) => {
  const colorObj: any = {
    error: cl.red,
    success: cl.primary,
  };

  const iconObj: any = {
    error: <ErrorOutline />,
    success: <CheckCircleOutline />,
  };
  return (
    <Snackbar anchorOrigin={position} open={open}>
      <Alert
        icon={iconObj[type] ?? <ErrorOutline />}
        variant="filled"
        sx={{
          width: "100%",
          minHeight: "4rem",
          fontSize: "1.1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          direction: "ltr",
          bgcolor: colorObj[type] ?? cl.red,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
