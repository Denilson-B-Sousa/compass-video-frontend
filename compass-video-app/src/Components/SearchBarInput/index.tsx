import { MagnifyingGlass, X } from "@phosphor-icons/react";
import React, { useState, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  onCloseSearchBar: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function SearchBarInput({ onCloseSearchBar }: SearchBarProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [selectValue, setSelectValue] = useState<string>("Tudo");
  const navigator = useNavigate();

  const handleSearch = () => {
    const searchValue:string = `${inputValue}!${selectValue}`

   
    navigator(`/search/${searchValue}`);
  };

  const handleSearchByKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      handleSearch()
    }
  }

  return (
    <form className="bg-neutral-700 p-3 flex gap-4 rounded items-center" onSubmit={handleSearch}>
      <div>
        <input
          type="text"
          placeholder="Filme, série ou celebridade"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="bg-transparent text-white mr-3 w-full outline-none focus:outline-[#FFFFFF1F] rounded"
          onKeyDown={handleSearchByKey}
          required
        />
      </div>
      <div>
        <select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          className="bg-transparent text-white rounded p-0.3 border-2 border-[#FFFFFF1F]"
        >
          <option value="Tudo" selected className="text-black">
            Tudo
          </option>
          <option value="Filmes" className="text-black">
            Filmes
          </option>
          <option value="Colecoes" className="text-black">
            Coleções
          </option>
          <option value="Series" className="text-black">
            Séries
          </option>
          <option value="Celebridades" className="text-black">
            Celebridades
          </option>
        </select>
      </div>
      <div className="flex gap-3">
        <button type="submit">
        <MagnifyingGlass
          size={20}
          weight="bold"
          className="text-white cursor-pointer"
        />
        </button>
        <button onClick={onCloseSearchBar}>
          <X
            size={20}
            weight="bold"
            className="text-white cursor-pointer"
          />
        </button>
      </div>
    </form>
  );
}
