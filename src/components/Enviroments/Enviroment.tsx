import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  title: string;
  img: string;
  date: string;
  content: string;
};
const Enviroment = ({ title, date, img, content }: Props) => {
  return (
    <div className="border p-4 rounded w-56 shadow-md">
      <img src={img} alt="" className="w-48 h-24 rounded-md" />
      <div className="flex flex-col items-center gap-4 p-4">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p>{date}</p>
        </div>
        <AlertDialog>
          <Button asChild className="w-full" size={"lg"}>
            <AlertDialogTrigger>اعرف المزيد</AlertDialogTrigger>
          </Button>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {title} - {date}
              </AlertDialogTitle>
              <AlertDialogDescription>{content}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>إغلاق</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Enviroment;
