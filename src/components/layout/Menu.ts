import dynamicIconImports from "lucide-react/dynamicIconImports";

type MenuItem = {
  title: string;
  url: string;
  icon: keyof typeof dynamicIconImports;
};

export const MENU: MenuItem[] = [
  {
    title: "الرئيسية",
    url: "/",
    icon: "home",
  },
  {
    title: "الأهداف",
    url: "/#goals",
    icon: "goal",
  },
  {
    title: "النصائح",
    url: "/initiatives",
    icon: "message-square",
  },
  {
    title: "مناسبات بيئية",
    url: "/events",
    icon: "calendar-heart",
  },
];
