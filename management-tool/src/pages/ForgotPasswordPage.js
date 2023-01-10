import "../App.css";
import ResetPassword from "../components/ResetPassword";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

function ResetPasswordPage() {
  return (
    <>
      <Typography color="initial" fontSize={48} textAlign="center" marginTop="170px" fontFamily="Open Sans" fontWeight= "ligth">
        Reset your password
      </Typography>
      <Grid>
        <ResetPassword />
      </Grid>
    </>
  );
}

export default ResetPasswordPage;
