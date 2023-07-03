"use client";
import { useModalStore } from "@/zustand-store/Modal.store";
import { Box, Fade, useTheme } from "@mui/material";
import { Modal as MuiModal } from "@mui/material";

export const Modal = () => {
  const { modalShow, setModalShow, setModalContent, modalContent } =
    useModalStore();
  const handleModalClose = () => {
    setModalShow(false);
    setModalContent(null);
  };
  const theme = useTheme();
  return (
    <MuiModal open={modalShow} onClose={handleModalClose} closeAfterTransition>
      <Fade in={modalShow}>
        <Box
          sx={{
            position: "absolute" as const,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              bgcolor: "white",
              padding: "20px 20px",
              borderRadius: "10px",
              minWidth: "370px",
              [theme.breakpoints.up("sm")]: {
                padding: "25px 20px ",
                minWidth: "450px",
              },
              [theme.breakpoints.up("md")]: {
                padding: "30px 25px ",
                minWidth: "500px",
              },
              [theme.breakpoints.up("lg")]: {
                padding: "35px 30px ",
                minWidth: "550px",
              },
            }}
          >
            {modalContent}
          </Box>
        </Box>
      </Fade>
    </MuiModal>
  );
};
