import "../App.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

function Main() {

  return <Paper sx={{marginTop: "170px", marginLeft: "30%", marginRight: "30%", marginBottom: "70px", boxShadow: "none"}}>
    <Container sx={{minWidth: "98%"}}>
      <Box sx={{textAlign: "center"}}>
        <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight= "ligth">
          The BRIDGE Project
        </Typography>
        <Typography color="initial" fontSize={20} fontFamily="Open Sans" fontWeight= "ligth">
          Brilliant Innovation through Digital Engagement
        </Typography>
      </Box>
      <Box sx={{textAlign: "center", marginTop: 5, backgroundColor: "#FCD735", padding: 2}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold">
          Do you want to have fun and meet international students while building a brighter future?
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold" >
          Join our next Digital Impact Day (DID) on April 26th!
        </Typography>
      </Box>
      <Box sx={{textAlign: "left", marginTop: 3}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
          Innovation ability and entrepreneurial skills are in demand in the labor market. It’s all about being able to see opportunities, develop concepts and take ideas to implementation. By participating in our Digital Impact Day you as a student build valuable experience and merits for the future. You will train your mindset, thus creating impactful solutions for the future.
        </Typography>
      </Box>
      <Box sx={{textAlign: "left", marginTop: 3}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold" marginBottom={2}>
          Good to know:
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        • Participants are placed in virtual <strong>mixed teams</strong> with students from Sweden, Finland and Germany
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        • The necessary items for that day is a computer with camera access and a working internet connection
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        • All participants receive a <strong>DID certificate</strong> at the end of the event
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        • Participants become part of the <strong>international innovation community BRIDGE</strong>
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        • The <strong>application period</strong> runs until midnight on <strong>April 19th</strong>
        </Typography>
      </Box>
      <Box sx={{textAlign: "center", marginTop: 3}}>
        <Button variant="contained"
        sx={{backgroundColor: "#F8535A", color: "#FFFFFF", fontFamily: "Open Sans", fontSize: 20, fontWeight: "semibold", paddingLeft:4, paddingRight:4}}
        href="Registration">
          REGISTER NOW
        </Button>
      </Box>
    </Container>
    </Paper>
}

export default Main;
