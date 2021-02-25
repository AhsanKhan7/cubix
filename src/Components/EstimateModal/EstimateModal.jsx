import React from "react";
import styles from "./EstimateModal.module.scss";
import closeSvg from "../../Assets/close.svg";
import Modal from "@material-ui/core/Modal";

const EstimateModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <>
          <button onClick={handleClose} className={styles.closeButton}>
            <img src={closeSvg} alt="close" />
          </button>
          <div className={styles.modal}>
            <h2>Let's start a project together</h2>
            <p>We make all your dreams come true in a successful project.</p>

            <input type="text" placeholder="Name" />
            <div>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <input type="text" placeholder="Message" />

            <button>Submit</button>
          </div>
        </>
      </Modal>
    </div>
  );
};

export default EstimateModal;
