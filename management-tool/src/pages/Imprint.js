import "../App.css";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Main() {

  return <Paper sx={{marginTop: "170px", marginLeft: "30%", marginRight: "30%", marginBottom: "70px", boxShadow: "none"}}>
    <Container sx={{minWidth: "98%"}}>
      <Box sx={{textAlign: "center"}}>
        <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight= "ligth">
          Imprint
        </Typography>
      </Box>
      <Box sx={{textAlign: "left", marginTop: 3}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold" >
          Responsibility for the content of the website:
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Prof. Dr. Lars Brehm
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Department of Business Administration
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        HM Hochschule München University of Applied Sciences
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Am Stadtpark 20
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        D-81243 Munich
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Phone: 089/1265-0
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" marginTop={1}>
        E-Mail: lars.brehm@hm.edu
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Website: http://www.bwl.hm.edu
        </Typography>
      </Box>
      <Box sx={{textAlign: "left", marginTop: 3}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold" >
        HM Hochschule München University of Applied Sciences:
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Lothstraße 34
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        D-80335 Munich
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Phone: 089/1265-0
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        E-Mail: presse@hm.edu
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Website: http://www.hm.edu
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" marginTop={1}>
        The HM Hochschule München University of Applied Sciences is a public institution that is legally represented by its President Prof. Dr. Martin Leitner, Lothsr. 34, D-80335 Munich.
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Value Added Tax Identification Number, in accordance with § 27 of the Value Added Tax Act (Umsatzsteuergesetz – UStG):DE 235 059 152
        </Typography>
      </Box>
      <Box sx={{textAlign: "left", marginTop: 3}}>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans" fontWeight= "bold" >
        Regulating Governing Body:
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Bavarian State Ministry of Sciences and the Arts
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        Salvatorstr. 2
        </Typography>
        <Typography color="initial" fontSize={14} fontFamily="Open Sans">
        D-80333 Munich
        </Typography>
      </Box>
    </Container>
    </Paper>
}

export default Main;
