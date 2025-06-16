import React, { useState } from "react";
import axios from "axios";

import CaloriesResultModal from "../components/CaloriesResultModal/CaloriesResultModal.jsx";
import DailyCaloriesForm from "../components/CalculatorForm/DailyCaloriesForm.jsx";
import Modal from "../components/Modal/Modal.jsx";

const CalculatorPage = () => {
  const [calories, setCalories] = useState(null);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (formData) => {
    try {
      const response = await axios.post("/api/daily-rate/public", formData);

      setCalories(response.data.recommendedCalories);
      setProducts(response.data.notAllowedProducts);
      setShowModal(true);
    } catch (err) {
      console.error("Calculation failed", err);
    }
  };

  return (
    <>
      <DailyCaloriesForm onSubmit={handleSubmit} />

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CaloriesResultModal
            calories={calories}
            notAllowedProducts={products}
            onClose={() => setShowModal(false)}
          />
        </Modal>
      )}
    </>
  );
};

export default CalculatorPage;
