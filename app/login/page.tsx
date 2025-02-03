"use client"

import MainContent from '@/components/MainContent/MainContent'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type LoginFormInputs = {
  email: string;
  password: string;
};


const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
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
      // Redirigir o manejar el login exitoso
      router.push("/dashboard");
    }
  };
  return (
    <MainContent>
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Formato de email inválido',
              },
            })}
          />
          {errors.email && (
            <p style={{ color: 'red', margin: '0.5rem 0' }}>{errors.email.message}</p>
          )}
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: {
                value: 6,
                message: 'La contraseña debe tener al menos 6 caracteres',
              },
            })}
          />
          {errors.password && (
            <p style={{ color: 'red', margin: '0.5rem 0' }}>{errors.password.message}</p>
          )}
        </div>
        <button type="submit" style={{ padding: '0.75rem 1.5rem' }}>
          Iniciar sesión
        </button>
      </form>
    </div>
  </MainContent>
  )
}

export default Login