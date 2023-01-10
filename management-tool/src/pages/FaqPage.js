import "../App.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import IconButton from "@mui/material/IconButton";
import Stack from '@mui/material/Stack';
import {useState} from 'react';

function Main() {
  const [isShownBefore, setIsShownBefore] = useState(false);
  const [isShownDuring, setIsShownDuring] = useState(false);
  const [isShownPrivacy, setIsShownPrivacy] = useState(false);
  const [isShownContact, setIsShownContact] = useState(false);

  const handleBefore = event => {
    setIsShownBefore(current => !current);
  };
  const handleDuring = event => {
    setIsShownDuring(current => !current);
  };
  const handlePrivacy = event => {
    setIsShownPrivacy(current => !current);
  };

  const handleContact = event => {
    setIsShownContact(current => !current);
  };

  function icon(isShownBefore, isShownDuring, isShownPrivacy) {
    if (isShownBefore) {
      return <ArrowDropDownIcon />
    } else if (isShownDuring) {
      return <ArrowDropDownIcon />
    } else if (isShownPrivacy) {
      return <ArrowDropDownIcon />
    } else {
      return <ArrowRightIcon />
    }
  }
  return <Paper sx={{marginTop: "170px", marginLeft: "10%", marginRight: "10%", marginBottom: "70px", boxShadow: "none"}}>
  <Container sx={{minWidth: "98%"}}>
    <Box sx={{textAlign: "center"}}>
      <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight="ligth">
        FAQ
      </Typography>
    </Box>
    <Box sx={{textAlign: "left", marginTop: 3, flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={2} >
          <Stack direction="row" alignItems="center" gap={1}>
            <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            BEFORE THE EVENT
            </Typography>
            <IconButton onClick={handleBefore}>
              {icon(isShownBefore)}
            </IconButton>
          </Stack>
        </Grid>
        { isShownBefore && <Grid item xs={10} >
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Why should I take part in the event?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Answer: The opportunity for new collaboration and innovation is created by bringing together students from different backgrounds and educational programs. Students who, together with other students, have trained to take advantage of several perspectives and jointly deliver an innovative solution gain knowledge and confidence in interdisciplinary problem solving that will serve them well in their coming professional life.
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: How do I get started? How can I access the application?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Answer: The application is a website and can be opened via a browser or scanning a QR code. After arriving at the website, you can directly register for the event by filling out the required information.          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Can I register if I have registered before?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Answer: If you have registered before, feel free to register again. We at Digital Impact Day are looking forward to your registration :).          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: How can I cancel my registration?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Answer: Please use the cancel functionality which can be found after logging in to the website. By using this functionality the organisers will know that you are not joining.
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Where do I find all the necessary information?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Answer: All necessary information about the event can be found on the website. Also, after registering you will get sent an e-mail with further information.          </Typography>
        </Grid>}
      </Grid>
    </Box>
    <Box sx={{textAlign: "left", marginTop: 3, flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
          DURING AND AFTER THE EVENT
          </Typography>
          <IconButton sx={{verticAllign: "middle"}} onClick={handleDuring}>
              {icon(isShownDuring)}
            </IconButton>
          </Stack>
        </Grid>
        { isShownDuring && <Grid item xs={10}>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: In which languages is the event available?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: The event will take place in English as it is a collaboration between European institutions. 
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Can I get grouped up with friends?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: We have experienced that diverse students groups with different study programmes are most creative. Therefore, we aim to mix the groups.
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: How do I receive the certification?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: The certificate will automatically be sent to you via e-mail after you have taken part in the event. Please note that the we encourage you to also take part in our evaluation survey.
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Is there an app to download?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: No, registration can be fully done via our website. Moreover, the DID day itself will take place via Zoom.
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: What technical equipment is needed to participate?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: You need a computer with a camera and a microphone. You can participate from anywhere as long you have internet access.
          </Typography>
        </Grid>}
      </Grid>
    </Box>
    <Box sx={{textAlign: "left", marginTop: 3, flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
              DATA
          </Typography>
          <IconButton sx={{verticAllign: "middle"}} onClick={handlePrivacy}>
              {icon(isShownPrivacy)}
            </IconButton>
          </Stack>
        </Grid>
        {isShownPrivacy && <Grid item xs={10}>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: How can I delete my data/profile?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: If you would like to have your data deleted please contact the organizer Karolina Rosdahl  via e-mail (Karolina.Rosdahl@miun.se).
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Where is the data stored? 
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: As the event is taking place between Germany, Finland and Sweden, your data will be stored within these countries. Anonymous data will be used for research purposes.
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Why is the required information necessary?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: The requested information will be used for forming groups during the event and for certification.
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Does the GDPR apply?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: As the event is taking place within the European Union, GDPR guidelines apply as usually.
          </Typography>
        </Grid>}
      </Grid>
    </Box>
    <Box sx={{textAlign: "left", marginTop: 3, flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            CONTACT INFORMATION
          </Typography>
          <IconButton sx={{verticAllign: "middle"}} onClick={handleContact}>
              {icon(isShownContact)}
            </IconButton>
          </Stack>
        </Grid>
        {isShownContact && <Grid item xs={10}>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
            Q: Whom can I contact before and during the event?
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
            Answer: If you have any questions regarding the event please contact the organizers via e-mail:
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Karolina Rosdahl, Mid Sweden University karolina.rosdahl@miun.se
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Lars Brehm, Munich University of Applied Science lars.brehm@hm.edu
          </Typography>
          <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
          Jere Siivonen, Tampere University of Applied Science jere.siivonen@tuni.fi
          </Typography>
        </Grid>}
      </Grid>
    </Box>
  </Container>
  </Paper>;
}

export default Main;
