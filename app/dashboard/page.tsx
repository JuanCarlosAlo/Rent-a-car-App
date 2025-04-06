"use client";
import MainButton from "@/components/MainButton/MainButton";
import MainContent from "@/components/MainContent/MainContent";
import { signOut } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  return (
    <MainContent>
      <div>Dashboard</div>
      <MainButton color="primary" onClick={() => signOut()}>
        Cerrar Sesión
      </MainButton>
    </MainContent>
  );
};

export default Dashboard;
