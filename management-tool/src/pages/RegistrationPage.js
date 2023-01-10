import "../App.css";
import RegistrationForm from "../components/RegistrationForm";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function RegistrationPage() {
  return (
    <>
      <Typography textAlign="center" fontSize={35} marginTop={25}>
        Register Now!
      </Typography>
      <Grid>
        <RegistrationForm />
      </Grid>
    </>
  );
}

export default RegistrationPage;
