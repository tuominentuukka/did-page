import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Auth } from "aws-amplify";
import { useState } from "react";
Amplify.configure(awsExports);


function ResetPasswordForm() {
    const [CodeSent, SetCodeSent] = useState(false);

  let initialValues = {
    new_password: "",
    email: "",
  };

  const SendConfirmationCode = async (data) => {
    try {
      await Auth.forgotPassword(data.email)
      SetCodeSent(true);
    } catch (error) {
      console.log("error Sending code", error);
    }
  };

  const SetNewPassword = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.email, data.code, data.new_password)
    } catch (error) {
      console.log("error resetting password", error);
    }
  };

  if(!CodeSent){
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        values = {};
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container columns={1} justifyContent="center">
            <Box textAlign="center" padding={10}>
              <Grid item paddingBottom={2}>
                <TextField label="Email" id="email" onChange={handleChange} />
              </Grid>
              <Grid item marginTop={5}>
                <Button
                  disabled={isSubmitting}
                  sx={{
                    backgroundColor: "#F8535A",
                    color: "#FFFFFF",
                    fontFamily: "Open Sans",
                    fontSize: 20,
                    fontWeight: "semibold",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                  onClick={() => SendConfirmationCode(values)}
                >
                  Send confirmation code
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Form>
      )}
    </Formik>
  );}   else {
    return (
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
            values = {};
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <Form onSubmit={handleSubmit}>
              <Grid container columns={1} justifyContent="center">
                <Box textAlign="center" padding={10}>
                  <Grid item paddingBottom={2}>
                    <TextField label="Email" id="email" onChange={handleChange} />
                  </Grid>
                  <Grid item paddingBottom={2}>
                    <TextField label="Code" id="code" onChange={handleChange} />
                  </Grid>
                <Grid item paddingBottom={2}>
                <TextField
                  label="New password"
                  id="new_password"
                  type="password"
                  onChange={handleChange}
                />
              </Grid>
                  <Grid item marginTop={5}>
                    <Button
                      disabled={isSubmitting}
                      sx={{
                        backgroundColor: "#F8535A",
                        color: "#FFFFFF",
                        fontFamily: "Open Sans",
                        fontSize: 20,
                        fontWeight: "semibold",
                        paddingLeft: 10,
                        paddingRight: 10,
                      }}
                      onClick={() => SetNewPassword(values)}
                      href="/Profile"
                    >
                      Reset password
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </Form>
          )}
        </Formik>
      );
  }
}
export default ResetPasswordForm;