
import React from "react";
import Layout from "@/components/layout/Layout";
import AuthForm from "@/components/auth/AuthForm";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <AuthForm type="register" />
      </div>
    </Layout>
  );
};

export default Register;
