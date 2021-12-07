import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Container } from "./styles";
import Button from "../button";
import Title from "../title";
import Separator from "../separator";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kmcdpzo",
        "template_9g7u6wf",
        form.current,
        "user_THgHiEA3qHQdf2dKpIEH5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container id="contact">
      <Title>Contact</Title>
      <p>
        Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius
        finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero
        viverra facilisis ut ac est.
      </p>
      <Separator />
      <form ref={form} onSubmit={sendEmail}>
        <input placeholder="Name" type="text" name="name" />
        <input placeholder="Email" type="email" name="email" />
        <textarea placeholder="Message" name="message" />
        <Button type="submit" children="Submit" props={false} />
      </form>
    </Container>
  );
}
