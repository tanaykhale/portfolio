import { Box, Container, Typography, useTheme } from "@mui/material";
import Img1 from "../../assets/ui.jpeg";
import Img2 from "../../assets/webdesign.png";
import Img3 from "../../assets/api.jpg";
import "./About.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const AboutContent = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const theme = useTheme();
  return (
    <Container
      id="about"
      className="container"
      sx={{
        height: "100vh",
        width: "100vw",
        paddingTop: "5rem",
        textAlign: "center",
        backgroundColor: theme.palette.aboutBackground,
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "2rem" }}
      >
        What I do
      </Typography>
      <Box sx={{ marginBottom: "2rem" }}>
        <Typography
          variant="body1"
          className="mydetails"
          sx={{ maxWidth: "800px", margin: "auto" }}
        >
          As a React web developer, I design and build modular, responsive user
          interfaces. My responsibilities include state management, API
          integration, and collaboration with UI/UX designers. I conduct code
          reviews, implement testing, and deploy applications. Continuous
          learning and adherence to industry best practices are essential for
          delivering efficient and secure web solutions.
        </Typography>
      </Box>

      <Carousel
        responsive={responsive}
        infinite={true}
        className="skillcontainer"
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <Box sx={{ textAlign: "center", padding: "0 1rem" }}>
          <img
            src={Img1}
            alt="ui"
            className="image"
            style={{ borderRadius: "8px", maxWidth: "100%" }}
          />
          <Typography
            variant="h5"
            sx={{ marginTop: "1rem", fontWeight: "bold" }}
          >
            UI/UX Design
          </Typography>
          <Typography variant="body2">
            Passionate UI/UX designer creating intuitive, visually appealing
            digital experiences.
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", padding: "0 1rem" }}>
          <img
            src={Img2}
            alt="webdesign"
            className="image"
            style={{ borderRadius: "8px", maxWidth: "100%" }}
          />
          <Typography
            variant="h6"
            sx={{ marginTop: "1rem", fontWeight: "bold" }}
          >
            Web Design
          </Typography>
          <Typography variant="body2">
            Proficient in UI/UX design, responsive layouts, and translating
            concepts into captivating web visuals.
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", padding: "0 1rem" }}>
          <img
            src={Img3}
            alt="api"
            className="image"
            style={{ borderRadius: "8px", maxWidth: "100%" }}
          />
          <Typography
            variant="h6"
            sx={{ marginTop: "1rem", fontWeight: "bold" }}
          >
            Integration with APIs
          </Typography>
          <Typography variant="body2">
            Proficient in connecting applications, ensuring seamless data
            exchange.
          </Typography>
        </Box>
      </Carousel>
    </Container>
  );
};

export default AboutContent;
