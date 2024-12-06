const Page = () => {
  return (
    <main className="container mx-auto px-6 py-12">
      <section className="mb-6">
        <h1 className="text-3xl font-bold text-center mb-4">Информация о доставке</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto">
          Мы предлагаем удобные и надежные способы доставки, чтобы ваши заказы доходили быстро и
          безопасно.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Способы доставки</h2>
        <ul className="space-y-6">
          <li className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">Курьерская доставка</h3>
            <p className="text-gray-700 leading-relaxed">
              Мы доставляем заказы прямо до вашей двери. Сроки доставки зависят от вашего
              местоположения и составляют от 1 до 5 рабочих дней.
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Стоимость:</span> Бесплатно для заказов от 10,000
              тенге. Для заказов ниже этой суммы — 1,000 тенге.
            </p>
          </li>
          <li className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">Самовывоз</h3>
            <p className="text-gray-700 leading-relaxed">
              Вы можете забрать свой заказ самостоятельно из нашего магазина. Мы отправим вам
              уведомление, когда заказ будет готов.
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Адрес:</span> г. Алматы, ул. Примерная, 123.
            </p>
          </li>
          <li className="p-6 bg-gray-100 rounded-lg shadow-sm">
            <h3 className="text-lg font-bold mb-2">Доставка в регионы</h3>
            <p className="text-gray-700 leading-relaxed">
              Мы отправляем заказы по всей территории Казахстана с помощью партнерских служб
              доставки. Сроки доставки зависят от удаленности региона и составляют от 3 до 10
              рабочих дней.
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Стоимость:</span> Рассчитывается индивидуально и
              зависит от веса и объема посылки.
            </p>
          </li>
        </ul>
      </section>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Условия доставки</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Все заказы обрабатываются в течение 1-2 рабочих дней. После отправки вы получите
          уведомление с трекинг-номером для отслеживания посылки.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Пожалуйста, убедитесь, что ваш адрес указан правильно, чтобы избежать задержек или
          возвратов.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Если у вас есть вопросы по доставке, свяжитесь с нами по телефону <span
          className="font-semibold">+7 (123) 456-78-90</span> или напишите на email <span
          className="font-semibold">support@example.com</span>.
        </p>
      </section>
    </main>
  );
};

export default Page;
