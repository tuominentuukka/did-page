import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Formik } from "formik";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
Amplify.configure(awsExports);

//vaihda forgot your password linkki oikeaan aws-linkkiin
function LoginForm() {
  let initialValues = {
    password: "",
    email: "",
  };

  const navigate = useNavigate();

  const signIn = async (data) => {
    try {
      await Auth.signIn(data.email, data.password);
      navigate("/UserInfo");
    } catch (error) {
      console.log("error signing in", error);
      alert("Wrong email or password");
    }
  };

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
        <form onSubmit={handleSubmit}>
          <Grid container columns={1} justifyContent="center">
            <Box textAlign="right" padding={10}>
              <Grid item paddingBottom={2}>
                <TextField label="Email" id="email" onChange={handleChange} />
              </Grid>
              <Grid item paddingBottom={2}>
                <TextField
                  label="Password"
                  id="password"
                  type="password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item paddingTop={0}>
                <Typography textAlign="left">
                  <a
                    style={{ textDecoration: "none", color: "#000000" }}
                    href="/resetpassword"
                  >
                    Forgot your password?
                  </a>
                </Typography>
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
                  onClick={() => signIn(values)}
                >
                  LOGIN
                </Button>
              </Grid>
              <Grid item paddingTop={2}>
                <Typography textAlign="left">
                  <a
                    style={{ textDecoration: "none", color: "#000000" }}
                    href="/registration"
                  >
                    Register NOW!
                  </a>
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </form>
      )}
    </Formik>
  );
}
export default LoginForm;
