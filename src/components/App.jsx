import { Routes, Route } from 'react-router';
import { Container } from './BaseStyles.styled';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home';
import { AboutUs } from '../pages/AboutUs/AboutUs';
import { Modal } from './Modal/Modal';
import { Popup } from './Popup/Popup';
import { useApp } from '../hooks/useApp';
import { AboutProduct } from '../pages/AboutProduct/AboutProduct';
import { NotFount } from '../pages/NotFound/NotFount';

export const App = () => {
  const {
    isLoggedIn,
    logOut,
    logIn,
    userName,
    avatar,
    openModal,
    isModalOpen,
    isPopupOpen,
    modalContent,
    closeModal,
    closePopup,
    popupContent,
    cart,
    addToCart,
  } = useApp();

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
                cart={cart}
              />
            }
          >
            <Route
              index
              element={<Home isLoggedIn={isLoggedIn} addToCart={addToCart} />}
            />
            <Route path={'about-us'} element={<AboutUs />} />
            <Route
              path={'product/:productId'}
              element={
                <AboutProduct addToCart={addToCart} isLoggedIn={isLoggedIn} />
              }
            />
            <Route path={'*'} element={<NotFount />} />
          </Route>
        </Routes>
      </Container>

      {isModalOpen && <Modal content={modalContent} closeModal={closeModal} />}
      {isPopupOpen && <Popup closePopup={closePopup} message={popupContent} />}
    </>
  );
};
