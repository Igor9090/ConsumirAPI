import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Você fez Login');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
  } catch (error) {
    console.error('Erro no login:', error.response?.data || error.message);

    toast.error('Usuário ou Senha inválido!');
    yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  const { id, nome, email, password, navigate } = payload;

  try {
    if (id) {
      yield call(axios.put, `/users`, {
        id,
        nome,
        email,
        password: password || undefined,
      });

      toast.success('Conta alterada com sucesso!');
      yield put(actions.registerUpdatedSuccess({ nome, email }));
    } else {
      yield call(axios.post, '/users', {
        nome,
        email,
        password,
      });

      toast.success('Conta criada com sucesso!');
      yield put(actions.registerCreatedSuccess({ nome, email }));
    }

    if (navigate) {
      if (id) {
        yield call(navigate, -1);
      } else {
        yield call(navigate, '/login');
      }
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
      toast.info('Você precisa fazer login novamente.');
      delete axios.defaults.headers.Authorization;

      yield put(actions.loginFailure());

      if (navigate) {
        yield call(navigate, '/login');
      }
    }

    yield put(actions.registerFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
