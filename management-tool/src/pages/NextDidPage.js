import "../App.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Main() {

  return <Paper sx={{marginTop: "170px", marginLeft: "15%", marginRight: "15%", marginBottom: "70px", boxShadow: "none"}}>
  <Container sx={{minWidth: "98%"}}>
    <Box sx={{textAlign: "center"}}>
      <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight="ligth">
        Next Digital Impact Day
      </Typography>
    </Box>
    <Box sx={{marginLeft: "20%", marginRight: "20%", textAlign: "center", marginTop: 5, backgroundColor: "#FCD735", padding: 2}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold">
        In each Digital Impact Day the client and the assignment is a secret and will be presented on the morning of the specific DID. But we can already reveal that the client has a “transformation challenge” and a mission to make a difference for the future.
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" marginTop={2}>
        Join our next virtual DID on April 26th!
        </Typography>
    </Box>
    <Box sx={{textAlign: "center", marginTop: 5, flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid item xs={1} textAlign="left" >
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    08:20
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    08:30
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    08:50
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    09:00
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    09:25
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    09:45
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    10:15
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    11.30
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    11:40
                </Typography>
            </Grid>
            <Grid item xs={5} textAlign="left">
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Drop in Participants
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Introduction
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Team “Meet and Great”
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Challenge presentation
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    NABC presentation
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Idea generating
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Coaching rounds in working groups
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Recap in large group
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    LUNCH 
                </Typography>
            </Grid>
            <Grid item xs={1} textAlign="left" >
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    12:20
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    12:30
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    14:15
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    14:20
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    14:50
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    15:00
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    16:00
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight="bold" sx={{marginTop: 2}}>
                    16:25
                </Typography>
            </Grid>
            <Grid item xs={5} textAlign="left">
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Continue to work in groups and opportunities to ask
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    “Pitchround 1”
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    “Pitchround 2”
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    FIKA (your choice)
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Recap in large group
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Final pitch
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    Summary and award ceremony
                </Typography>
                <Typography color="initial" fontSize={14} fontFamily="Open Sans" sx={{marginTop: 2}} >
                    End of the day
                </Typography>
            </Grid>
        </Grid>
    </Box>
  </Container>
  </Paper>;
}

export default Main;
