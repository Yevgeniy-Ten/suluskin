'use client';
import {Button, ButtonSizes, ButtonVariants} from "@/src/common/Button";
import classNames from "classnames";
import {IMaskInput} from "react-imask";
import {useRef} from "react";
import {service} from "@/src/api/api";
import {toast} from "react-toastify";
import {useBacket} from "@/src/store/backet";
import {useRouter} from "next/navigation";

const Backet = () => {
  const inputRef = useRef(null)
  const ref = useRef(null);
  const {products, removeProduct, addProduct, clearBacket} = useBacket()
  const totalSum = products.reduce((acc, el) => {
    el.price = parseInt(el.price)
    return acc + el.price * el.count
  }, 0)
  const router = useRouter()
  const send = () => {
    try {
      const value = inputRef.current.value
      if (!value || value.length < 18) {
        toast.error('Введите номер телефона')
        return
      }
      service.sendToTg(`Новый заказ на сумму: 30000 тг\n\nТелефон: ${inputRef.current.value}\n \nТовары: ${products.map(p => `${p.name} - ${p.price}.\nКоличество: 3\n---------------------------`).join('\n')}
    `)
      toast.success('Заказ создан. Ожидайте звонка')
      clearBacket()
      router.push('/')

    } catch (e) {
      toast.error(<div>Ошибка отправки заказа: Напишите нам в WhatsApp <a
        className={"underline text-red-600"} href="https://wa.me/77088395707">77088395707</a>
      </div>)
    }
  }
  return (
    <section className="py-12 bg-[#f8f8f8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-[#333] mb-6">Корзина</h2>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
          {
            products.map(el => {
              return <div
                key={el.id}
                className="divide-y divide-[#ddd]">
                <div
                  className="flex items-center flex-wrap gap-4 border-b justify-end sm:justify-between py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={el.img}
                      alt="Bb Lab коллаген с пробиотиками"
                      className="w-20 h-20 object-cover rounded-lg"/>
                    <div>
                      <h3 className="text-lg font-semibold text-[#333]">{el.name}</h3>
                      <span className="text-sm text-[#777]">{el.price}₸</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => removeProduct(el.id)}
                      size={ButtonSizes.xs} variant={ButtonVariants.gray}
                      className={"w-9"}>-</Button>
                    <span className="text-lg font-semibold text-[#333]">{el.count}</span>
                    <Button
                      onClick={() => addProduct(el)}
                      size={ButtonSizes.xs} variant={ButtonVariants.gray}
                      className={"w-9"}>+</Button>
                  </div>
                </div>
              </div>
            })
          }

          <div className={"flex flex-col items-end"}>
            <div className="flex gap-3 items-center mt-6">
              <h4 className="text-lg font-semibold text-[#333]">Общая сумма:</h4>
              <span className="text-xl font-bold text-green-600">{totalSum}₸</span>
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
