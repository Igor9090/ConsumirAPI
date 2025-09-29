import { Header } from './styled';
import { FaSignInAlt  } from 'react-icons/fa';
import { PiStudent } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useSelector , useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


import * as actions from "../../store/modules/auth/actions"

export default function HeaderComponent() {
  const id = useSelector((state) => state.auth.user.id);
  const nome = useSelector((state) => state.auth.user.nome);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure())
    navigate('/')
  }

  return (
    <Header>
      <nav>
        <Link className="custom-link alunos" to="/" aria-label="Página inicial">
          Alunos
          <PiStudent size={20}/>
        </Link>

        {id ? (
          <div className="user-info">
            <p>Bem-Vindo <Link className='nome' to='/register'>{nome}</Link></p>
            <Link
              className="custom-link logoutLink"
              to="/logout"
              aria-label="Logout"
              onClick={handleLogout}
            >
              <FaSignInAlt size={20}/>
            </Link>
          </div>
        ) : (
          <div className="auth-links">
            <Link
              className="custom-link loginLink"
              to="/login"
              aria-label="Página Login"
            >
              Login
            </Link>
            <Link
              className="custom-link registerLink"
              to="/register"
              aria-label="Página Register"
            >
              Cadastrar-se
            </Link>
          </div>
        )}
      </nav>
    </Header>
  );
}
