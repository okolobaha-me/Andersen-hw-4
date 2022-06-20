import { Routes, Route } from 'react-router';
import { Container } from './BaseStyles.styled';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { AboutUs } from '../pages/AboutUs/AboutUs';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Modal } from './Modal/Modal';
import { LoginForm } from './Forms/LoginForm/LoginForm';
import { RegistrationForm } from './Forms/RegistrationForm/RegistrationForm';
import { auth, getUserData, register, tokenOptions } from '../JS/API';
import { Popup } from './Popup/Popup';

export const App = () => {
  // popup logic
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  const openPopup = errMessage => {
    setPopupContent(errMessage);
    setIsPopupOpen(true);
  };

  //user logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');

  const setUserData = useCallback(res => {
    const { name, avatar } = res;
    setUserName(name);
    setAvatar(avatar);
    setIsLoggedIn(true);
    closeModal();
  }, []);

  const logIn = async (email, password) => {
    await auth(email, password)
      .then(setUserData)
      .catch(err => {
        const errMessage = `${err.response.data.message} please verify that the entered data is correct `;
        openPopup(errMessage);
      });
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUserName('');
    setAvatar('');
    tokenOptions.unset();
  };

  const registerUser = async ({ email, name, password }) => {
    await register({ email, name, password })
      .then(res => {
        const { email, password } = res;
        logIn(email, password);
        closeModal();
      })
      .catch(err => {
        const errMessage = err.response.data.message[0];
        openPopup(errMessage);
      });
  };

  //modal logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalContent(null);
  }, []);

  const openModal = async type => {
    const modalContent =
      type === 'logIn' ? (
        <LoginForm onSubmit={logIn} />
      ) : (
        <RegistrationForm onSubmit={registerUser} />
      );
    await setModalContent(modalContent);
    setIsModalOpen(true);
  };

  const firstLoad = useRef(true);

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = false;

    const token = window.localStorage.getItem('token') || '';
    if (!token) return;
    tokenOptions.set(token);
    getUserData().then(setUserData);
  }, [setUserData]);

  return (
    <>
      <Container>
        <Routes>
          <Route
            path={'/'}
            element={
              <Layout
                isLoggedIn={isLoggedIn}
                logOut={logOut}
                logIn={logIn}
                userName={userName}
                avatar={avatar}
                openModal={openModal}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path={'about-us'} element={<AboutUs />} />
          </Route>
        </Routes>
      </Container>
      {isModalOpen && <Modal content={modalContent} closeModal={closeModal} />}
      {isPopupOpen && <Popup closePopup={closePopup} message={popupContent} />}
    </>
  );
};
