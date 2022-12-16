import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Modal } from 'components/Modal/Modal';

function RegisterPage() {
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
        <RegisterForm />
      </Modal>
    )
  );
}

export default RegisterPage;
