import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Icon name="Home" size={24} className="text-blue-500 mr-2" />
            <span className="text-xl font-bold text-gray-900">СтройДом</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Главная
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              О нас
            </a>
            <a
              href="#portfolio"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Портфолио
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-500 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center">
            <Icon name="Phone" size={18} className="text-blue-500 mr-2" />
            <span className="text-gray-900 font-medium">
              +7 (861) 123-45-67
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
