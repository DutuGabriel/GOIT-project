import React, { useState } from "react";
import styles from "./DailyCaloriesForm.module.css";

const DailyCaloriesForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    height: "",
    age: "",
    currentWeight: "",
    desiredWeight: "",
    bloodType: "1",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>
        Calculate your daily calorie intake right now
      </h2>

      <div className={styles.grid}>
        <input
          className={styles.input}
          type="number"
          name="height"
          placeholder="Height *"
          value={formData.height}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="desiredWeight"
          placeholder="Desired weight *"
          value={formData.desiredWeight}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="age"
          placeholder="Age *"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          className={styles.input}
          type="number"
          name="currentWeight"
          placeholder="Current weight *"
          value={formData.currentWeight}
          onChange={handleChange}
          required
        />
      </div>

      <div className={styles.radioGroup}>
        <p>Blood type *</p>
        <div className={styles.radioOptions}>
          {[1, 2, 3, 4].map((type) => (
            <label key={type}>
              <input
                type="radio"
                name="bloodType"
                value={type}
                checked={formData.bloodType === type.toString()}
                onChange={handleChange}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className={styles.submit}>
        Start losing weight
      </button>
    </form>
  );
};

export default DailyCaloriesForm;
