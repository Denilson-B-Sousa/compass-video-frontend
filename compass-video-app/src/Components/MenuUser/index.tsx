import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import avatarLogo from 'assets/Images/icon/avatar.svg'
import avatarLogo2 from 'assets/Images/icon/avatar2.svg'
import avatarLogo3 from 'assets/Images/icon/avatar3.svg'
import createAvatarLogo from 'assets/Images/icon/createAvatar.svg'

interface MenuPosition {
  top: number;
}

export function MenuUser() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({ top: 0 });

  const navigator = useNavigate();

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    if (!isMenuOpen) {
      const target = event.target as HTMLImageElement;

      const profileImageRect = target.getBoundingClientRect();

      const position: MenuPosition = {
        top: profileImageRect.bottom + window.scrollY,
      };

      setMenuPosition(position);
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  };

  const handleLogOut = () => {
    localStorage.clear();
    navigator('/login');
  }

  return (
    <div>
      <img
        src={avatarLogo}
        alt="avatar-icon"
        className="header-item"
        onClick={handleOpenMenu}
      />

      {isMenuOpen && (
        <div
          className="bg-neutral-700 p-4 rounded absolute right-2 z-10"
          style={{ top: menuPosition.top }}
        >
          <div>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 cursor-pointer">
                <img src={avatarLogo2} alt="" />
                <span className="header-item text-xs">Leslie Alexander</span>
              </li>
              <li className="flex gap-3 cursor-pointer">
                <img src={avatarLogo3} alt="" />
                <span className="header-item">Ronald Richards</span>
              </li>
              <li className="flex gap-3 cursor-pointer mb-5">
                <img src={createAvatarLogo} alt="" />
                <span className="header-item">Criar Perfil</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white flex flex-col gap-3">
              <li className="header-item">Editar perfis</li>
              <li className="header-item">Preferências</li>
              <li className="text-primary-100 font-medium cursor-pointer">
                Minha assinatura
              </li>
              <li className="header-item">Minha conta</li>
              <li className="header-item">Ajuda</li>
              <li
                className="header-item"
                onClick={handleLogOut}
              >
                Sair
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
