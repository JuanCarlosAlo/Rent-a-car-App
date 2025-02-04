"use client"

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Login.module.scss";


type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    setErrorMessage(null);

    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      setErrorMessage("Credenciales incorrectas");
      return;
    }

    router.push("/dashboard"); 
  };

  return (
    <div className={styles.container}>
    <h2>Iniciar sesión</h2>

    {errorMessage && <p className={styles.error}>{errorMessage}</p>}

    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label>Email</label>
        <input
          {...register("email", { required: "El email es obligatorio" })}
          type="email"
          className={errors.email ? styles.inputError : ""}
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label>Contraseña</label>
        <input
          {...register("password", { required: "La contraseña es obligatoria" })}
          type="password"
          className={errors.password ? styles.inputError : ""}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "Cargando..." : "Ingresar"}
      </button>
    </form>
  </div>

  )
}

export default Login