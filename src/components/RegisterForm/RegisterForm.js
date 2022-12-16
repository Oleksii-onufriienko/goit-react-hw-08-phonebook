import styled from 'styled-components';
import { register } from 'redux/auth/authOperation';
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

export function RegisterForm() {
  let initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const dispatch = useDispatch();

  const handleSubmit = e => {
    console.log('Submit form: ', e);
    dispatch(register(e));
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <TitleStyled>Registration form</TitleStyled>
        <InputFieldLabel htmlFor="name">Name</InputFieldLabel>
        <InputField type="text" name="name" required />
        <InputFieldLabel htmlFor="email">Email</InputFieldLabel>
        <InputField type="email" name="email" required />
        <InputFieldLabel htmlFor="email">Password</InputFieldLabel>
        <InputField type="password" name="password" required />
        <SubmitButton type="submit">Registration</SubmitButton>
      </Form>
    </Formik>
  );
}
