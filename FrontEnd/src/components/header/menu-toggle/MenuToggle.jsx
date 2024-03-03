import { useState, useEffect, useRef } from "react";
import Nav from './Nav';

const MenuToggle = () => {
  const [abierto, setAbierto] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setAbierto((prevAbierto) => !prevAbierto);
  };

  const cerrarMenu = () => {
    setAbierto(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (abierto && menuRef.current && !menuRef.current.contains(event.target)) {
        cerrarMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [abierto]);

  return (
    <>
      <div className="lg:hidden">
        <button className="bg-main-700 text-white text-2xl p-3 rounded-lg grid gap-1 items-center" onClick={toggleMenu}>
          {abierto ? "x" : (
            <>
              <span className="bg-white block w-8 h-[0.2rem] rounded"></span>
              <span className="bg-white block w-8 h-[0.2rem] rounded"></span>
              <span className="bg-white block w-8 h-[0.2rem] rounded"></span>
            </>
          )}
        </button>
      </div>

      {/* NAVEGACION EN EL HEADER EN PANTALLAS GRANDES */}
      <div className="hidden lg:flex items-center">
        <Nav className={"flex gap-6"} />
      </div>

      {/* MENU DESPLEGABLE PARA PANTALLAS PEQUEÑAS */}
      {abierto && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-full bg-main-950 text-main-950 bg-opacity-50 flex items-center">
          <div ref={menuRef} className="h-full bg-white w-3/4 p-8 menu-container">
            <div className="flex justify-end">
              <button className="text-main-700" onClick={toggleMenu}>
                x
              </button>
            </div>
            <Nav className={"flex flex-col gap-3"} />
          </div>
        </div>
      )}
    </>
  );
};

export default MenuToggle;
