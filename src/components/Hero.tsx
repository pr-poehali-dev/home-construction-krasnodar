import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Строительство домов
          <br />
          <span className="text-blue-500">под ключ</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Возводим качественные одноэтажные и двухэтажные дома в Краснодарском
          крае. Полный цикл работ от проекта до сдачи.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
            Рассчитать стоимость
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium">
            Посмотреть проекты
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">150+</div>
            <div className="text-gray-600">Построенных домов</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">12</div>
            <div className="text-gray-600">Лет опыта</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
            <div className="text-gray-600">Гарантия качества</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
