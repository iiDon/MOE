import { useParams } from "react-router-dom";
import { GOLAS } from "./components/Goals/Goals";
import { Separator } from "./components/ui/separator";
import { cn } from "./lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Goal = () => {
  const { goalId } = useParams<{ goalId: string }>();
  console.log(goalId);
  const goal = GOLAS.find((goal) => String(goal.id) === goalId);
  return (
    <div>
      <div className="w-screen">
        <img src={`/${goal?.bg}`} alt="" className="object-cover" />
      </div>
      <div className="p-8 flex flex-col gap-y-4">
        <h4
          className={cn(
            "text-xl text-center bg-primary text-primary-foreground p-4 rounded-md shadow-md font-bold "
          )}
        >
          {goal?.title}
        </h4>
        <p className="text-primary font-bold text-xl">مقاصد الهدف:</p>
        <Separator className="h-2 rounded-full bg-primary" />
        <div className="flex flex-col gap-8">
          <Accordion type="single" collapsible>
            {goal?.description.map((desc, index) => (
              <AccordionItem key={index} value={String(index + 1)}>
                <AccordionTrigger>
                  <h1 className="text-primary font-bold  truncate text-nowrap ">
                    {desc.content.length > 25
                      ? desc.content.slice(0, 25) + "..."
                      : desc.content + "..."}
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-8 items-start ">
                    {/* <img
                      src={`/${desc.src}`}
                      alt=""
                      className="w-24 h-24 rounded-md"
                    /> */}
                    <p className="text-justify">{desc.content}</p>
                    <Separator className=" rounded-full bg-primary" />
                  </div>{" "}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Goal;
