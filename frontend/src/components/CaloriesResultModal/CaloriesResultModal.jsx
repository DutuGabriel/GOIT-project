import styles from "./CaloriesResultModal.module.css";

const CaloriesResultModal = ({ calories, notAllowedProducts, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <p className="modal-subtitle">
          Your recommended daily calorie intake is
        </p>
        <p className="modal-calories">
          {calories} <span className="unit">kcal</span>
        </p>

        <h4 className="modal-list-title">Foods you should not eat</h4>
        <ul className="modal-list">
          {notAllowedProducts.slice(0, 4).map((item, index) => (
            <li key={index}>
              {index + 1}. {item.title}
            </li>
          ))}
        </ul>

        <button className="modal-cta" onClick={onClose}>
          Start losing weight
        </button>
      </div>
    </div>
  );
};

export default CaloriesResultModal;
