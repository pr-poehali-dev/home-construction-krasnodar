import React from "react";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Home" size={24} className="text-blue-400 mr-2" />
              <span className="text-xl font-bold">СтройДом</span>
            </div>
            <p className="text-gray-400 mb-4">
              Строим дома вашей мечты в Краснодарском крае. Качество,
              надёжность, индивидуальный подход.
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={16} className="text-blue-400" />
              <span className="text-gray-300">+7 (861) 123-45-67</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Одноэтажные дома</li>
              <li>Двухэтажные дома</li>
              <li>Проектирование</li>
              <li>Ремонт и отделка</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-gray-400">
              <p>г. Краснодар, ул. Красная, 123</p>
              <p>info@stroydom-krd.ru</p>
              <p>Пн-Пт: 9:00-18:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 СтройДом. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
