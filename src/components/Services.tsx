import React from "react";
import Icon from "@/components/ui/icon";

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Специализируемся на строительстве частных домов под ключ. Полный
            цикл работ от фундамента до чистовой отделки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="Home" size={32} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Одноэтажные дома
            </h3>
            <p className="text-gray-600 mb-6">
              Комфортные одноэтажные дома площадью от 80 до 200 м². Идеальное
              решение для семей, ценящих удобство и функциональность.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Современные планировки
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Энергоэффективность
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Быстрое строительство
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Icon name="Building" size={32} className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Двухэтажные дома
            </h3>
            <p className="text-gray-600 mb-6">
              Просторные двухэтажные дома площадью от 150 до 350 м². Максимум
              пространства на компактном участке.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Большая жилая площадь
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Панорамные окна
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={16} className="text-green-500 mr-2" />
                Терраса и балконы
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
