import "../App.css";
import React from "react";
import {PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import certification from "../resources/certification.pdf";
import {useState,useEffect, useCallback} from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { API, Amplify, graphqlOperation } from "aws-amplify";
import awsExports from "../aws-exports";
import { listRegistereds } from "../queries";
import { Auth } from "aws-amplify";
Amplify.configure(awsExports);

const LoadPDF = () => {
  const [user, setUser] = useState({});
  const [userArray, setUserArray] = useState([]);
  var firsName = "";
  var lastName = "";

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

  const [pdfInfo, setPdfInfo] = useState([]);

  const modifyPdf = async () => {
    const existingPdfBytes = await fetch(
      certification
    ).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    
    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();
    firsName = user[0].first_name;
    lastName = user[0].last_name;
    var name = firsName + " " + lastName;
    firstPage.drawText(name, {
      x: width / 2 - 130,
      y: height / 2 + 20,
      size: 30,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    const pdfBytes = await pdfDoc.save();

    const docUrl = URL.createObjectURL(new Blob([pdfBytes], {type: 'application/pdf'}))
    
    setPdfInfo(docUrl);
    
  };
  useEffect(() => {
    modifyPdf();
  }, [user]);

  return (
    
    <Paper sx={{marginTop: "170px", marginLeft: "30%", marginRight: "30%", marginBottom: "70px", boxShadow: "none"}}>
    <Container >
    <Box marginBottom={3} sx={{textAlign: "center"}}>
        <Typography color="initial" fontSize={48} fontFamily="Open Sans" fontWeight= "ligth">
          Download your Diploma
        </Typography>
      </Box>
      <Box sx={{textAlign: "center", marginLeft:10, marginTop:3}}>
        <iframe src={pdfInfo + "#toolbar=0"} width="100%" height="760px" />
      </Box>
      <Box sx={{textAlign: "center"}}>
        <Button variant="contained" href={pdfInfo} target="_blank" download
        sx={{backgroundColor: "#F8535A", color: "#FFFFFF", fontFamily: "Open Sans", fontSize: 20, fontWeight: "semibold", paddingLeft:4, paddingRight:4}}
        >
         Download
        </Button>
      </Box>
    </Container>
    </Paper>
  );
};

export default LoadPDF;
