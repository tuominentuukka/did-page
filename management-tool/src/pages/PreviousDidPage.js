import "../App.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import anabella from "../resources/images/anabella.png";
import luc from "../resources/images/luc.png";

function Main() {
  return <Paper sx={{marginTop: "170px", marginLeft: "30%", marginRight: "30%",marginBottom: "70px", boxShadow: "none"}}>
  <Container sx={{minWidth: "98%"}}>
    <Box sx={{textAlign: "center"}}>
      <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight= "ligth">
        Previous DIDs
      </Typography>
    </Box>
    <Box sx={{textAlign: "center"}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" textAlign="left" marginTop={3}>
            What does DID mean? At a Digital Impact Day, students from different universities and a wide range of disciplines come together to work on a topic of a cooperation partner. After a short introduction, they work on the challenge in small groups with coaching and then pitch their results at the end of the workshop.
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" textAlign="left" >
        The idea of the Digital Impact Day is based on the concept “Skarpt Uppdrag” from the University of Midsweden. Find more information here.
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" textAlign="left" marginTop={3}>
            Former Cooperations
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" textAlign="left" >
        • May 4th, 2022: Cooperation with DIGG – Agency for Digital Government 
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" textAlign="left" >
        • November 23rd, 2022: Cooperation with ECO fellows from Tampere 
        </Typography>
    </Box>
    <Box sx={{textAlign: "left", marginTop: 5, flexGrow: 1}} marginTop={5}>
        <Grid container spacing={2}>
            <Grid item xs={2} >
                <Avatar alt="Anabella Weiz" src={anabella} sx={{ width: "auto", height: "auto", maxWidth: 150, maxHeight: 150 }}/>
            </Grid>
            <Grid item xs={4} >
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
                    Anabelle Weiz, 26, from Munich
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
                "It was a unique opportunity to learn how to work with a team of strangers and generate a great result in such a short period of time. I would definitely join again!"                </Typography>
            </Grid>
            <Grid item xs={2} >
                <Avatar alt="Luc Karlin" src={luc} sx={{ width: "auto", height: "auto", maxWidth: 150, maxHeight: 150 }}/>
            </Grid>
            <Grid item xs={4} >
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" >
                    Luc Karlin, 21, from Finland
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" >
                "Working together in an international teams was really fun. We had a great time together and achieved a valuable result in the end. I can highly recommend taking part in the DID."                </Typography>
            </Grid>
        </Grid>
    </Box>
    <Box sx={{textAlign: "center", marginTop: 10}}>
        <Button variant="contained"
        sx={{backgroundColor: "#F8535A", color: "#FFFFFF", fontFamily: "Open Sans", fontSize: 20, fontWeight: "semibold", paddingLeft:4, paddingRight:4}}
        href="Registration">
          REGISTER NOW
        </Button>
    </Box>
  </Container>
  </Paper>;
}

export default Main;
