import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Container } from "./styles";
import Button from "../button";
import Title from "../title";
import Separator from "../separator";
import toast from "react-hot-toast";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Contact() {
  const form = useRef();
  const Schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    text: yup.string().required("Mensagem obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const sendEmail = (e) => {
    emailjs
      .sendForm(
        "service_kmcdpzo",
        "template_9g7u6wf",
        form.current,
        "user_THgHiEA3qHQdf2dKpIEH5"
      )
      .then(
        () => {
          toast.success("Mensagem enviado com sucesso");
        },
        () => {
          toast.error("Enviado ao enviar sua mensagem");
        }
      );
  };

  function onSubmitFunction(data, e) {
    sendEmail(data);
    e.target.reset();
  }

  return (
    <Container id="contact">
      <Title>Contato</Title>
      <p>Você está com dúvidas ou precisa relatar um problema o site</p>
      <Separator />
      <form ref={form} onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          placeholder="Digite seu nome"
          type="text"
          name="name"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>
        <input
          placeholder="Digite seu email"
          type="email"
          name="email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <textarea
          minLength={10}
          placeholder="Digite sua mensagem"
          name="message"
          {...register("text")}
        />
        <span>{errors.text?.message}</span>
        <Button type="submit" children="Enviar" props={false} />
      </form>
    </Container>
  );
}
