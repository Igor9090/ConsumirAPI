import {Routes, Route} from "react-router-dom";
import MyRoute from "./myRoute";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Alunos from "../pages/Alunos";
import Aluno from "../pages/Aluno";
import Fotos from "../pages/Fotos";
import Page404 from "../pages/Page404"

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<MyRoute element={Alunos} isClosed={false} />} />
        <Route path="/login/" element={<MyRoute element={Login} isClosed={false} />} />
        <Route path="/register/" element={<MyRoute element={Register} isClosed={false} />} />
        <Route path="/aluno/" element={<MyRoute element={Aluno} isClosed />} />
        <Route path="/aluno/:id/edit" element={<MyRoute element={Aluno} isClosed />} />
        <Route path="/alunos/" element={<MyRoute element={Alunos} isClosed />} />
        <Route path="/images/:id" element={<MyRoute element={Fotos} isClosed />} />
        <Route path="*" element={<MyRoute element={Page404} isClosed={false} />} />
      </Routes>
  );
}
