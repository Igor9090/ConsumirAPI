import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';


import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/auth/actions'
import Loading from '../../components/Loading';

export default function Login() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { isLoggedIn, isLoading } = useSelector(state => state.auth);
  const prevPath = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

   useEffect(() => {
    if (isLoggedIn) {
      navigate(prevPath, { replace: true });
    }
  }, [isLoggedIn, navigate, prevPath]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('A senha deve conter entre 6 e 50 caracteres');
    }

    if (formErrors) return;

    dispatch(actions.loginRequest({ email, password, prevPath }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading}/>
      <h1>Realize seu Login</h1>
      <Form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            placeholder="Seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Sua Senha"
          />
        </label>
        <div className="button">
          <button type="submit">Logar</button>
        </div>
      </Form>
    </Container>
  );
}
