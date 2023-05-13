import { MdDashboard, MdFormatListBulleted, MdOutlineSettings } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

import type { LiskListType } from "src/types/lisk-list-type";

export const sidelist: LiskListType[] = [
  {
    id: 0,
    title: "Главная",
    icon: MdDashboard,
    link: "/",
  },
  {
    id: 1,
    title: "Мой профиль",
    icon: AiOutlineUser,
    link: "/profile",
  },
  {
    id: 2,
    title: "Мои проекты",
    icon: MdFormatListBulleted,
    link: "/projects",
  },
  {
    id: 4,
    title: "Настройки",
    icon: MdOutlineSettings,
    link: "/settings",
  },
];
