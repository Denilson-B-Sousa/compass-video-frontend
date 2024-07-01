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
import { NavLink } from "react-router-dom";
import compassLogo from 'assets/Images/logo-compass.svg'



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
    <header className="bg-gradient-to-b from-applications-header to-transparent flex flex-wrap justify-center md:justify-between items-center px-4 py-2 absolute w-full">
      <div className="order-0 md:order-none md:hidden">
        <img
          src={compassLogo}
          alt="Logo Compass"
          className="block md:hidden"
        />
      </div>

      <div className="order-2 md:order-none">
        <ul className="flex flex-wrap items-center justify-center gap-5">
          <li>
            <img
              src={compassLogo}
              alt="Logo Compass"
              className="hidden md:mr-3 md:block"
            />
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link header-item" : "header-item")}
              to="/"
            >
            <House size={20} weight="fill" />
            <p>Início</p>
            </NavLink>
            
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link header-item" : "header-item")}
              to="/series"
            >
            <Television size={20} weight="fill" />
            <p>Séries</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link header-item" : "header-item")}
              to="/movies"
            >
            <FilmReel size={20} weight="fill" />
            <p>Filmes</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link header-item" : "header-item")}
              to="/stars"
            >
            <Star size={20} weight="fill" />
            <p>Celebridades</p>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="order-1 md:order-none">
        <ul className="flex flex-wrap justify-center items-center gap-5 pb-2 md:pb-0">
          {isSearchBarOpen ? (
            <SearchBarInput
              onCloseSearchBar={() => setIsSearchBarOpen(false)}
            />
          ) : (
            <li className="header-item" onClick={handleOpenSearchBar} >
              <MagnifyingGlass size={20} weight="bold" />
              <p>Buscar</p>
            </li>
          )}

          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link header-item" : "header-item")}
              to="/my-lists"
            >
            <FirstAid size={20} weight="fill" />
            <p>Minhas listas</p>
            </NavLink>
          </li>
          <li>
            <MenuUser />
          </li>
        </ul>
      </div>
    </header>
  );
}
