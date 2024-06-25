import React from 'react'

const Login: React.FC = () => {
    return (
        <div className="w-[640px] h-[982px] bg-center flex justify-center items-center md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px]" style={{ backgroundImage: "url('/src/assets/Images/image-login.png')" }}>
          <div className="w-[398px] h-[448px] bg-[rgba(53,56,67,0.79)] rounded-[20px] flex flex-col items-center p-6 sm:w-[783px]">
            <h3 className="text-white font-bold text-[44px] mb-6 mt-8 font-work tracking-wide">Compass Video</h3>
            <p className="text-white mb-6 text-center font-lato font-bold flex flex-col text-2xl tracking-wide">Acesse sua conta para ver<span>nossos títulos</span></p>
            <button className="bg-[#037aeb] text-white px-6 rounded w-[334px] h-12 font-lato font-bold mb-6 gap-[12px] tracking-widest sm:w-[374px]">INICIAR SESSÃO COM TMDB</button>
            <p className='font-lato text-[14px] text-white font-medium'><span className='text-[rgba(255,255,255,0.6)] font-normal tracking-wide'>Não tem conta?</span> Acesse como convidado</p>
            <div className="flex w-[330px] h-[112.95px]">
                <img src="/src/assets/Images/compass.uol_Negativo 1.png" alt="" />
            </div>            
          </div>
        </div>
      );
    }

export default Login