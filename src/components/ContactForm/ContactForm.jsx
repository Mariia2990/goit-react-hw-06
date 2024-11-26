import css from './ContactForm.module.css';
// import { useState } from "react";
import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { nanoid } from 'nanoid';

export default function ContactForm({ onAddContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
  .matches(
    /^(\d{2,4}-?)+\d{2,4}$/,
    'Number must be between 6 and 15 digits and can include hyphens, e.g., 123-456-7890'
  )
  .required('Number is required'),
});

const handleSubmit = (values, { resetForm }) => {
  const newContact = { id: nanoid(), ...values }; 
  onAddContact(newContact);
  resetForm();
};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.formContact}>
          <label htmlFor="name" className={css.labelContact}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
            required
          />
          <ErrorMessage name="name" component="div" className={css.errorMessage} />

          <label htmlFor={numberFieldId} className={css.labelContact}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={numberFieldId}
            required
          />
          <ErrorMessage name="number" component="div" className={css.errorMessage} />

          <button className={css.buttonAdd} type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
}