import React from "react";
import { Box, Paper, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper
        elevation={3}
        sx={{
          width: "800px",
          margin: "0 auto",
          padding: (theme) => theme.spacing(3, 2),
        }}
      >
        <Typography variant="h5">Welcome to the Fancy Store!</Typography>
        <br />
        <Typography variant="body1">
          Take a look at our wide variety of products.
        </Typography>
      </Paper>
    </Box>
  );
}
