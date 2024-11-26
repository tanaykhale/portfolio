import { Box, Container, Typography, Link, useTheme } from "@mui/material";
import { Grid2 } from "@mui/material"; // importing Grid2 correctly
import Weather from "../../assets/weather.png";
import Todo from "../../assets/to-do-list.png";
import Game from "../../assets/tic-tac-toe.png";
import "./Portfolio.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Portfolio = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const theme = useTheme();
  return (
    <Container
      id="portfolio"
      ref={ref}
      sx={{
        height: "100vh",
        width: "100vw",
        paddingTop: "5rem",
        backgroundColor: theme.palette.portfolioBackground,
      }}
    >
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          My Work
        </Typography>
      </motion.div>

      {/* Description Animation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <Typography
          sx={{
            maxWidth: "1000px",
            margin: "3rem auto",
            textAlign: "justify",
            textAlignLast: "center",
          }}
        >
          As a versatile developer proficient in HTML, CSS, JavaScript,
          React.js, Python, Java, and various other languages, I specialize in
          crafting dynamic and interactive web solutions. With a keen eye for
          design and a solid understanding of backend development, I create
          seamless user experiences and robust applications. From front-end
          interfaces using React.js to server-side logic with Python and Java, I
          excel in delivering scalable and efficient solutions. With a passion
          for learning and a dedication to excellence, I consistently strive to
          stay updated with the latest technologies and best practices, ensuring
          the highest quality results for every project.
        </Typography>
      </motion.div>

      {/* Portfolio Items Animation */}
      <Grid2
        container
        spacing={10}
        className="image-container"
        component="div"
        sx={{ marginTop: "2rem" }}
      >
        {/* Weather App */}
        <Grid2 component="div" sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <Box>
              <img
                src={Weather}
                alt="Weather App"
                className="workImage"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Typography
                variant="h5"
                sx={{ marginTop: "0.5rem", fontWeight: "bold" }}
              >
                Weather App
              </Typography>
            </Box>
          </motion.div>
        </Grid2>

        {/* Todo List */}
        <Grid2 component="div" sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            <Box>
              <Link
                href="https://my-project-61f9e.web.app/"
                sx={{ textDecoration: "none" }}
              >
                <img
                  src={Todo}
                  alt="Todo List"
                  className="workImage"
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    marginTop: "0.5rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Todo List
                </Typography>
              </Link>
            </Box>
          </motion.div>
        </Grid2>

        {/* Tic Tac Toe */}
        <Grid2 component="div" sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
          >
            <Box>
              <img
                src={Game}
                alt="Tic Tac Toe"
                className="workImage"
                style={{ width: "100%", borderRadius: "8px" }}
              />
              <Typography
                variant="h5"
                sx={{ marginTop: "0.5rem", fontWeight: "bold" }}
              >
                Tic Tac Toe
              </Typography>
            </Box>
          </motion.div>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Portfolio;
