import { GOLAS } from "../Goals/Goals";
import H1 from "../ui/H1";
import P from "../ui/P";
import { Separator } from "../ui/separator";
import Goal from "./Goal";

const Goals = () => {
  return (
    <div id="goals" className="w-full  flex-col flex gap-y-6  p-4">
      <H1 title="أهداف التنمية المستدامة" />
      <Separator className="h-2 rounded-full bg-primary" />
      <H1 color="text-primary" title="سبعة عشر هدفاً لإنقاذ العالم" />

      <P p="أهداف التنمية المستدامة هي خطة لتحقيق مستقبل أفضل وأكثر استدامة للجميع. وتتصدى هذه الأهداف للتحديات العالمية التي نواجهها، بما في ذلك التحديات المتعلقة بالفقر وعدم المساواة والمناخ وتدهور البيئة والازدهار والسلام والعدالة. وفضلا عن ترابط الأهداف، وللتأكد من ألا يتخلف أحد عن الركب، فمن المهم تحقيق كل هدف من الأهداف بحلول عام 2030." />
      <Separator className=" rounded-full bg-primary" />
      <div className="flex gap-4 justify-center  flex-wrap w-full">
        {GOLAS.map((goal) => (
          <Goal src={goal.src} key={goal.id} url={goal.url} />
        ))}
      </div>
    </div>
  );
};

export default Goals;
