import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Formik, Form } from "formik";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import awsExports from "../aws-exports";
import { createRegistered } from "../mutations";
import { Auth } from "aws-amplify";
import { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
Amplify.configure(awsExports);

function RegistrationForm() {
  const [Registered, SetRegistered] = useState(false);
  let initialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    email: "",
    phoneNumber: "",
    homeUniversity: "",
    mainSubject: "",
    participation: "",
    participatingNow: "",
  };

  const file = "./registration_email.txt";

  const readTextFile = async () => {
    const getFileText = await fetch(file).then((res) => res.text());
    return getFileText.replace(/\n/g, "<br/>");
  };

  const sendEmailToAws = (message, email) => {
    fetch(
      "	https://grgkukhak5.execute-api.eu-central-1.amazonaws.com/sendEmail",
      {
        mode: "no-cors",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderName: "samu.hujanen@tuni.fi",
          receiverEmail: `${email}`,
          subject: "You successfully registered for the DID!",
          message: `${message}`,
        }),
      }
    );
  };

  const sendEmail = async (email) => {
    await readTextFile().then((message) => sendEmailToAws(message, email));
  };

  const updateRegistered = async (data) => {
    const user = {
      first_name: data.firstName.toString(),
      last_name: data.lastName.toString(),
      gender: data.gender,
      email: data.email,
      phone: data.phoneNumber,
      university: data.homeUniversity,
      subject: data.mainSubject,
      participated_before: data.participation,
      participatingNow: true,
    };
    try {
      
      await API.graphql(graphqlOperation(createRegistered, { input: user }));
      sendEmail(user.email);
    } catch (err) {
      console.log("Registration failed:", err);
      alert("Registration failed");
    }
  };

  const signUp = async (data) => {
    try {
      const { testUser } = await Auth.signUp({
        username: data.email,
        password: data.password,
      });
      updateRegistered(data);
      SetRegistered(true);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  const Verify = async (data) => {
    try {
      await Auth.confirmSignUp(data.email, data.code);
    } catch (error) {
      console.log("error verifying account", error);
    }
  };

  if (!Registered) {
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
            <Grid container columns={2} justifyContent="center" size={100}>
              <Box textAlign="right" padding={10}>
                <Grid item paddingBottom={2}>
                  <TextField
                    label="First Name"
                    id="firstName"
                    onChange={handleChange}
                    type="text"
                  />
                </Grid>
                <Grid item paddingBottom={2}>
                  <TextField
                    label="Last Name"
                    id="lastName"
                    onChange={handleChange}
                    type="text"
                  />
                </Grid>
                <Grid item paddingBottom={2}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="gender"
                      label="Gender"
                      onChange={handleChange}
                      name="gender"
                      value={values.gender}
                    >
                      <MenuItem value={1}>Male</MenuItem>
                      <MenuItem value={2}>Female</MenuItem>
                      <MenuItem value={3}>Other</MenuItem>
                      <MenuItem value={4}>Prefer not to say</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item paddingBottom={2}>
                  <TextField label="Email" id="email" onChange={handleChange} />
                </Grid>
                <Grid item paddingBottom={2}>
                  <Tooltip title="Password must have 8 characters, 1 uppercase letter, 1 number and 1 special symbol">
                    <TextField
                      label="Password"
                      id="password"
                      type="password"
                      onChange={handleChange}
                    />
                  </Tooltip>
                </Grid>
                <Grid item paddingBottom={2}>
                  <TextField
                    label="Phone Number"
                    id="phoneNumber"
                    onChange={handleChange}
                  />
                </Grid>
              </Box>

              <Box textAlign="left" padding={10}>
                <Grid item paddingBottom={2}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Home university
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="homeUniversity"
                      label="Home university"
                      name="homeUniversity"
                      value={values.homeUniversity}
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>
                        Munich University of Applied Sciences
                      </MenuItem>
                      <MenuItem value={2}>
                        Tampere University of Applied Sciences
                      </MenuItem>
                      <MenuItem value={3}>Mittuniversitetet</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item paddingBottom={2}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Main subject/study area
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="mainSubject"
                      name="mainSubject"
                      label="Main subject/study area"
                      autowidth
                      onChange={handleChange}
                      value={values.mainSubject}
                    >
                      <MenuItem value={1}>Architecture</MenuItem>
                      <MenuItem value={2}>Civil Engineering</MenuItem>
                      <MenuItem value={3}>
                        Mechanical, Automotive and Aeronautical Engineering
                      </MenuItem>
                      <MenuItem value={4}>
                        Electrical Engineering and Information Technology
                      </MenuItem>
                      <MenuItem value={5}>
                        Technical Systems, Processes and Communication
                      </MenuItem>
                      <MenuItem value={6}>
                        Applied Sciences and Mechatronics
                      </MenuItem>
                      <MenuItem value={7}>
                        Computer Science and Mathematics
                      </MenuItem>
                      <MenuItem value={8}>Geoinformatics</MenuItem>
                      <MenuItem value={9}>Engineering and Management</MenuItem>
                      <MenuItem value={10}>Business Administration</MenuItem>
                      <MenuItem value={11}>Applied Social Sciences</MenuItem>
                      <MenuItem value={12}>Design</MenuItem>
                      <MenuItem value={13}>
                        General and Interdisciplinary Studies
                      </MenuItem>
                      <MenuItem value={14}>Tourism</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item paddingBottom={2}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Have you participated in a DID before?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="participation"
                      name="participation"
                      label="Have you participated in a DID before?"
                      autowidth
                      onChange={handleChange}
                      value={values.participation}
                    >
                      <MenuItem value={true}>Yes</MenuItem>
                      <MenuItem value={false}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item marginTop={5}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={"Accept terms and conditions"}
                  />
                </Grid>
                <Grid item marginTop={9}>
                  <Button
                    variant="contained"
                    size="large"
                    color="error"
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() => signUp(values)}
                  >
                    Apply now!
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </form>
        )}
      </Formik>
    );
  } else {
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
                <Tooltip title="Code was sent to your email">
                  <Grid item paddingBottom={2}>
                    <TextField label="Code" id="code" onChange={handleChange} />
                  </Grid>
                </Tooltip>
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
                    onClick={() => Verify(values)}
                    href="/Profile"
                  >
                    Verify account
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
export default RegistrationForm;
