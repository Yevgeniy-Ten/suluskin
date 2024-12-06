import {Button} from "@/src/common/Button";

const Backet = () => {
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

          <div className="flex gap-3 items-center mt-6">
            <h4 className="text-lg font-semibold text-[#333]">Общая сумма:</h4>
            <span className="text-xl font-bold text-[#4CAF50]">₸17300</span>
          </div>

          <div className="mt-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="text"
                placeholder="Введите номер телефона"
                className="w-full sm:w-2/3 px-4 py-2 border border-[#ddd] rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              />
              <Button>
                Заказать
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Backet;
