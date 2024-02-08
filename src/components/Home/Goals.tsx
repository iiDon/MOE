import H1 from "../ui/H1";
import P from "../ui/P";
import { Separator } from "../ui/separator";
import Goal, { GoalProps } from "./Goal";

const Goals = () => {
  const GOLAS: GoalProps[] = [
    {
      src: "goals/g1.jpg",
      url: "/goal/1",
    },
    {
      src: "goals/g2.jpg",
      url: "/goal/2",
    },
    {
      src: "goals/g3.jpg",
      url: "/goal/3",
    },
    {
      src: "goals/g4.jpg",
      url: "/goal/4",
    },
    {
      src: "goals/g5.jpg",
      url: "/goal/5",
    },
    {
      src: "goals/g6.jpg",
      url: "/goal/6",
    },
    {
      src: "goals/g7.jpg",
      url: "/goal/7",
    },
    {
      src: "goals/g8.jpg",
      url: "/goal/8",
    },
    {
      src: "goals/g9.jpg",
      url: "/goal/9",
    },
    {
      src: "goals/g10.jpg",
      url: "/goal/10",
    },
    {
      src: "goals/g11.jpg",
      url: "/goal/11",
    },
    {
      src: "goals/g12.jpg",
      url: "/goal/12",
    },
    {
      src: "goals/g13.jpg",
      url: "/goal/13",
    },
    {
      src: "goals/g14.jpg",
      url: "/goal/14",
    },
    {
      src: "goals/g15.jpg",
      url: "/goal/15",
    },
    {
      src: "goals/g16.jpg",
      url: "/goal/16",
    },
    {
      src: "goals/g17.jpg",
      url: "/goal/17",
    },
  ];
  return (
    <div className="w-full  flex-col flex gap-y-6  p-4">
      <H1 title="أهداف التنمية المستدامة" />
      <Separator className="h-2 rounded-full bg-primary" />
      <H1 color="text-primary" title="سبعة عشر هدفاً لإنقاذ العالم" />

      <P p="أهداف التنمية المستدامة هي خطة لتحقيق مستقبل أفضل وأكثر استدامة للجميع. وتتصدى هذه الأهداف للتحديات العالمية التي نواجهها، بما في ذلك التحديات المتعلقة بالفقر وعدم المساواة والمناخ وتدهور البيئة والازدهار والسلام والعدالة. وفضلا عن ترابط الأهداف، وللتأكد من ألا يتخلف أحد عن الركب، فمن المهم تحقيق كل هدف من الأهداف بحلول عام 2030." />
      <Separator className=" rounded-full bg-primary" />
      <div className="flex gap-4 justify-center  flex-wrap w-full">
        {GOLAS.map((goal, index) => (
          <Goal src={goal.src} key={index} url={goal.url} />
        ))}
      </div>
    </div>
  );
};

export default Goals;
