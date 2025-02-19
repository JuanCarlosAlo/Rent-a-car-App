"use client";

import MainContent from "@/components/MainContent/MainContent";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import styles from "./Register.module.scss";
import MainButton from "@/components/MainButton/MainButton";

type RegisterFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    mode: "onBlur",
  });

  const router = useRouter();
  const password = watch("password");

  const onSubmit: SubmitHandler<RegisterFormInputs> = async (data) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el usuario");
      }

      router.push("/dashboard"); 
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <MainContent>
      <div className={styles.container}>
        <h2>Registrarse</h2>
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

          {/* Campo Confirmar Contraseña */}
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              className={errors.confirmPassword ? styles.inputError : ""}
              {...register("confirmPassword", {
                required: "Confirma tu contraseña",
                validate: (value) => value === password || "Las contraseñas no coinciden",
              })}
            />
            {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}
          </div>

          {/* Botón de envío */}
          <MainButton type="submit" color="secondary">
            Registrarse
          </MainButton>
        </form>
      </div>
    </MainContent>
  );
};

export default Register;
