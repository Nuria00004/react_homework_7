import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // делает копию массива или объекта и сохраняет его
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="registration-form">
      <h2>Регистрация пользователя</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">ФИО:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Номер телефона:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email адрес:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Отправить</button>
      </form>

      {submittedData && (
        <div className="preview-data">
          <h3>Предварительные данные:</h3>
          <p>
            <strong>ФИО:</strong> {submittedData.fullName}
          </p>
          <p>
            <strong>Номер телефона:</strong> {submittedData.phoneNumber}
          </p>
          <p>
            <strong>Email адрес:</strong> {submittedData.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default Form;
