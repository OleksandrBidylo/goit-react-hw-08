import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";

const ContactForm = () => {
  const initialValues = {
    name: "",
    number: "",
  };
  const dispatch = useDispatch();
  const onSubmit = (values, options) => {
    dispatch(addContactThunk(values));
    options.resetForm();
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("required!"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className={s.form}>
          <span>
            Name
            <Field className={s.field} name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.ErrorMessage}
            />
          </span>
          <span>
            Number
            <Field className={s.field} name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={s.ErrorMessage}
            />
          </span>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
