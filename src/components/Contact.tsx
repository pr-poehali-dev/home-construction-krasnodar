import React from "react";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Свяжитесь с нами любым удобным способом.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Свяжитесь с нами
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <Icon
                  name="Phone"
                  size={20}
                  className="text-blue-500 mr-4 mt-1"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Телефон</h4>
                  <p className="text-gray-600">+7 (861) 123-45-67</p>
                  <p className="text-gray-600">+7 (918) 987-65-43</p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="Mail"
                  size={20}
                  className="text-blue-500 mr-4 mt-1"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">info@stroydom-krd.ru</p>
                </div>
              </div>

              <div className="flex items-start">
                <Icon
                  name="MapPin"
                  size={20}
                  className="text-blue-500 mr-4 mt-1"
                />
                <div>
                  <h4 className="font-medium text-gray-900">Офис</h4>
                  <p className="text-gray-600">
                    г. Краснодар, ул. Красная, 123
                  </p>
                  <p className="text-gray-500 text-sm">
                    Пн-Пт: 9:00-18:00, Сб: 10:00-15:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Быстрая консультация
            </h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Получить консультацию
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
