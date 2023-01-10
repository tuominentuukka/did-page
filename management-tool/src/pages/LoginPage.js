import "../App.css";
import LoginForm from "../components/LoginForm";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Auth } from "aws-amplify";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";

function LoginPage() {
  const navigate = useNavigate();

  const loader = async () => {
    const asdf = await Auth.currentAuthenticatedUser();
    if (Object.keys(asdf).length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const checker = useCallback(async () => {
    const loaderCheck = await loader();
    if (loaderCheck) {
      navigate("/UserInfo");
    }
  }, [navigate]);

  useEffect(() => {
    checker();
  }, [navigate, checker]);

  return (
    <>
      <Typography
        color="initial"
        fontSize={48}
        textAlign="center"
        marginTop="170px"
        fontFamily="Open Sans"
        fontWeight="ligth"
      >
        Welcome to UCON
      </Typography>
      <Grid>
        <LoginForm />
      </Grid>
    </>
  );
}

export default LoginPage;
