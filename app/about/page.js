export default function About() {
  return <main className="container mx-auto px-6 py-12">
    <section className="mb-12">
      <p className="text-center text-gray-700 max-w-2xl text-2xl mx-auto">
        Добро пожаловать в наш магазин! Мы рады предложить вам качественную косметику, заботясь о
        вашей красоте и здоровье.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-center mb-6">Наши основатели</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Основатель 1"
            className="rounded-full mx-auto mb-4 w-36 h-36 object-cover"
          />
          <h3 className="text-lg font-semibold">Анна Иванова</h3>
          <p className="text-gray-600 text-sm">Генеральный директор</p>
        </div>
        <div className="text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Основатель 2"
            className="rounded-full mx-auto mb-4 w-36 h-36 object-cover"
          />
          <h3 className="text-lg font-semibold">Мария Петрова</h3>
          <p className="text-gray-600 text-sm">Креативный директор</p>
        </div>
      </div>
    </section>

    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">О магазине</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Наш косметический магазин был создан с одной простой целью — предоставить нашим клиентам
        качественную косметику, которая подчеркивает естественную красоту. Мы верим, что каждая
        деталь имеет значение, поэтому тщательно отбираем продукцию и сотрудников, чтобы вы всегда
        могли быть уверены в высоком уровне сервиса.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Наша команда состоит из профессионалов, которые работают с душой. Мы создаем не просто
        магазин, а пространство, где каждый клиент чувствует себя особенным.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Спасибо, что выбираете нас! Мы обещаем продолжать радовать вас и улучшать наш сервис.
      </p>
    </section>
  </main>
}
