import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import Typed from "typed.js";
import "./Home.css";
import Img from "../../assets/file (1).png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useEffect, useRef } from "react";

interface Prop {
  checked: boolean;
  smoothScrollTo: (value: string) => void;
}
const Home = ({ checked, smoothScrollTo }: Prop) => {
  const name = useRef(null);
  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["Tanay"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  const theme = useTheme();
  return (
    <Container
      id="home"
      maxWidth="lg"
      sx={{
        backgroundColor: theme.palette.homeBackground,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "2rem",
        height: "100vh",
      }}
    >
      <Box className="introContent" sx={{ flex: 1 }} mr={2}>
        <Typography variant="h4" className="hello" sx={{ fontWeight: "bold" }}>
          Hello,
        </Typography>

        <Typography variant="h2" sx={{ marginTop: "0.5rem" }}>
          I'm <span className="name" ref={name}></span>
          <br />
          <span style={{ fontStyle: "italic" }}>Web Developer</span>
        </Typography>

        <Typography
          variant="body1"
          sx={{ margin: "1rem 0", fontSize: "large" }}
        >
          I am a skilled and passionate web designer with experience in creating
          <br /> visually appealing and user-friendly websites.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          className="hireme"
          sx={{ display: "flex", alignItems: "center" }}
          onClick={() => smoothScrollTo("contact")}
        >
          <BusinessCenterIcon></BusinessCenterIcon>
          <Typography variant="button" sx={{ marginLeft: "0.5rem" }}>
            Hire me
          </Typography>
        </Button>
      </Box>

      <Box className="image-box" sx={{ width: "30%" }}>
        <img src={Img} alt="photo" className="introphoto" />
      </Box>
    </Container>
  );
};

export default Home;
