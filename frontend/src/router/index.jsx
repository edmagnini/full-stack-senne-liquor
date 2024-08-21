import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import Chamados from "@/pages/chamados";
import Home from "@/pages/home";
import Hospitais from "@/pages/hospitais";
import Login from "@/pages/login";
import Medicos from "@/pages/medicos";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import ChamadoAssign from "../pages/chamadoAssign";
import ChamadoCreate from "../pages/chamadoCreate";
import { ModeToggle } from "../components/mode-toggle";
import useAuthMiddleware from "../middleware/useAuthenticated";

const HeaderWrapper = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return !isLoginPage ? <Header /> : null;
};

const ProtectedRoute = ({ element }) => {
  useAuthMiddleware();
  return element;
};

export const MainRouter = () => {
  return (
    <Router>
      <HeaderWrapper />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={<Chamados />} />} />
        <Route path="/chamados" element={<ProtectedRoute element={<Chamados />} />} />
        <Route path="/chamados/create" element={<ProtectedRoute element={<ChamadoCreate />} />} />
        <Route path="/chamados/assign" element={<ProtectedRoute element={<ChamadoAssign />} />} />
        <Route path="/medicos" element={<ProtectedRoute element={<Medicos />} />} />
        <Route path="/hospitais" element={<ProtectedRoute element={<Hospitais />} />} />
      </Routes>
      <Toaster className='z-20' />
      <ModeToggle />
    </Router>
  );
};
