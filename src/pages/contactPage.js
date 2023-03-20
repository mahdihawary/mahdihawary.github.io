import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  Divider,
  Input,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import Swal from "sweetalert2";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail",
        "contact_form",
        form.current,
        "AdQEAmSsMhmKGIPR2"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message sent sucessfully 👍",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Something went wrong 🙃",
            text: error.text,
          });
        }
      );
  };

  return (
    <Paper sx={{ backgroundColor: "white", padding: "2%", margin: "5%" }}>
      <Stack alignItems="center" spacing={2}>
        <h1>Contact</h1>
        <Divider variant="inset" sx={{ width: "50%" }} />
        <Typography>
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </Typography>
        <Divider variant="inset" sx={{ width: "50%" }} />
        <form ref={form} onSubmit={sendEmail} className={"contact_form"}>
          <Stack alignItems="center" spacing={2}>
            <TextField
              required
              type="text"
              name="user_name"
              variant="outlined"
              label="Name"
            />

            <TextField
              type="email"
              name="user_email"
              variant="outlined"
              label="Email"
              required
            />

            <TextField
              name="message"
              variant="filled"
              multiline
              minRows={4}
              placeholder="Message here..."
            />

            <Button
              type="submit"
              value="Send"
              sx={{
                color: "white",
                backgroundColor: "grey",
                paddingBottom: "2%",
              }}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </Stack>
    </Paper>
  );
};

export default ContactPage;
