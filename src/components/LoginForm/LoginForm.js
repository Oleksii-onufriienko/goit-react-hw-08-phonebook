import styled from 'styled-components';
import { logIn } from 'redux/auth/authOperation';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';

const InputFieldLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const SubmitButton = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

const InputField = styled(Field)`
  display: block;
  margin-bottom: 15px;
`;

const TitleStyled = styled.h3`
  text-align: center;
`;

export function LoginForm() {
  let initialValues = {
    email: '',
    password: '',
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    dispatch(logIn(e));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <TitleStyled>Login form</TitleStyled>

        <InputFieldLabel htmlFor="email">Email</InputFieldLabel>
        <InputField type="text" name="email" required />

        <InputFieldLabel htmlFor="email">Password</InputFieldLabel>
        <InputField type="password" name="password" required />

        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
    </Formik>
  );
}
