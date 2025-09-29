import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { isEmail, isFloat, isInt } from 'validator';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FaUserCircle, FaEdit } from 'react-icons/fa';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import { Form , ProfilePicture} from './styled';
import Loading from '../../components/Loading';
import { toast } from 'react-toastify';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno() {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const image = get(data, 'Images[0].url', '');

        setImage(image)

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
      } catch (error) {
        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);

        if (status === 400) {
          errors.forEach((erro) => toast.error(erro));
          navigate('/');
        }
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 125) {
      toast.error('O nome precisa conter entre 3 e 125 caracteres');
      formErrors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 125) {
      toast.error('O sobrenome precisa conter entre 3 e 125 caracteres');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      formErrors = true;
    }

    if (!isInt(String(idade))) {
      toast.error('Idade precisa ser um número inteiro');
      formErrors = true;
    }

    if (!isFloat(String(peso))) {
      toast.error('Peso precisa ser um número inteiro ou de ponto flutuante');
      formErrors = true;
    }

    if (!isFloat(String(altura))) {
      toast.error('Altura precisa ser um número inteiro ou de ponto flutuante');
      formErrors = true;
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado com sucesso!');
      } else {
        const { data} = await axios.post('/alunos/', {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado com sucesso!');
        navigate(`/aluno/${data.id}/edit`)
      }
    } catch (erro) {
      const errors = get(erro, 'response.data.error', []);
      const status = get(erro, 'response.status', 0);

      if (errors.length > 0) {
        errors.forEach((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />

        <h1>{id ? 'Editar Aluno' : 'Cadastrar Aluno'}</h1>

        {id && (
          <ProfilePicture>
            {image ? <img src={image} alt={nome}/> : <FaUserCircle size={180}/>}
            <Link to={`/images/${id}`}>
              <FaEdit size={24}/>
            </Link>
          </ProfilePicture>
        )}

        <Form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu Nome"
            />
          </label>
          <label>
            Sobrenome:
            <input
              type="text"
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Digite seu Sobrenome"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu Email"
            />
          </label>
          <label>
            Idade:
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
              placeholder="Digite sua Idade"
            />
          </label>
          <label>
            Peso:
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              placeholder="Digite seu Peso"
            />
          </label>
          <label>
            Altura:
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              placeholder="Digite sua Altura"
            />
          </label>
          <div className="button">
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Container>
    </>
  );
}
