import React, { useState } from 'react';
import pic from '../../assets/undraw_Organizing_projects_re_9p1k.png';
import pics from '../../assets/undraw_Maker_launch_re_rq81.png';
import img from "../../assets/trello-logo-blue.svg";

const SignupAdmin = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const languageStrings = {
    en: {
      signUpText: "Sign up to Trello",
      namePlaceholder: "Name",
      emailPlaceholder: "Email",
      passwordPlaceholder: "Password",
      confirmPasswordPlaceholder: "Confirm Password",
      registerButton: "Register",
      signInText: "Already have an account? Sign in here",
    },
    es: {
      signUpText: "Regístrate en Trello",
      namePlaceholder: "Nombre",
      emailPlaceholder: "Correo electrónico",
      passwordPlaceholder: "Contraseña",
      confirmPasswordPlaceholder: "Confirmar contraseña",
      registerButton: "Registrarse",
      signInText: "¿Ya tienes una cuenta? Inicia sesión aquí",
    },
    fr: {
      signUpText: "Inscrivez-vous sur Trello",
      namePlaceholder: "Nom",
      emailPlaceholder: "E-mail",
      passwordPlaceholder: "Mot de passe",
      confirmPasswordPlaceholder: "Confirmez le mot de passe",
      registerButton: "S'inscrire",
      signInText: "Vous avez déjà un compte ? Connectez-vous ici",
    },
  };

  const selectedStrings = languageStrings[selectedLanguage];

  const handleImageUpload = () => {
    alert('Image uploaded successfully!'); // Simulate image upload logic
  };

  const handleRegister = () => {
    alert('User registered successfully!'); // Simulate user registration logic
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-none w-[600px] relative">
        <div className="absolute bottom-0 left-0 right-0">
          <select
            className="mt-4 border rounded-lg px-3 py-2"
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
          <img src={pic} alt="Image 1" className="w-full" />
        </div>
      </div>

      <div className="flex-1 flex-col justify-center items-center flex relative">
        <div>
          <img src={img} className="w-full" alt="Trello Logo" />
        </div>
        <div className="max-h-[700px] w-[400px] rounded-[40px] items-center flex flex-col p-8 overflow-hidden">
          <div className="h-[700px] w-[400px] bg-gray-800 opacity-95 z-[-7] rounded-[40px] items-center flex flex-col shadow-lg p-8">
            <div className="font-bold text-2xl text-white mt-7">{selectedStrings.signUpText}</div>
            <div className='justify-center items-center flex flex-col'>
              <img
                src={img}
                className='w-[100px] h-[100px] border-[50%] object-cover rounded-[50%] border-[purple] border-[4px]'
                alt="User Profile"
              />
              <button
                className="w-[150px] h-11 bg-blue-600 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all mt-4"
                type="button"
                onClick={handleImageUpload}
              >
                Upload image
              </button>
            </div>
            <div className='mt-8'>
              <input
                type="text"
                placeholder={selectedStrings.namePlaceholder}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mt-4"
              />
              <input
                type="email"
                placeholder={selectedStrings.emailPlaceholder}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mt-2"
              />
              <input
                type="password"
                placeholder={selectedStrings.passwordPlaceholder}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mt-2"
              />
              <input
                type="password"
                placeholder={selectedStrings.confirmPasswordPlaceholder}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2 mt-2"
              />
            </div>
            <button
              className="py-2 px-8 mt-7 bg-blue-600 text-white rounded-md hover:scale-[1.02] hover:cursor-pointer transition-all"
              type="button"
              onClick={handleRegister}
            >
              {selectedStrings.registerButton}
            </button>
            <div className="my-4">
              <hr className="border-gray-600" />
            </div>
            <div className="mt-4 text-sm">
              <div className="flex flex-col items-center text-white">
                <div>{selectedStrings.signInText}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-none w-[600px] relative">
        <div className="absolute bottom-0 left-0 right-0">
          <img src={pics} alt="Image 2" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default SignupAdmin;
