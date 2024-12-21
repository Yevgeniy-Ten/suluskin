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
            src="/kamilla.png"
            alt="Основатель 1"
            className="rounded-full mx-auto mb-4 w-36 h-36 object-cover"
          />
          <h3 className="text-lg font-semibold">Камилла Рыспекова</h3>
        </div>
        <div className="text-center">
          <img
            src="/lira.png"
            alt="Основатель 2"
            className="rounded-full mx-auto mb-4 w-36 h-36 object-cover"
          />
          <h3 className="text-lg font-semibold">Лира Рахымберлиева</h3>
        </div>
      </div>
    </section>

    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-6">О магазине</h2>
      <p className="text-gray-700 leading-relaxed mb-4">

        Мы начали бизнес с Кореей, основываясь на собственных потребностях и стремлении к качеству.
        Теперь мы хотим поделиться этим с вами, чтобы у каждого была возможность наслаждаться
        действительно оригинальной и высококачественной корейской продукцией.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Каждый продукт, который мы предлагаем, — это результат нашего тщательного отбора и любви к
        корейским стандартам красоты и здоровья. Мы здесь, чтобы сделать ваш уход за собой проще,
        эффективнее и, главное, доступнее.
      </p>  <p className="text-gray-700 leading-relaxed mb-4">
      Наша команда состоит из профессионалов, которые работают с душой. Мы создаем не просто
      магазин, а пространство, где каждый клиент чувствует себя особенным.
    </p>
      <p className="text-gray-700 leading-relaxed">
        Доверьтесь нам, и мы позаботимся о том, чтобы вы получали только лучшее из Кореи!
      </p>
    </section>
  </main>
}
