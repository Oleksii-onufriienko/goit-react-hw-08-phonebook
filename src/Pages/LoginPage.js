import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from 'components/LoginForm/LoginForm';
import { Modal } from 'components/Modal/Modal';

function LoginPage() {
  const [modalShow, setModalShow] = useState(true);
  const navigate = useNavigate();

  const handleMyCloseModal = () => {
    setModalShow(false);
    navigate('/', { replace: true });
  };

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      handleMyCloseModal();
    }
  };

  return (
    modalShow && (
      <Modal
        handleMyCloseModal={handleMyCloseModal}
        handleBackDropClick={handleBackDropClick}
      >
        <LoginForm />
      </Modal>
    )
  );
}

export default LoginPage;
