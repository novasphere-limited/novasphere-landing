import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function ModalComponent({ children, modal, setModal }) {
  const margin = {
    xs: "20px",
    sm: "40px",
    md: "60px",
    lg: "80px",
    xl: "100px",
  };

  return (
    <Modal
      open={modal}
      onClose={() => setModal(!modal)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "relative", // Ensure relative positioning for the close button
            maxWidth: 891,
            bgcolor: "background.paper",
            borderRadius: "12px",
            boxShadow: 24,
            p: 1,
            textAlign: "center",
            width: "100%",
            maxHeight: "100vh",
            overflow: "auto",
            margin: margin, // Apply responsive margin
          }}
        >
          <IconButton
            aria-label="close"
            onClick={() => setModal(!modal)}
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
              zIndex: 1,
              backgroundColor: "#fff",
              border: "1px solid #292D32",
              borderRadius: "50%",
              padding: "1px 2px",
            }}
          >
            <CloseIcon />
          </IconButton>
          {children}
        </Box>
      </Box>
    </Modal>
  );
}
