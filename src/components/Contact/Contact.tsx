// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import { useRef } from "react";
// import emailjs from "emailjs-com";
// import "./contact.css";
// import EarthCanvas from "./EarthCanvas";
// import { motion } from "framer-motion";
// import { slideIn } from "../../utils/motion";

// const Contact = () => {
//   const form = useRef<HTMLFormElement>(null);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_11vqk9y",
//         "template_750gyhq",
//         form.current,
//         "u2O0nEr4yuikk209I"
//       )
//       .then(
//         (result) => {
//           alert("Your message has been sent successfully!");
//         },
//         (error: string) => {
//           alert("An error occurred. Please try again.");
//           console.log(error);
//         }
//       );
//   };
//   const theme = useTheme();
//   return (
//     <Container
//       id="contact"
//       className="contact"
//       sx={{
//         backgroundColor: theme.palette.contactBackground,
//         display: "flex",
//       }}
//     >
//       <Typography
//         variant="h4"
//         component="h2"
//         className="contactus"
//         gutterBottom
//       >
//         Contact Me
//       </Typography>

//       <form ref={form} onSubmit={handleSubmit}>
//         <Box
//           className="info"
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "1rem",
//             alignItems: "center",
//           }}
//         >
//           <TextField
//             name="user_name"
//             label="Your Name"
//             variant="outlined"
//             className="inp"
//             required
//           />
//           <TextField
//             className="inp"
//             name="user_email"
//             label="Your Email"
//             variant="outlined"
//             type="email"
//             required
//           />
//           <TextField
//             name="message"
//             placeholder="Enter the message"
//             id="msg"
//             multiline
//             rows={4}
//             variant="outlined"
//             className="inp"
//             required
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             className="btn"
//           >
//             Submit
//           </Button>
//         </Box>
//       </form>

//       <Box sx={{ width: "50%", backgroundColor: "black" }}>
//         <motion.div
//           variants={slideIn("right", "tween", 0.2, 1)}
//           className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
//         >
//           <EarthCanvas />
//         </motion.div>
//       </Box>
//     </Container>
//   );
// };

// export default Contact;
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
import EarthCanvas from "./EarthCanvas";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_11vqk9y",
        "template_750gyhq",
        form.current,
        "u2O0nEr4yuikk209I"
      )
      .then(
        () => {
          alert("Your message has been sent successfully!");
        },
        (error) => {
          alert("An error occurred. Please try again.");
          console.error(error);
        }
      );
  };

  const theme = useTheme();
  return (
    <Container
      id="contact"
      sx={{
        backgroundColor: theme.palette.contactBackground || "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      {/* Left Side - Contact Form */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          alignItems: "flex-start",
          padding: "2rem",
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Contact Me
        </Typography>

        <form
          ref={form}
          onSubmit={handleSubmit}
          style={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            <TextField
              name="user_name"
              label="Your Name"
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              name="user_email"
              label="Your Email"
              variant="outlined"
              type="email"
              fullWidth
              required
            />
            <TextField
              name="message"
              placeholder="Enter your message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                padding: "0.75rem",
                fontWeight: "bold",
              }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      {/* Right Side - Earth Model */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",

          borderRadius: "8px",
        }}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          initial="hidden"
          animate="show"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <EarthCanvas />
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact;
