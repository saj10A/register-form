import { Form, Formik } from "formik";
import React from "react";
import { initialValues, onSubmit, validationSchema } from "./core";
import FormikControl from "./formikComponents/FormikControl";
import SpinnerLoad from "./SpinnerLoad";

const RegisterForm = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center w-100 p-0">
      <div className="row w-100 justify-content-center align-items-center py-4">
        <div className="form_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3">
          <Formik
            initialValues={initialValues}
            onSubmit={(values, actions) => onSubmit(values, actions)}
            validationSchema={validationSchema}
          >
            {(formik) => {
              return (
                <Form>
                  <h3 className="text-center text-primary">فرم ثبت نام</h3>

                  <FormikControl
                    control="input"
                    type="text"
                    name="name"
                    label="نام"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="user_name"
                    label="نام کاربری"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="email"
                    label="ایمیل"
                  />
                  <FormikControl
                    control="input"
                    type="text"
                    name="phone"
                    label="شماره موبایل"
                  />
                  <FormikControl
                    control="date"
                    formik={formik}
                    name="birth_date"
                    label="تاریخ تولد"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    name="password"
                    label="رمز عبور"
                  />
                  <FormikControl
                    control="input"
                    type="password"
                    name="c_password"
                    label="تایید رمز عبور"
                  />

                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={
                        !(formik.dirty && formik.isValid) || formik.isSubmitting
                      }
                    >
                      {formik.isSubmitting ? (
                        <SpinnerLoad isSmall={true} inline={true} />
                      ) : (
                        "ثبت نام"
                      )}
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
