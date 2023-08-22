"use client";

import React, { useState } from "react";
import { TextField } from "../TextField/TextField";
import FileInput from "../FileInput/FileInput";
import CustomCheckbox from "../Checkbox/Checkbox";
import Link from "next/link";
import styles from "./Form.module.scss";
import { FormDataType } from "@/types/types";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    phoneNumber: "",
    idea: "",
    files: null,
    agree: false,
  });

  const supportedFileFormats = [
    ".pdf",
    ".doc",
    ".docx",
    ".odt",
    ".ods",
    ".xls",
    ".xlsx",
    ".txt",
  ];

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    setFormData({ ...formData, files: files });
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!formData.name || !formData.phoneNumber || !formData.agree) {
      alert(
        "Пожалуйста, заполните обязательные поля и согласитесь с условиями."
      );
      return;
    }

    console.log(formData);
    alert("Заявка успешно отправлена.");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__clientInfo}>
        <TextField
          className={styles.form__input}
          placeholder="Ваше имя *"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          data-aos="fade-up"
          data-aos-once="true"
        />
        <TextField
          className={styles.form__input}
          placeholder="Номер телефона *"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
          data-aos="fade-up"
          data-aos-once="true"
        />
      </div>
      <div className={styles.form__bottom}>
        <TextField
          className={styles.form__input}
          placeholder="Расскажите немного о вашей идее"
          type="text"
          id="idea"
          name="idea"
          value={formData.idea}
          onChange={handleInputChange}
          data-aos="fade-up"
          data-aos-once="true"
        />

        <FileInput
          id="custom-input-file"
          name="files"
          accept={supportedFileFormats.join(",")}
          multiple
          onChange={handleFileChange}
        />

        <CustomCheckbox
          id="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleCheckboxChange}
          required
          label={
            <>
              Я принимаю&nbsp;
              <Link className={styles.form__agreeLink} href="#">
                Политику конфиденциальности
              </Link>
            </>
          }
        />
        <button
          className={styles.form__button}
          type="submit"
          data-aos="fade-up"
          data-aos-once="true"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default Form;
