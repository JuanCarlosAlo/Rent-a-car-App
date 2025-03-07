"use client";

import MainContent from "@/components/MainContent/MainContent";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./Login.module.scss";
import MainButton from "@/components/MainButton/MainButton";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    mode: "onBlur", 
  });

  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result?.error) {
      console.error("Error de autenticación:", result.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <MainContent>
      <div className={styles.container}>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          {/* Campo Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className={errors.email ? styles.inputError : ""}
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Formato de email inválido",
                },
              })}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          {/* Campo Contraseña */}
          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              className={errors.password ? styles.inputError : ""}
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
            />
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          </div>

  
          <MainButton type="submit" color="secondary">Enviar</MainButton>
        </form>
      </div>
    </MainContent>
  );
};

export default Login;
