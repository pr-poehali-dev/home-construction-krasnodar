import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Одноэтажный дом 120 м²",
      location: "Краснодар",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Двухэтажный дом 200 м²",
      location: "Сочи",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Коттедж с мансардой 180 м²",
      location: "Анапа",
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Дом с террасой 150 м²",
      location: "Геленджик",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Современный дом 250 м²",
      location: "Новороссийск",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Семейный дом 190 м²",
      location: "Армавир",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=300&fit=crop",
    },
  ];

  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши работы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Каждый проект — это история семьи. Посмотрите на дома, которые мы
            построили с любовью и профессионализмом.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            Посмотреть все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
