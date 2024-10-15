import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11vqk9y",
        "template_750gyhq",
        form.current,
        "u2O0nEr4yuikk209I"
      )
      .then(
        (result) => {
          alert("Your message has been sent successfully!");
        },
        (error: string) => {
          alert("An error occurred. Please try again.");
          console.log(error);
        }
      );
  };
  const theme = useTheme();
  return (
    <Container
      id="contact"
      className="contact"
      sx={{ backgroundColor: theme.palette.contactBackground }}
    >
      <Typography
        variant="h4"
        component="h2"
        className="contactus"
        gutterBottom
      >
        Contact Me
      </Typography>

      <form ref={form} onSubmit={handleSubmit}>
        <Box
          className="info"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          <TextField
            name="user_name"
            label="Your Name"
            variant="outlined"
            className="inp"
            required
          />
          <TextField
            className="inp"
            name="user_email"
            label="Your Email"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            name="message"
            placeholder="Enter the message"
            id="msg"
            multiline
            rows={4}
            variant="outlined"
            className="inp"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="btn"
          >
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Contact;
