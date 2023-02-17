import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <header
      className="fixed block md:flex justify-between bg-white text-white z-40 w-screen border-b-2 border-neutral-200		
    "
    >
      <h1 className="text-blue-600 text-4xl font-normal font-oleo-script p-1 m-auto text-center">
        Sologram
      </h1>
      <div className="block md:flex md:space-between md:justify-end p-2 text-center font-noto-sans">
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 text-[11px] font-semibold hover:text-white p-2 border border-blue-500 hover:border-transparent rounded mr-2"
          onClick={changeLanguage}
          value="en"
        >
          English
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white text-[11px] font-bold p-2 border border-blue-700 rounded"
          onClick={changeLanguage}
          value="es"
        >
          Español
        </button>
      </div>
    </header>
  );
};

export default Header;
