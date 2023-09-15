import * as React from "react";
import { Box, CircularProgress, Backdrop } from "@mui/material";

export default function Loader({ open }: any) {
  return (
    <Box>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
}
