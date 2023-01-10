import "../App.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Main() {
  return <Paper sx={{marginTop: "170px",marginBottom: "70px", boxShadow: "none"}}>
  <Container sx={{minWidth: "98%"}}>
    <Box sx={{textAlign: "center"}}>
      <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight= "ligth">
        Contact
      </Typography>
    </Box>
    <Box sx={{textAlign: "left", display:"flex", flexDirection: "column", alignItems: "center", marginTop: 3,}}>
      <List>
        <ListItem disablePadding >
          <ListItemText primary="If you have any questions contact the BRIDGE team:" color="initial" fontSize={14} fontFamily="Open Sans" />
        </ListItem>
        <ListItem disablePadding >
          <ListItemText primary="• Karolina Rosdahl, Mid Sweden University karolina.rosdahl@miun.se" color="initial" fontSize={14} fontFamily="Open Sans" />
        </ListItem>
        <ListItem disablePadding >
          <ListItemText primary="• Lars Brehm, Munich University of Applied Scienceslars.brehm@hm.edu" color="initial" fontSize={14} fontFamily="Open Sans" />
        </ListItem>
        <ListItem disablePadding >
          <ListItemText primary="• Jere Siivonen, Tampere University of Applied Sciencesjere.siivonen@tuni.fi" color="initial" fontSize={14} fontFamily="Open Sans" />
        </ListItem>
      </List>
    </Box>
  </Container>
  </Paper>;
}

export default Main;
