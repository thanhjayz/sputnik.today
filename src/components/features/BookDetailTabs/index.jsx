"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaRegHeart } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Page({ bookId }) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs_container ">
      <div className="bloc_tabs  border-b border-gray-300">
        <button
          onClick={() => toggleTab(1)}
          className={`px-3.5 py-[7px] border border-gray-300 rounded-sm  border-b-0
                    ${
                      toggleState === 1
                        ? "active-tabs shadow-[0_1px_0_#fff] bg-white"
                        : "bg-[#edf1f2]"
                    }`}
        >
          Mô tả
        </button>
        <button
          onClick={() => toggleTab(2)}
          className={`px-3.5 py-[7px] border border-gray-300 rounded-sm  border-b-0
                   ${
                     toggleState === 2
                       ? "active-tabs shadow-[0_1px_0_#fff] bg-white"
                       : "bg-[#edf1f2]"
                   }`}
        >
          Nội dung
        </button>
        <button
          onClick={() => toggleTab(3)}
          className={`px-3.5 py-[7px] border border-gray-300 rounded-sm  border-b-0
                   ${
                     toggleState === 3
                       ? "active-tabs shadow-[0_1px_0_#fff] bg-white"
                       : "bg-[#edf1f2]"
                   }`}
        >
          Thống kê
        </button>
      </div>
      <div className="content-tabs px-2.5 py-3.5 border border-gray-300 border-t-0 rounded-b-sm">
        <div
          className={`${toggleState === 1 ? "active_content block" : "hidden"}`}
        >
          Ты выжил в ловушке, из которой уже сотни лет никто не выбирался. Да,
          ты выжил, но вот многие из собратьев — нет. И даже смерть безумного
          духа не сильно смягчает горечь этой потери и твоей вины. Ты, глава
          Сломанного Клинка, магистр Скрытого Ордена, привёл их в эту ловушку,
          привёл их на эту смерть. Как теперь тебе глядеть в глаза уцелевших,
          как глядеть в глаза советника, старейшин и заместителя? Да и так ли
          мёртв безумный дух, как тебе мечталось в первые мгновения свободы?
          Почему ты знаешь имена слуг и видишь над их головами целые печати?
          Ответ ты знаешь и он тебе не нравится. Пока ты твёрдо знаешь только
          одно — не так много людей, которые могут помочь советом, а значит,
          пришло время раздавать старые долги и собирать новые. График выхода
          глав: «Каждый вторник, в 6:15 по Багдаду» • ТМ «Михаил Игнатов»
          Примечания автора: Имена персонажей --
          https://author.today/work/150511 Техники --
          https://author.today/work/155678 Лор --
          https://author.today/work/129108 Авторская группа в ВК -
          https://vk.com/ignatov_worlds Канал автора в ТГ -
          https://t.me/ignatov_worlds Мерч и бумага -
          https://www.ozon.ru/seller/knizhnye-miry-ignatova-1537280/products
          Действия нет и не будет, текст, как и в предыдущих книгах - сплошные
          размышления о судьбах бытия, Небе и своих ошибках. показать все
        </div>
        <div
          className={`content ${
            toggleState === 2 ? "active_content block" : "hidden"
          }`}
        >
          <div className="text-neutral-500">
            <Link href="#" className="text-base text-[#4582af] hover:underline">
              Chương 1
            </Link>
            <span className="ml-2 text-xs text-gray-400 italic">
              {" "}
              Xuất bản vào ngày 11 tháng 9.
            </span>
          </div>
          <div className="text-neutral-500">
            <Link href="#" className="text-base text-[#4582af] hover:underline">
              Chương 1
            </Link>
            <span className="ml-2 text-xs text-gray-400 italic">
              {" "}
              Xuất bản vào ngày 11 tháng 9.
            </span>
          </div>
          <div className="text-neutral-500">
            <Link href="#" className="text-base text-[#4582af] hover:underline">
              Chương 1
            </Link>
            <span className="ml-2 text-xs text-gray-400 italic"> Hôm qua</span>
          </div>
        </div>
        <div
          className={`content ${
            toggleState === 3 ? "active_content block" : "hidden"
          }`}
        >
          <div className="flex">
            <div className="flex-1">Xuất bản lần đầu</div>
            <div className="flex-[2]">10 Tháng chín lúc 04:25</div>
          </div>
          <div className="flex">
            <div className="flex-1"> <FaRegHeart className="inline-block mr-1" /> Đã thích</div>
            <div className="flex-[2]">5 575</div>
          </div>
          <div className="flex">
            <div className="flex-1"><FaEyeSlash className="inline-block mr-1" /> không hứng thú</div>
            <div className="flex-[2]">36</div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
