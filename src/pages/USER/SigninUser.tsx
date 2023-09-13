import React, { useState } from 'react';
import img from "../../assets/trello-logo-blue.svg";

const SignInUser = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languageStrings = {
    en: {
      signInText: "Sign in to your Trello Account",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      signInButton: "Sign In",
      signUpText: "Don't have an account? Sign up here",
    },
    es: {
      signInText: "Inicia sesión en tu cuenta de Trello",
      emailPlaceholder: "Correo electrónico",
      passwordPlaceholder: "Contraseña",
      signInButton: "Iniciar sesión",
      signUpText: "¿No tienes una cuenta? Regístrate aquí",
    },
    fr: {
      signInText: "Connectez-vous à votre compte Trello",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Mot de passe",
      signInButton: "Se connecter",
      signUpText: "Pas encore de compte ? Inscrivez-vous ici",
    },
    de: {
      signInText: "Melden Sie sich in Ihrem Trello-Konto an",
      emailPlaceholder: "E-Mail",
      passwordPlaceholder: "Passwort",
      signInButton: "Anmelden",
      signUpText: "Noch kein Konto? Hier registrieren",
    },
    zh: {
      signInText: "登录到您的 Trello 帐户",
      emailPlaceholder: "电子邮件",
      passwordPlaceholder: "密码",
      signInButton: "登录",
      signUpText: "还没有帐户？在此注册",
    },
  };

  const selectedStrings = languageStrings[selectedLanguage];

  const handleSignIn = () => {
    alert('User signed in successfully!'); // Simulate sign-in logic
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex-col justify-center items-center flex relative">
        <div>
          <img src={img} className="w-full" alt="Trello Logo" />
        </div>
        <div className="max-h-[700px] w-[400px] rounded-[40px] items-center flex flex-col p-8 overflow-hidden">
          <div className="h-[500px] w-[400px] bg-gray-800 opacity-95 z-[-7] rounded-[40px] items-center flex flex-col shadow-lg p-8">
            <div className="font-bold text-2xl text-white mt-7">{selectedStrings.signInText}</div>
            <div className='mt-8'>
              <input
                type="email"
                placeholder={selectedStrings.emailPlaceholder}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mt-4"
              />
              <input
                type="password"
                placeholder={selectedStrings.passwordPlaceholder}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mt-2"
              />
            </div>
            <button
              className="py-2 px-8 mt-7 bg-blue-600 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all"
              type="button"
              onClick={handleSignIn}
            >
              {selectedStrings.signInButton}
            </button>
            <div className="my-4">
              <hr className="border-gray-600" />
            </div>
            <div className="mt-4 text-sm">
              <div className="flex flex-col items-center text-white">
                <div>{selectedStrings.signUpText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-none w-[600px] relative">
        <div className="absolute bottom-0 left-0 right-0">
          <img src={img} alt="Trello Background" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SignInUser;
