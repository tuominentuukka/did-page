import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import FundedEu from "../resources/images/eu_funded.png";
import linkedin from "../resources/images/linkedin.png";

const footer = ["Imprint", "Contact"];
const pathname = window.location.pathname;
var black = "#000000";
var blue = "#236FB6";



export default function Footer() {
  return (
    <Paper sx={{
      position: 'fixed',
      bottom: 0,
      width: '100%',
    }} 
    component="footer" >
      <Container sx={{borderTop: '3px solid #000000', minWidth:"98%"}}>
        <Box
          sx={{
            display: 'inline-block',
            position: 'absolute',
            left: 20,
            top: 18,
            height: 36,
          }}
        >
          <Typography variant="caption" color="initial" fontSize={12} fontFamily="Open Sans"  >
            <strong>© 2022</strong> BRIDGE
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            my: 1,
            paddingLeft: 20,
          }}
        >
          {footer.map((page) => (
              <Button
                key={page}                
                sx={{
                color: pathname === `/${page}` ? blue : black, 
                display: 'flex',
                marginRight: 5, 
                height: 36,
                padding: 0,
                fontSize: 12,
                fontFamily: "Open Sans",
                fontWeight: 600,
                textTransform: 'none',}}
                href = {page}
              >
                {page}
              </Button>
            ))}
            <Button
              key="linkedin"
              target="_blank"
              href = "https://www.linkedin.com/groups/12735655/"
              startIcon={<img src={linkedin} alt="LinkedIn" height={18} />}                            
            >
            </Button>
            <Box
              component="img"
              sx={{
                height: 36,
                float: "right",
                display: 'flex',
                position: 'absolute',
                right: 20,
              }}
              alt="Funded by the European Union"
              src={FundedEu}
            />
        </Box>
      </Container>
    </Paper>
  );
}