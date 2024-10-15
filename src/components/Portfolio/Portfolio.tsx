import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  useTheme,
} from "@mui/material";
import Weather from "../../assets/weather.png";
import Todo from "../../assets/todo.png";
import Game from "../../assets/tic tac toe.png";
import "./Portfolio.css";

const Portfolio = () => {
  const theme = useTheme();
  return (
    <Container
      id="portfolio"
      sx={{
        height: "100vh",
        width: "100vw",
        paddingTop: "5rem",
        backgroundColor: theme.palette.portfolioBackground,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontWeight: "bold", textAlign: "center" }}
      >
        My Work
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginY: "1rem",
          textAlign: "justify",
          textAlignLast: "center",
        }}
      >
        As a versatile developer proficient in HTML, CSS, JavaScript, React.js,
        Python, Java, and various other languages, I specialize in crafting
        dynamic and interactive web solutions. With a keen eye for design and a
        solid understanding of backend development, I create seamless user
        experiences and robust applications. From front-end interfaces using
        React.js to server-side logic with Python and Java, I excel in
        delivering scalable and efficient solutions. With a passion for learning
        and a dedication to excellence, I consistently strive to stay updated
        with the latest technologies and best practices, ensuring the highest
        quality results for every project.
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", marginTop: "2rem" }}
      >
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
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
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
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
                sx={{ marginTop: "0.5rem", fontWeight: "bold", color: "black" }}
              >
                Todo List
              </Typography>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
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
        </Grid>
      </Grid>
    </Container>
  );
};

export default Portfolio;
