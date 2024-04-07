import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 891,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 2,
  textAlign: "center",
};

export default function ModalComponent({ children, modal, setModal }) {
  return (
    <div>
      <Modal
        open={modal}
        onClose={() => setModal(!modal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
      </Modal>
    </div>
  );
}
