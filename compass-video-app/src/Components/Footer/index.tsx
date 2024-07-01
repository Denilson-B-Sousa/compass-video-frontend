import compassLogo from 'assets/Images/logo-compass.svg'

export function Footer() {
    return (
      <footer className="flex flex-col bg-applications-footer items-center gap-5 p-10">
        <img
          src={compassLogo}
          alt="Logo Compass"
          className="w-60 h-auto"
        />
        <ul className="footer-text flex flex-row flex-wrap w-full justify-center gap-5">
          <a href='#'>Política de privacidade</a>
          <a href='#'>Contrato de assinatura</a>
          <a href='#'>Ajuda</a>
          <a href='#'>Dispositivos compatíveis</a>
          <a href='#'>Sobre Disney+</a>
          <a href='#'>Publicidade personalizada</a>
        </ul>
        <p className="footer-text mb-4 md:px-36 lg:px-80">
          Compass Video é um serviço por inscrição paga, seu conteúdo está sujeito a disponibilidade. O serviço Compass Video é comercializado por Disney DTC LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
        </p>
        <p className="footer-text">© Compass Video. Todos os direitos reservados.</p>
      </footer>
    );
  }
  

  