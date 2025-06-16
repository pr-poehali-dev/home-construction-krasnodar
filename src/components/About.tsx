import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О компании
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Более 12 лет строим качественные дома в Краснодарском крае. Наша
              команда — это опытные специалисты, которые знают все тонкости
              строительства в южном климате.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Icon
                  name="Award"
                  size={20}
                  className="text-blue-500 mr-3 mt-1"
                />
                <div>
                  <h4 className="font-medium text-gray-900">
                    Качество материалов
                  </h4>
                  <p className="text-gray-600">
                    Работаем только с проверенными поставщиками
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="Clock"
                  size={20}
                  className="text-blue-500 mr-3 mt-1"
                />
                <div>
                  <h4 className="font-medium text-gray-900">
                    Соблюдение сроков
                  </h4>
                  <p className="text-gray-600">
                    Строительство в точно оговоренные сроки
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="Shield"
                  size={20}
                  className="text-blue-500 mr-3 mt-1"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Гарантия 10 лет</h4>
                  <p className="text-gray-600">
                    Полная гарантия на все виды работ
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Узнать больше
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop"
              alt="Строительство дома"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
