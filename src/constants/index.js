import {
  AiOutlineBarChart,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineProfile,
} from "react-icons/ai";
import { BsBookmarkCheck, BsCardList } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";

const user = [
  { id: 1, title: "داشبورد", href: "/dashboard", icon: AiOutlineHome },
  {
    id: 2,
    title: "جلسات برگزار شده",
    href: "/dashboard/sessions",
    icon: AiOutlineBarChart,
  },
  {
    id: 3,
    title: "منتورهای نشان شده",
    href: "/dashboard/favourite-mentors",
    icon: BsBookmarkCheck,
  },
  {
    id: 4,
    title: "پروفایل",
    href: "/dashboard/profile",
    icon: AiOutlineProfile,
  },
  {
    id: 5,
    title: "خروج",
    href: "/dashboard/logout",
    icon: AiOutlineClose,
  },
];
const admin = [
  { id: 1, title: "داشبورد", href: "/dashboard", icon: AiOutlineHome },
  {
    id: 2,
    title: "جلسات برگزار شده",
    href: "/dashboard/sessions",
    icon: AiOutlineBarChart,
  },
  {
    id: 3,
    title: "منتورها",
    href: "/dashboard/mentors",
    icon: BsCardList,
  },
  {
    id: 4,
    title: "کاربران",
    href: "/dashboard/users",
    icon: FiUsers,
  },
  { id: 5, title: "پروفایل", href: "/profile", icon: AiOutlineProfile },
  {
    id: 6,
    title: "خروج",
    href: "/logout",
    icon: AiOutlineClose,
  },
];
const mentor = [
  { id: 1, title: "داشبورد", href: "/dashboard", icon: AiOutlineHome },
  {
    id: 2,
    title: "جلسات برگزار شده",
    href: "/dashboard/sessions",
    icon: AiOutlineBarChart,
  },

  {
    id: 3,
    title: "پروفایل",
    href: "/dashboard/profile",
    icon: AiOutlineProfile,
  },
  {
    id: 4,
    title: "خروج",
    href: "/dashboard/logout",
    icon: AiOutlineClose,
  },
];
export const DASHBOARD_MENU = {
  USER: user,
  ADMIN: admin,
  MENTOR: mentor,
};
