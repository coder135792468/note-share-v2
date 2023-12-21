import { alpha } from "@mui/material/styles";

export const uploadButtonContainer = {
  padding: "30px",
  width: {
    xs: "50%",
    sm: "auto",
  },
  backgroundColor: "#D0F2FF",
  display: {
    xs: "flex",
    sm: "inline-block",
  },
  justifyContent: "center",
  alignItems: "center",
  marginLeft: {
    xs: "10%",
    sm: "20px",
  },
  margin: "20px",
  borderRadius: "5px",
  border: "1px solid #999",
  boxShadow: `0 0 12px 0 ${alpha("#919EAB", 0.2)}, 0 12px 24px -4px ${alpha(
    "#919EAB",
    0.12
  )}`,
};

export const stepperContainer = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const cloudIcon = { color: "secondary.main", textAlign: "center" };
