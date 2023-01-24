import { Modal } from "@mui/material";
import LottieView from "lottie-react";

// LOCAL IMPORT
import successAnimation from "../../assets/animation/check-mark-success-animation.json";
import failureAnimation from "../../assets/animation/failure-animation.json";

const SuccessModal = ({ status, showModal, setShowModal }) => {
  const styles = {
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      maWidth: 400,
      backgroundColor: "white",
      border: "2px solid var(--primaryBorder)",
      padding: 16,
      textAlign: "center",
      fontWeight: 500
    }
  };

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div style={styles.modal}>
        {status ? (
          <>
            <LottieView
              loop={false}
              animationData={successAnimation}
              size={250}
            />
            <p style={{ color: "var(primaryText)" }}>Email Sent!</p>
          </>
        ) : (
          <>
            <LottieView loop={false} animationData={failureAnimation} />
            <p style={{ color: "var(primaryText)" }}>Email Not Sent!</p>
          </>
        )}
      </div>
    </Modal>
  );
};

export default SuccessModal;
