import {
  House,
  Television,
  FilmReel,
  Star,
  MagnifyingGlass,
  FirstAid,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
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

  const requestToken = localStorage.getItem("requestToken")

  const createSession = async(requestToken: string) => {
    try {
     
      const response = await fetch('https://api.themoviedb.org/3/authentication/session/new', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk',
          'Content-Type': 'application/json;charset=utf-8',
        },
         body: JSON.stringify({request_token: `${requestToken}`})
      });

      const data = await response.json();
      const sessionId = data.session_id;
      localStorage.setItem('sessionId', sessionId);
      setAccountId(sessionId)

    } catch (error) {
      console.error('Erro ao criar sessão:', error);
    }
  }

  const setAccountId = async(sessionId: string) => {
    try {
     
      const response = await fetch(`https://api.themoviedb.org/3/account?session_id=${sessionId}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDAxYzQwNzg2YjMxNGViYjI1ZWRjY2JiZGE0NDVmNyIsIm5iZiI6MTcxOTI1NzYzNC4wNjU0Miwic3ViIjoiNjY3OWM3MDliN2JiOGVjYmZlOGE0YmU1Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.OmEXRdoZEQA3u5pgE-Hg1K_XvpOXDxds1v-JjvdJiJk',
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      const data = await response.json();
      const accountId = data.id;
      localStorage.setItem('accountId', accountId);

    } catch (error) {
      console.error('Erro ao definir o id da conta:', error);
    }
  }

   useEffect(() => {
    setTimeout(() => {
      createSession(requestToken!)
    }, 1000);
  },[])

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
