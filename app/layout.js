import "./globals.css";
import {Link} from "@/src/common/Link";
import {Roboto} from 'next/font/google'
import classNames from "classnames";
import {Button, ButtonSizes} from "@/src/common/Button";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Header} from "@/src/layout/Header";

const montserrat = Roboto({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});


export const metadata = {
  title: "Suluskin - Магазин",
  description: "Магазин косметики Suluskin",
};

export default function RootLayout({children}) {
  return (
    <html lang="ru">
    <body
      className={classNames("flex flex-col min-h-screen", montserrat.className)}
    >
    <Header/>
    <main className={"flex-grow mt-24"}>
      {children}
    </main>
    <footer className="bg-[#333] text-white py-8">
      <div
        className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Контакты</h3>
          <p className="text-sm mb-3">Телефон: +7 708 839 57 07</p>
          <p className="text-sm mb-3">Email: kcyj07017@gmail.com</p>
          <p className="text-sm">Адрес: ул. Сейфуллина, 412, Алматы</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Следите за нами</h3>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/suluskin/" className="text-[#ADBFAD] hover:text-white">
              Instagram
            </a>
            <a href="https://wa.me/77088395707" className="text-[#ADBFAD] hover:text-white">
              WhatsApp
            </a>
            <a href="https://wa.me" className="text-[#ADBFAD] hover:text-white">
              TikTok
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8">
        <p>© 2024 Косметический магазин. Все права защищены.</p>
      </div>
    </footer>
    <ToastContainer
      position={"top-center"}
    />
    </body>
    </html>
  );
}
