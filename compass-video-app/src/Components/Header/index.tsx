import {
  House,
  Television,
  FilmReel,
  Star,
  MagnifyingGlass,
  FirstAid,
} from "@phosphor-icons/react";
import { useState } from "react";
import { SearchBarInput } from "@components/SearchBarInput";
import { MenuUser } from "@components/MenuUser";


export function Header() {

  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  const handleOpenSearchBar = () => {
    if (!isSearchBarOpen) {
      setIsSearchBarOpen(true);
    } else {
      setIsSearchBarOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-b from-applications-header to-transparent flex flex-wrap justify-center md:justify-between items-center px-4 py-2">
      <div className="order-0 md:order-none md:hidden">
        <img
          src=".\src\assets\Images\logo-compass.svg"
          alt="Logo Compass"
          className="block md:hidden"
        />
      </div>

      <div className="order-2 md:order-none">
        <ul className="flex flex-wrap justify-center gap-5">
          <li>
            <img
              src=".\src\assets\Images\logo-compass.svg"
              alt="Logo Compass"
              className="hidden md:mr-3 md:block"
            />
          </li>
          <li className="header-item">
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/home"
            >
              
            </NavLink> */}
            <House size={20} weight="fill" />
            <p>Início</p>
          </li>
          <li className="header-item">
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/series"
            >
              
            </NavLink> */}
            <Television size={20} weight="fill" />
            <p>Séries</p>
          </li>
          <li className="header-item">
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/movies"
            >
              
            </NavLink> */}
            <FilmReel size={20} weight="fill" />
            <p>Filmes</p>
          </li>
          <li className="header-item">
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/stars"
            >
              
            </NavLink> */}
            <Star size={20} weight="fill" />
            <p>Celebridades</p>
          </li>
        </ul>
      </div>

      <div className="order-1 md:order-none">
        <ul className="flex items-center gap-5 pb-2 md:pb-0">
          {isSearchBarOpen ? (
            <SearchBarInput
              onCloseSearchBar={() => setIsSearchBarOpen(false)}
            />
          ) : (
            <li className="header-item" onClick={handleOpenSearchBar}>
              <MagnifyingGlass size={20} weight="bold" />
              <p>Buscar</p>
            </li>
          )}

          <li className="header-item" onClick={() => alert("tela de minha-lista")}>
            {/* <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/my-list"
            >
              
            </NavLink> */}
            <FirstAid size={20} weight="fill" />
            <p>Minha lista</p>
          </li>
          <li className="header-item" >
            <MenuUser />
          </li>
        </ul>
      </div>
    </header>
  );
}
