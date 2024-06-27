
export function Login() {
  const tmdbAuthUrl = 'https://www.themoviedb.org/authenticate/';
  const VITE_API_TOKEN = import.meta.env.VITE_API_TOKEN;

  const handleLogin = async () => {
    try {
      // Obter o request token
      const response = await fetch('https://api.themoviedb.org/3/authentication/token/new', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${VITE_API_TOKEN}`,
          'Content-Type': 'application/json;charset=utf-8',
        },
      });

      const data = await response.json();
      const requestToken = data.request_token;

      // Redirecionar para a página de autenticação
      window.location.href = `${tmdbAuthUrl}${requestToken}?redirect_to=http://localhost:5173/`;
    } catch (error) {
      console.error('Erro ao obter request token:', error);
    }
  };

  return (
    <div className="w-full h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('/src/assets/Images/image-login.png')" }}>
      <div className="w-[398px] h-[448px] bg-[rgba(53,56,67,0.79)] rounded-[20px] flex flex-col items-center p-6 sm:w-[783px]">
        <h3 className="text-white font-bold text-[44px] mb-6 mt-8 font-work tracking-wide">Compass Video</h3>
        <p className="text-white mb-6 text-center font-lato font-bold flex flex-col text-2xl tracking-wide">
          Acesse sua conta para ver<span>nossos títulos</span>
        </p>
        <button onClick={handleLogin} className="bg-[#037aeb] text-white px-6 rounded w-[334px] h-12 font-lato font-bold mb-6 gap-[12px] tracking-widest sm:w-[374px]">
          INICIAR SESSÃO COM TMDB
        </button>
        <p className='font-lato text-[14px] text-white font-medium'>
          <span className='text-[rgba(255,255,255,0.6)] font-normal tracking-wide'>Não tem conta?</span> Acesse como convidado
        </p>
        <div className="flex w-[330px] h-[112.95px]">
          <img src="/src/assets/Images/compass.uol_Negativo 1.png" alt="Compass Logo" />
        </div>            
      </div>
    </div>
  );
}


