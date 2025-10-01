import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import {
  FaUserCircle,
  FaEdit,
  FaWindowClose,
  FaExclamation,
} from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from '../../styles/GlobalStyles';
import { AlunoContainer, ProfilePicture , NovoAluno } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const response = await axios.get('/alunos');
        setAlunos(response.data);
      } catch (error) {
        toast.error('Erro ao carregar alunos');
        console.error('Erro:', error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  const handleDeleteAsk = (e) => {
    e.preventDefault();

    const exclamation = e.currentTarget.nextSibling;
    exclamation.setAttribute('display', 'block');
    e.currentTarget.remove();
  };

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/alunos/${id}`);
      const novosAlunos = [...alunos];
      novosAlunos.splice(index, 1);
      setAlunos(novosAlunos);
    } catch (erro) {
      const status = get(erro, 'response.status', 0);

      if (status === 401 || !id) {
        toast.error('Você precisa fazer login novamente.');
      } else {
        toast.error(`Ocorreu um erro ao deletar aluno`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>Alunos</h1>

      <NovoAluno to={`/aluno`}>Adicionar Aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)} className="aluno-item">
            <ProfilePicture>
              {get(aluno, 'Images[0].url', false) ? (
                <img
                  src={aluno.Images[0].url}
                  alt={aluno.nome}
                />
              ) : (
                <FaUserCircle />
              )}
            </ProfilePicture>

            <div className="aluno-info">
              <span className="aluno-nome">{aluno.nome}</span>
              <span className="aluno-email">{aluno.email}</span>
            </div>

            <div className="aluno-actions">
              <Link to={`/aluno/${aluno.id}/edit`}>
                <FaEdit className="edit" />
              </Link>
              <Link to={`/aluno/${aluno.id}/delete`} onClick={handleDeleteAsk}>
                <FaWindowClose className="delete" />
              </Link>

              <FaExclamation
                size={16}
                display="none"
                cursor="pointer"
                className="deleteExclamation"
                onClick={(e) => handleDelete(e, aluno.id, index)}
              />
            </div>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
