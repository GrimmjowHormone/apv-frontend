import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { cerrarSesion } = useAuth();
  return (
    <>
      <header className=" py-10 bg-indigo-600">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center ">
          <h1 className="font-bold text-2xl text-indigo-200 text-center">
            Administrador de Pacientes {""}
            <span className="text-white font-black">Veterinaria</span>
          </h1>

          <nav className="flex flex-col md:flex-row gap-4 items-center mt-5 md:mt-0">
            <Link
              to="/admin"
              className="text-white text-sm uppercase font-bold "
            >
              Pacientes
            </Link>
            <Link
              to="/admin/perfil"
              className="text-white text-sm uppercase font-bold"
            >
              Perfil
            </Link>

            <button
              type="button"
              className="text-white text-sm uppercase font-bold"
              onClick={cerrarSesion}
            >
              Cerrar Sesión
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
