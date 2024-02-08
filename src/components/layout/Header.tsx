import Icon from "../Icon";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
const Header = () => {
  return (
    <div className="flex h-[10vh] items-center justify-around shadow-lg bg-primary p-4">
      <div className="flex items-center gap-4">
        <img src="sdg.jpg" alt="" className="w-8 h-8" />
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
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Header;
