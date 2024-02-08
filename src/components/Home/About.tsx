import H1 from "../ui/H1";
import P from "../ui/P";
import { Button } from "../ui/button";

const About = () => {
  return (
    <div className="w-full shadow-lg bg-primary flex-col flex gap-y-6 text-primary-foreground p-4">
      <H1 title="ما هي التنمية المستدامة؟" />
      <P p="التنمية المستدامة هو مصطلح اقتصادي اجتماعي أممي، رسمت به هيئة الأمم المتحدة خارطة للتنمية البيئية والاجتماعية والاقتصادية على مستوى العالم، هدفها الأول هو تحسين ظروف المعيشية لكل فرد في المجتمع، وتطوير وسائل الإنتاج وأساليبه، وإدارتها بطرق لا تؤدي إلى استنزاف موارد كوكب الأرض الطبيعية، حتى لا نحمل الكوكب فوق طاقته، ولا نحرم الأجيال القادمة من هذه الموارد، (تلبية احتياجات الجيل الحالي دون إهدار حقوق الأجيال القادمة)، ودون الإفراط في استخدام الموارد الطبيعية المتبقية على كوكبنا." />

      <Button className="bg-secondary mx-auto mt-">اقرأ المزيد</Button>
    </div>
  );
};

export default About;
