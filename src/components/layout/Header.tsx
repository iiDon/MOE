import { Link } from "react-router-dom";
import Icon from "../Icon";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "../ui/sheet";
import { MENU } from "./Menu";
const Header = () => {
  return (
    <div className="flex z-50 top-0 sticky h-[10vh] items-center justify-around shadow-lg bg-primary p-4">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src="sdg.jpg" alt="" className="w-14 h-12" />
        </Link>

        <div>
          <h4 className="text-lg text-primary-foreground font-bold">
            التنمية المستدامة
          </h4>
          <h4 className="text-lg text-primary-foreground font-bold">
            Sustainable Development
          </h4>
        </div>
      </div>
      <Sheet>
        <SheetTrigger>
          <Icon name="menu" color="white" />
        </SheetTrigger>
        <SheetContent dir="rtl" side={"right"}>
          <SheetHeader>
            <SheetClose>
              <div className="flex mb-8 items-center gap-4">
                <Link to="/">
                  <img src="sdg.jpg" alt="" className="w-12 h-10" />
                </Link>

                <div>
                  <h4 className=" text-primary text-xs font-bold">
                    التنمية المستدامة
                  </h4>
                  <h4 className=" text-primary text-xs font-bold">
                    Sustainable Development
                  </h4>
                </div>
              </div>
            </SheetClose>
            {MENU.map((item) => (
              <SheetClose key={item.title}>
                <a
                  href={item.url}
                  className="bg-primary text-primary-foreground p-4 rounded  font-bold flex gap-4 items-center"
                >
                  <Icon name={item.icon} />
                  <h1 className="">{item.title}</h1>
                </a>
              </SheetClose>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
