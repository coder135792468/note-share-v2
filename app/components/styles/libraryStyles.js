import { alpha } from "@mui/material/styles";

export const libraryContainer = {
  padding: "30px",
  width: {
    xs: "50%",
    sm: "auto",
  },
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
