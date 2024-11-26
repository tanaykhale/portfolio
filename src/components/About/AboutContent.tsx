import { Box, Container, Typography, useTheme } from "@mui/material";
import Img1 from "../../assets/ui.png";
import Img2 from "../../assets/graphic-design.png";
import Img3 from "../../assets/api (1).png";
import Img4 from "../../assets/IMG4.png";
import "./About.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutContent = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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
      ref={ref}
      sx={{
        height: "100vh",
        width: "100vw",
        paddingTop: "5rem",
        textAlign: "center",
        backgroundColor: theme.palette.aboutBackground,
      }}
    >
      {/* Animated Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", marginBottom: "2rem" }}
        >
          What I do
        </Typography>
      </motion.div>

      {/* Animated Description */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography
            variant="body1"
            className="mydetails"
            sx={{ maxWidth: "800px", margin: "auto" }}
          >
            As a React web developer, I design and build modular, responsive
            user interfaces. My responsibilities include state management, API
            integration, and collaboration with UI/UX designers. I conduct code
            reviews, implement testing, and deploy applications. Continuous
            learning and adherence to industry best practices are essential for
            delivering efficient and secure web solutions.
          </Typography>
        </Box>
      </motion.div>

      {/* Animated Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Carousel
          responsive={responsive}
          infinite={true}
          className="skillcontainer"
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {/* Carousel Item 1 */}
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

          {/* Carousel Item 2 */}
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

          {/* Carousel Item 3 */}
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

          {/* Carousel Item 4 */}
          <Box sx={{ textAlign: "center", padding: "0 1rem" }}>
            <img
              src={Img4}
              alt="3D"
              className="image"
              style={{ borderRadius: "8px", maxWidth: "100%" }}
            />
            <Typography
              variant="h6"
              sx={{ marginTop: "1rem", fontWeight: "bold" }}
            >
              3D-Models with Three.JS
            </Typography>
            <Typography variant="body2">
              3D models are digital representations of objects, showcasing
              realistic details, shapes, and textures for visualization, design,
              and interactive experiences.
            </Typography>
          </Box>
        </Carousel>
      </motion.div>
    </Container>
  );
};

export default AboutContent;
