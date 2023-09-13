import  { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language

  const languageStrings = {
    en: {
      signUpText: 'Sign Up',
      firstNamePlaceholder: 'First Name',
      lastNamePlaceholder: 'Last Name',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      confirmPasswordPlaceholder: 'Confirm Password',
      languageLabel: 'Language',
      uploadImageLabel: 'Upload Profile Picture',
      submitButtonLabel: 'Sign Up',
    },
    es: {
      signUpText: 'Registrarse',
      firstNamePlaceholder: 'Nombre',
      lastNamePlaceholder: 'Apellido',
      emailPlaceholder: 'Correo Electrónico',
      passwordPlaceholder: 'Contraseña',
      confirmPasswordPlaceholder: 'Confirmar Contraseña',
      languageLabel: 'Idioma',
      uploadImageLabel: 'Subir Foto de Perfil',
      submitButtonLabel: 'Registrarse',
    },
    fr: {
      signUpText: 'Inscription',
      firstNamePlaceholder: 'Prénom',
      lastNamePlaceholder: 'Nom de Famille',
      emailPlaceholder: 'E-mail',
      passwordPlaceholder: 'Mot de Passe',
      confirmPasswordPlaceholder: 'Confirmer le Mot de Passe',
      languageLabel: 'Langue',
      uploadImageLabel: 'Télécharger une Photo de Profil',
      submitButtonLabel: "S'inscrire",
    },
    de: {
      signUpText: 'Anmelden',
      firstNamePlaceholder: 'Vorname',
      lastNamePlaceholder: 'Nachname',
      emailPlaceholder: 'E-Mail',
      passwordPlaceholder: 'Passwort',
      confirmPasswordPlaceholder: 'Passwort Bestätigen',
      languageLabel: 'Sprache',
      uploadImageLabel: 'Profilbild Hochladen',
      submitButtonLabel: 'Registrieren',
    },
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here (e.g., send data to backend)
      console.log(values);
    },
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const selectedStrings = languageStrings[selectedLanguage];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 to-blue-800">
      <div className="bg-gradient-to-b from-blue-100 to-blue-4    00 p-8 rounded shadow-md ">
        <h2 className="text-2xl font-bold mb-4">{selectedStrings.signUpText}</h2>
        <form onSubmit={formik.handleSubmit}>
         
          <div className="mb-4 ">
            <label htmlFor="firstName" className="block text-gray-600 text-sm font-semibold mb-2">
              {selectedStrings.firstNamePlaceholder}
            </label>
            <input
              type="text"
              id="firstName"
              {...formik.getFieldProps('firstName')}
              className="border rounded w-full py-2 px-3"
              placeholder={selectedStrings.firstNamePlaceholder}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>
            ) : null}
          </div>

          <div className="mb-4 ">
            <label htmlFor="lastName" className="block text-gray-600 text-sm font-semibold mb-2">
              {selectedStrings.lastNamePlaceholder}
            </label>
            <input
              type="text"
              id="lastName"
              {...formik.getFieldProps('lastName')}
              className="border rounded w-full py-2 px-3 "
              placeholder={selectedStrings.lastNamePlaceholder}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.lastName}</div>
            ) : null}
          </div>
         

         <div className="mb-4 ">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
              {selectedStrings.emailPlaceholder}
            </label>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
              className="border rounded w-full py-2 px-3"
              placeholder={selectedStrings.emailPlaceholder}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4 ">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
              {selectedStrings.passwordPlaceholder}
            </label>
            <input
              type="password"
              id="password"
              {...formik.getFieldProps('password')}
              className="border rounded w-full py-2 px-3"
              placeholder={selectedStrings.passwordPlaceholder}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
            ) : null}
          </div>
        

   
        <div className="mb-4 ">
            <label htmlFor="confirmPassword" className="block text-gray-600 text-sm font-semibold mb-2">
              {selectedStrings.confirmPasswordPlaceholder}
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...formik.getFieldProps('confirmPassword')}
              className="border rounded w-full py-2 px-3"
              placeholder={selectedStrings.confirmPasswordPlaceholder}
            />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <label htmlFor="language" className="block text-gray-600 text-sm font-semibold mb-2">
              {selectedStrings.languageLabel}
            </label>
            <select
              id="language"
              onChange={handleLanguageChange}
              value={selectedLanguage}
              className="border rounded w-full py-2 px-3"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

      

         
          <div className="mb-4">
            <label htmlFor="profilePicture" className="block text-gray-600 text-sm font-semibold mb-2">
              {selectedStrings.uploadImageLabel}
            </label>
            <input
              type="file"
              id="profilePicture"
              accept="image/*"
              onChange={handleImageUpload}
              className="border rounded w-full py-2 px-3"
            />
          </div>
          {selectedImage && (
            <div className="mb-4">
              <img src={selectedImage} alt="Selected" className="rounded-full w-16 h-16 mx-auto" />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
          >
            {selectedStrings.submitButtonLabel}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
