import { Container } from "../../styles/GlobalStyles";
import { useParams , useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "lodash";
import { useDispatch } from 'react-redux';


import axios from '../../services/axios';
import { Form , Title} from './styled';
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const { id } = useParams();
  const [isLoading , setIsLoading] = useState(false);
  const [image, setImage] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const {data} = await axios.get(`/alunos/${id}`)
        setImage(get(data, 'Images[0].url', ''))
      } catch {
        toast.error("Erro ao carregar imagem")
        navigate('/')
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [id, navigate])

  const handleChange = async e => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);

    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('archive', file);

     try {
      setIsLoading(true)
        await axios.post('/api/images/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      } catch (erro) {
        const status = get(erro, 'response.status', 0);
        if (status === 401) dispatch(actions.loginFailure())
      } finally {
        setIsLoading(false)
      }
  }

  return (
    <>
      <Container>
        <Loading isLoading={isLoading}/>
        <Title>Fotos</Title>
        <Form>
          <label htmlFor="image">
            {image ? <img src={image} alt='Foto de Perfil'/> : 'Selecionar'}
            <input type="file" id="image" onChange={handleChange}/>
          </label>
        </Form>
      </Container>
    </>
  )
}
