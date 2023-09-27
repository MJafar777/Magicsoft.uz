import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

import CloseIcon from "@mui/icons-material/Close";
import React from "react";

const Error = () => {
  const [open, setOpen] = React.useState(true);

  setTimeout(() => {
    setOpen(false);
  }, 4000);

  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: "0px",
        left: "0",
        right: "0",
        zIndex: "501 !important",
      }}
    >
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
          sx={{ mb: 2 }}
        >
          Error, Try again!
        </Alert>
      </Collapse>
    </Box>
  );
};
export default Error;
