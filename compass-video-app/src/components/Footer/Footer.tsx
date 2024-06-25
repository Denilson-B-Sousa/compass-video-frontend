export function Footer() {
    return (
      <footer className="flex flex-col bg-applications-footer items-center gap-5 p-10">
        <img
          src=".\src\assets\Images\logo-compass.svg"
          alt="Logo Compass"
          className="w-60 h-auto"
        />
        <ul className="footer-text flex flex-row flex-wrap w-full justify-center gap-5">
          <li>Política de privacidade</li>
          <li>Contrato de assinatura</li>
          <li>Ajuda</li>
          <li>Dispositivos compatíveis</li>
          <li>Sobre Disney+</li>
          <li>Publicidade personalizada</li>
        </ul>
        <p className="footer-text mb-4 md:px-36 lg:px-80">
          Disney+ é um serviço de assinatura paga, seu conteúdo está sujeito à
          disponibilidade. O serviço Disney+ é comercializado pela Disney DTC
          LATAM, Inc., 2400 W Alameda AVE., Burbank CA 91521.
        </p>
        <p className="footer-text">©Disney. Todos os direitos reservados.</p>
      </footer>
    );
  }
  

  