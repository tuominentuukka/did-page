import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import logo from "../resources/images/logo.png";
import login from "../resources/images/login.png";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import LockIcon from "@mui/icons-material/Lock";

const pages = [
  "The BRIDGE project",
  "Registration",
  "Next Digital Impact Day",
  "Previous DIDs",
  "FAQ",
];
const settings1 = ["Profile", "Meeting", "Questionnaire"];
const settings2 = ["Feedback", "Diploma", "Future participation"];
const pathname = window.location.pathname;
var black = "#000000";
var blue = "#236FB6";

function NavBar() {
  const pathname2 = pathname.replace(/[^a-zA-Z ]/g, "");

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        boxShadow: "none",
        zIndex: 1
      }}
      component="Header"
    >
      <Container sx={{ marginTop: 2, marginBottom: 10 }}>
        <Box
          sx={{
            position: "absolute",
            left: 20,
            height: 36,
          }}
        >
          <Typography color="initial" fontSize={24} fontFamily="Open Sans">
            DIGITAL IMPACT DAY
          </Typography>
          <Typography color="initial" fontSize={12} fontFamily="Open Sans">
            for a sustainable future
          </Typography>
        </Box>
        <Box
          component="img"
          sx={{
            height: 50,
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            left: 0,
            right: 0,
          }}
          alt="Digital Impact Day"
          src={logo}
        />
        <Box
          sx={{
            height: 50,
            position: "absolute",
            right: 20,
          }}
        >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Login" src={login} sx={{ height: 50 }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings1.map((setting1) => (
              <MenuItem key={setting1} onClick={handleCloseUserMenu}>
                <Button
                  sx={{
                    display: "block",
                    marginRight: 0,
                    marginLeft: "auto",
                    color: "#000000",
                    textAlign: "right",
                    fontFamily: "Open Sans",
                    fontSize: 16,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                  href={setting1}
                >
                  {setting1}
                </Button>
              </MenuItem>
            ))}
            {settings2.map((setting2) => (
              <MenuItem key={setting2} onClick={handleCloseUserMenu}>
                <Button
                  sx={{
                    display: "block",
                    marginRight: 0,
                    marginLeft: "auto",
                    color: "#000000",
                    textAlign: "right",
                    fontFamily: "Open Sans",
                    fontSize: 16,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                  disabled={true}
                  href={setting2}
                >
                  {setting2}
                  <LockIcon />
                </Button>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
      <Container sx={{ borderTop: "3px solid #000000", minWidth: "98%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            my: 2,
          }}
        >
          {pages.map((page) => (
            <Button
              key={page}
              sx={{
                color: pathname2 === `${page.replace(/ /g, "")}` ? blue : black,
                display: "flex",
                marginRight: 10,
                padding: 0,
                fontSize: 24,
                fontWeight: "bold",
                fontFamily: "Open Sans",
                textTransform: "none",
              }}
              href={page}
            >
              {page}
            </Button>
          ))}
        </Box>
      </Container>
    </Paper>
  );
}
export default NavBar;
