import React, { useEffect, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Formik } from "formik";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import awsExports from "../aws-exports";
import { listRegistereds } from "../queries";
import { Auth } from "aws-amplify";
import { updateRegistered } from "../mutations";
import { useNavigate } from "react-router-dom";
Amplify.configure(awsExports);

function ProfilePage() {
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
  };
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [userArray, setUserArray] = useState([]);

  const filtration = useCallback(async () => {
    const { attributes } = await Auth.currentAuthenticatedUser();
    const filtered = userArray.filter((obj) => obj.email === attributes.email);
    setUser(filtered);
  }, [userArray]);

  const getData = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listRegistereds));
      setUserArray(userData.data.listRegistereds.items);
    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  async function signOut() {
    try {
      await Auth.signOut();
      navigate("/Profile");
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    filtration();
  }, [filtration]);

  const removeRegistration = async () => {
    user[0].participatingNow = false;
    delete user[0].createdAt;
    delete user[0].updatedAt;
    delete user[0]._deleted;
    delete user[0]._lastChangedAt;
    try {
      console.log(user);
      await API.graphql(
        graphqlOperation(updateRegistered, {
          input: user[0],
        })
      );
      alert("Your registration to DID is now cancelled");
    } catch (err) {
      console.log(err);
      alert("Updating info failed");
    }
  };

  const addRegistration = async () => {
    user[0].participatingNow = true;
    delete user[0].createdAt;
    delete user[0].updatedAt;
    delete user[0]._deleted;
    delete user[0]._lastChangedAt;
    try {
      await API.graphql(
        graphqlOperation(updateRegistered, {
          input: user[0],
        })
      );
      alert("You have successfully enrolled for the DID again");
    } catch (err) {
      console.log(err);
      alert("Updating info failed");
    }
  };

  return (
    <div>
      <Typography textAlign="center" fontSize={35} marginTop={25}>
        Your profile information
      </Typography>
      {Object.keys(user).length !== 0 && (
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
              <Grid
                container
                columns={2}
                justifyContent="center"
                size={100}
                marginTop={10}
              >
                <Box textAlign="right" padding={10}>
                  <Grid item paddingBottom={2}>
                    <TextField
                      label="First name"
                      id="firstName"
                      value={user[0].first_name}
                      onChange={handleChange}
                      type="text"
                    />
                  </Grid>
                  <Grid item paddingBottom={2}>
                    <TextField
                      label="Last Name"
                      id="lastName"
                      value={user[0].last_name}
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
                        value={user[0].gender}
                      >
                        <MenuItem value={1}>Male</MenuItem>
                        <MenuItem value={2}>Female</MenuItem>
                        <MenuItem value={3}>Other</MenuItem>
                        <MenuItem value={4}>Prefer not to say</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item paddingBottom={2}>
                    <TextField
                      label="Email"
                      id="email"
                      value={user[0].email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item paddingBottom={2}>
                    <TextField
                      label="Phone Number"
                      id="phoneNumber"
                      value={user[0].phone}
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
                        value={user[0].university}
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
                        value={user[0].subject}
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
                        <MenuItem value={9}>
                          Engineering and Management
                        </MenuItem>
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
                        value={user[0].participated_before}
                      >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {user[0].participatingNow && (
                    <Grid item marginTop={2}>
                      <Button
                        variant="contained"
                        size="large"
                        color="error"
                        type="submit"
                        disabled={isSubmitting}
                        onClick={() => removeRegistration()}
                      >
                        Remove registration
                      </Button>
                    </Grid>
                  )}
                  {!user[0].participatingNow && (
                    <Grid item marginTop={2}>
                      <Button
                        variant="contained"
                        size="large"
                        color="error"
                        type="submit"
                        disabled={isSubmitting}
                        onClick={() => addRegistration()}
                      >
                        Enroll again
                      </Button>
                    </Grid>
                  )}
                  <Grid item marginTop={4}>
                    <Button
                      variant="contained"
                      size="large"
                      color="error"
                      type="submit"
                      disabled={isSubmitting}
                      onClick={() => signOut()}
                    >
                      Log Out
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </form>
          )}
        </Formik>
      )}
    </div>
  );
}
export default ProfilePage;
