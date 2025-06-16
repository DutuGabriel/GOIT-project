import { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
