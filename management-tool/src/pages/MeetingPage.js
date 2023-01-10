import "../App.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import join from "../resources/images/join.png";
import {useState,useEffect, useCallback} from "react";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import awsExports from "../aws-exports";
import { listRegistereds } from "../queries";
import { Auth } from "aws-amplify";
Amplify.configure(awsExports);

function Main() {
  var GroupNumber = "not yet assigned";
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
    }
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    filtration();
  }, [filtration]);

  if (user.length > 0) {
    if(user[0].group !== null){
    GroupNumber = user[0].group + 1 ? user[0].group + 1 : "not yet assigned";
    }
  }
  console.log(user);
  const showGroupNumber = () => {
    if (GroupNumber === "not yet assigned") {
      return <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold">
        You are not yet assigned to a group.
      </Typography>
    } else {
      return <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold">
        YOU ARE IN GROUP {GroupNumber}
      </Typography>
    }
  }

  const showQuestionnaire = () => {
    if (GroupNumber === "not yet assigned") {
      return <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold">
      </Typography>
    } else {
      return <Box>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" marginTop={2}>
      Please answer the following survey questions before the meeting starts.
    </Typography>
    <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
      <a style={{ color: "#000000" }}
      target="_blank"
      rel="noreferrer"
      href="https://docs.google.com/forms/d/e/1FAIpQLSf5qa105k56S_KcgHkzVrE5Uaj7sCeC20QFkhC83qCzFrCDlg/viewform">
      DID2 Preliminary Questionnaire
      </a>
    </Typography>
    </Box>
    }
  }
  
  return <Paper sx={{marginTop: "170px", marginLeft: "30%", marginRight: "30%", marginBottom: "70px", boxShadow: "none"}}>
    <Container sx={{minWidth: "98%"}}>
      <Box sx={{textAlign: "center"}}>
        <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight= "ligth">
          Join the meeting now!
        </Typography>
      </Box>
      <Box sx={{textAlign: "center", marginTop: 5, backgroundColor: "#FCD735", padding: 2}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          We are looking forward to seeing you:
        </Typography>
        { showGroupNumber()}
        { showQuestionnaire()}
      </Box>
      <Box
        component="img"
        sx={{ marginTop: 3, width: "40%", height: "auto", textAlign: "center", marginLeft: "30%", marginRight: "30%", }}
        alt="Join the meeting now!"
        src={join}
      />
      <Box sx={{textAlign: "left", marginTop: 3}}>
       <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold" marginBottom={2}>
          When does the DID start?
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" marginBottom={2}>
          The first meeting on the 26th starts at 08 am CET. Make sure that your internet connection is working fine. All you need is your computer and lot's of fun. 
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold" marginBottom={2}>
          In which group am I?
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
          The groups are formed through certain criteria like the university you study at as well as your study program. Besides that we will also ensure, that all groups are as diverse as possible.
        </Typography>
      </Box>
    </Container>
  </Paper>
}

export default Main;