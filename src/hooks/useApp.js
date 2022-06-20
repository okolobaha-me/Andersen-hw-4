import { useCallback, useEffect, useRef, useState } from 'react';
import { LoginForm } from '../components/Forms/LoginForm/LoginForm';
import { RegistrationForm } from '../components/Forms/RegistrationForm/RegistrationForm';
import { auth, getUserData, register, tokenOptions } from '../JS/API';

export const useApp = () => {
  //cart logic
  const [cart, setCart] = useState({});

  const saveCartToStorage = cart => {
    window.localStorage.setItem(`cart user ${userId}`, JSON.stringify(cart));
  };

  const addToCart = (productId, price) => {
    let newCart;

    if (cart[productId]) {
      newCart = {
        ...cart,
        [productId]: {
          quantity: cart[productId].quantity + 1,
          price,
        },
      };
    } else {
      newCart = {
        ...cart,
        [productId]: { quantity: 1, price },
      };
    }

    setCart(newCart);
    saveCartToStorage(newCart);

    // if (cart[productId]) {
    //   setCart(prevState => {
    //     const newCart = {
    //       ...prevState,
    //       [productId]: {
    //         quantity: prevState[productId].quantity + 1,
    //         price,
    //       },
    //     };
    //     saveCartToStorage(newCart);
    //     return newCart;
    //   });
    // } else {
    //   setCart(prevState => {
    //     const newCart = {
    //       ...prevState,
    //       [productId]: { quantity: 1, price },
    //     };
    //     saveCartToStorage(newCart);
    //     return cart;
    //   });
    // }
  };

  const getCartFromStorage = userId => {
    let cart = window.localStorage.getItem(`cart user ${userId}`) || '{}';
    cart = JSON.parse(cart);
    setCart(cart);
  };

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

  //user logic
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userId, setUserId] = useState('');

  const setUserData = useCallback(
    res => {
      const { name, avatar, id } = res;
      setUserId(id);
      setUserName(name);
      setAvatar(avatar);
      setIsLoggedIn(true);
      getCartFromStorage(id);

      closeModal();
    },
    [closeModal]
  );

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

  useEffect(() => {
    if (!firstLoad.current) return;
    firstLoad.current = false;

    const token = window.localStorage.getItem('token') || '';
    if (!token) return;
    tokenOptions.set(token);
    getUserData().then(setUserData);
  }, [setUserData]);

  return {
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
  };
};
