'use client';
import {Button, ButtonSizes} from "@/src/common/Button";
import classNames from "classnames";
import {IMaskInput} from "react-imask";
import {useRef} from "react";
import {service} from "@/src/api/api";
import {toast} from "react-toastify";

const Backet = () => {
  const inputRef = useRef(null)
  const ref = useRef(null);
  const products = [{
    id: '8',
    name: 'Bb Lab коллаген с пробиотиками, 50 стиков',
    weight: '',
    price: '5800.0000',
    text: '<strong>Почему коллагеновые пробиотики BB LAB? </strong>Специальная комбинация коллагена и пробиотиков 7 различных штаммов молочнокислых бактерий Улучшает влажность и эластичность кожи. Вкусный апельсиновый вкус для приятного употребления Мы рекомендуем наши коллагеновые пробиотики BB LAB, если вы:<br />1. Хотите улучшить здоровье своей кожи и кишечника;<br />2. Хотите одновременно употреблять коллаген и пробиотики;<br />3. Хотите улучшить влажность и эластичность кожи;<br />4. Ищите простой способ оставаться здоровым;<br />5. Ищите продукт с коллагеном, который имеет приятный вкус. <br /><br />Дозировка коллагена 1700 мг и 7 видов лакто и бифидобактериев. <br /><br /><strong>Состав:</strong><br />Пептиды рыбьего коллагена, безводная декстроза, изомальт, порошок апельсинового сока, лимонная кислота, микрокристаллическая целлюлоза, смесь лактозы, ксилит, D-сорбит, искусственный ароматизатор (порошок со вкусом апельсина), стеарат магния, витамин С, гиалуроновая кислота, гидролизат эластина, ферментативно модифицированный Стевия, Lactobacillus acidophilus, Lactobacillus plantarum, Bifidobacterium bifidum, Bifidobacterium animalis subsp.&nbsp;lactis, Bifidobacterium breve,&nbsp;Lactobacillus casei,&nbsp;Lactobacillus rhamnosus.<br /><br /><strong>Способ применения:</strong><br />Принимать по 1 стику в день после ужина, перед сном разбавив в воде/засыпать в рот и запить водой. <br /><br />Хранить в сухом, недоступном для детей месте.<br /><br /><strong>В одной упаковке: 50 шт.</strong>',
    img: 'https://static.tildacdn.com/stor3036-6163-4631-a637-653330376438/58727512.jpg',
    category_id: '2',
    enabled: false,
    category: {id: '2', name: 'Коллагены', enabled: false}
  },
    {
      id: '9',
      name: 'Lemona red Питьевой морской коллаген порошок 120 мл, 60 стиков',
      weight: '',
      price: '5700.0000',
      text: 'Морской коллаген в пакетиках от Gyeongnam Pharmaceutical Lemona Gyeol Collagen – это лучший источник коллагена для вашей кожи, зубов, волос, ногтей и суставов. Коллаген пептидный с витамином С можно использовать как средство для похудения и снижения веса. Кроме этого, морской коллаген порошок с гиалуроновой кислотой помогает в борьбе против морщин, способствует укреплению костей, улучшению подвижности суставов, увлажнению кожи. Добавка имеет приятный вкус черники. Коллаген содержит 18 аминокислот, и 8 из 9 незаменимых аминокислот. Коллагеновый порошок станет прекрасной альтернативой препаратам и лекарствам в капсулах (капсульный коллаген). Корейский коллаген питьевой в стиках занимает мало места в дамской сумочке, поэтому он всегда будет у вас под рукой. Здоровье и красота в каждом саше!<br /><br />Низкомолекулярный коллаген и витамин С «Жевательный коллаген» содержит 120 мг витамина С (120% дневной пищевой ценности), который является основным веществом для синтеза коллагена, поэтому одна капсула в день может обеспечить необходимое количество витамина С.<br /><br /><strong>Состав:</strong><br />Глюкоза кристаллическая безводная, пептид рыбного коллагена (производство Италия), порошок агавы [порошок агавы (производство Мексика), мальтодекстрин], витамин С, порошок лимонного сока [декстрин, концентрат лимона (производство Израиль)], ксилит, смешанный препарат ( декстрин, лактоза, натуральный ароматизатор, синтетический ароматизатор, пектин), диоксид кремния, порошок геля алоэ вера (США), стеарат магния, смешанный витаминно-минеральный порошок (двухосновный фосфат кальция, оксид магния, витамин С, порошкообразный смешанный препарат витамина B12 (мальтодекстрин, лимонная кислота) дикий тринатрий, лимонная кислота, витамин В12), амид никотиновой кислоты, восстановленное железо, оксид цинка, порошкообразный смешанный препарат витамина D3 (гуммиарабик, сахароза, кукурузный крахмал, жирные кислоты средней цепи, диоксид кремния, витамин D3, витамин Е). ), гидрохлорид витамина B6, гидрохлорид витамина B1, витамин B2, порошкообразная смесь витаминов А (порошок виноградного сахара, гуммиарабик, кукурузный крахмал, ацетат витамина А, витамин Е), порошкообразная смесь витамина Е (dl-a-токоферилацетат, модифицированный крахмал, порошок глюкозного сиропа), диоксид кремния), мальтодекстрин, фолиевая кислота], гиалуроновая кислота, сукралоза (в качестве подсластителя), содержание молока.<br /><br /><strong>Способ применения:</strong><br />Принимайте по 1 пакетику за раз 1 раз в день.<br /><br />Хранить в сухом, недоступном для детей месте.<br /><br /><strong>В одной упаковке: 60 шт.</strong>',
      img: 'https://static.tildacdn.com/stor3533-6462-4437-a635-313037616534/83032812.jpg',
      category_id: '2',
      enabled: false,
      category: {id: '2', name: 'Коллагены', enabled: false}
    },
    {
      id: '10',
      name: 'BB Lab коллаген со вкусом граната, желе 30 стиков',
      weight: '',
      price: '15000.0000',
      text: 'BB Lab Pomegranate Collagen - это коллагеновое желе, обогащенное 1000 мг низкомолекулярного рыбьего коллагена на каждый стик. Низкомолекулярный рыбий коллаген поддерживает упругость и эластичность кожи, сохраняя ее молодость. Улучшает состояние сухой кожи, расширенных пор, сухих линий и морщин. Каждая упаковка содержит 18,6 г концентрата граната, который нейтрализует свободные радикалы в организме и сохраняет кожу здоровой и молодой. Гиалуроновая кислота притягивает влагу к коже, сохраняя ее защищенной и увлажненной. Насыщенный вкус граната в форме желейного стика идеально подходит для тех, кто не любит порошки, и им можно наслаждаться в любое время дня.<br /><br /><strong>Один стик содержит:</strong><br />18 600 мг гранатового концентрата;<br />Низкомолекулярный рыбий коллаген 1000 мг.<br /><br /><strong>Дополнительные ингредиенты: </strong>гиалуроновая кислота, эластин, молочный церамид, клюква, гибискус.<br /><br /><strong>Способ применения:</strong><br />По 1 стику перед едой.<br /><br />Хранить в сухом, недоступном для детей месте.<br /><br /><strong>В одной упаковке: 30 шт.</strong>',
      img: 'https://static.tildacdn.com/stor3438-3364-4466-b366-656363646163/81926278.jpg',
      category_id: '2',
      enabled: false,
      category: {id: '2', name: 'Коллагены', enabled: false}
    }]
  const send = () => {
    try {
      const value = inputRef.current.value
      if (!value || value.length < 18) {
        toast.error('Введите номер телефона')
        return
      }
      service.sendToTg(`Новый заказ на сумму: 30000 тг\n\nТелефон: ${inputRef.current.value}\n \nТовары: ${products.map(p => `${p.name} - ${p.price}.\nКоличество: 3\n---------------------------`).join('\n')}
    `)
    } catch (e) {
      toast.error(<div>Ошибка отправки заказа: Напишите нам в WhatsApp <a className={"underline text-red-600"} href="https://wa.me/77088395707">77088395707</a>
      </div>)
    }
  }
  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-[#333] mb-6">Корзина</h2>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <div className="divide-y divide-[#ddd]">
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://static.tildacdn.com/stor3036-6163-4631-a637-653330376438/58727512.jpg"
                  alt="Bb Lab коллаген с пробиотиками"
                  className="w-16 h-16 object-cover rounded-lg"/>
                <div>
                  <h3 className="text-lg font-semibold text-[#333]">Bb Lab коллаген с пробиотиками,
                    50 стиков</h3>
                  <span className="text-sm text-[#777]">₸5800</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-[#ddd] rounded-md hover:bg-[#ccc]">-</button>
                <span className="text-lg font-semibold text-[#333]">2</span>
                <button className="px-3 py-1 bg-[#ddd] rounded-md hover:bg-[#ccc]">+</button>
              </div>
            </div>

            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://static.tildacdn.com/stor3533-6462-4437-a635-313037616534/83032812.jpg"
                  alt="Lemona red коллаген" className="w-16 h-16 object-cover rounded-lg"/>
                <div>
                  <h3 className="text-lg font-semibold text-[#333]">Lemona red Питьевой морской
                    коллаген, 60 стиков</h3>
                  <span className="text-sm text-[#777]">₸5700</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 bg-[#ddd] rounded-md hover:bg-[#ccc]">-</button>
                <span className="text-lg font-semibold text-[#333]">1</span>
                <button className="px-3 py-1 bg-[#ddd] rounded-md hover:bg-[#ccc]">+</button>
              </div>
            </div>
          </div>

          <div className={"flex flex-col items-end"}>
            <div className="flex gap-3 items-center mt-6">
              <h4 className="text-lg font-semibold text-[#333]">Общая сумма:</h4>
              <span className="text-xl font-bold text-green-600">₸17300</span>
            </div>

            <div className="mt-7">
              <div className="flex flex-col sm:flex-row items-end gap-4">
                <label className={"flex flex-col"}>
                <span className="text-lg font-semibold text-[#333] mb-2">Номер телефона
                  <small className="text-[#777] ml-1">
                    *для связи с вами
                  </small>
                </span>
                  <IMaskInput
                    mask="+7 (000) 000-00-00"
                    ref={ref}
                    inputRef={inputRef}
                    placeholder="Введите номер телефона"
                    className={classNames("w-72 border border-[#ddd] rounded-md  focus:outline-none focus:ring-2 focus:ring-green-100 !px-3", ButtonSizes.default)}
                  />
                </label>
                <Button onClick={send}>
                  Заказать
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Backet;
