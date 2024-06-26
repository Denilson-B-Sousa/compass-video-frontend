import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { useParams } from "react-router-dom";

export function Search() {
  const { query } = useParams();


  return (
    <>
    <Header />
    <div className="bg-neutral-600 p-8 h-screen">
      <h2 className="font-worksans text-applications-medium-emphasis text-lg mb-3">
        Resultados para sua busca:
        <span className="text-white"> "{query}"</span>
      </h2>
      <div>Card</div>
      <p className="font-worksans text-applications-medium-emphasis">
        Sem resultados
      </p>
    </div>
    <Footer />
    </>
  );
}
