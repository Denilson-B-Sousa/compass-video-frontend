import compassLogo from 'assets/Images/logo-compass.svg'
import { Link } from 'react-router-dom';

export function Footer() {
    return (
      <footer className="flex flex-col bg-applications-footer items-center gap-5 p-10">
        <Link to="/">
        <img
          src={compassLogo}
          alt="Logo Compass"
          className="w-60 h-auto"
        />
        </Link>
        <ul className="footer-text flex flex-row flex-wrap w-full justify-center gap-5">
          <Link to="/">Política de privacidade</Link>
          <Link to="/">Contrato de assinatura</Link>
          <Link to="/">Ajuda</Link>
          <Link to="/">Dispositivos compatíveis</Link>
          <Link to="/">Sobre Disney+</Link>
          <Link to="/">Publicidade personalizada</Link>
        </ul>
        <p className="footer-text mb-4 md:px-36 lg:px-80">
          Compass Video é um serviço por inscrição paga, seu conteúdo está sujeito a disponibilidade. O serviço Compass Video é comercializado por Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
        </p>
        <p className="footer-text">© Compass Video. Todos os direitos reservados.</p>
      </footer>
    );
  }
  

  