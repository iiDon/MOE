import Enviroment from "./Enviroment";

const Enviroments = () => {
  const Envs = [
    {
      title: "يوم البيئة العالمي",
      date: "05 يونيو ",
      img: "/enviroments/1.jpg",
      content:
        "ذكرى انعقاد أول مؤتمر عالمي عن البيئة تحت رعاية الأمم المتحدة في مثل هذا اليوم من عام 1972 م في مدينة استوكهولم بالسويد ويمثل في كل عام دعوة لشعوب العالم لتظافر جهودها لحماية موارد الأرض والعمل من أجل إصحاح البيئة .",
    },
    {
      title: "اليوم العالمي للأراضي",
      date: "02 فبراير",
      img: "/enviroments/2.jpg",
      content:
        "يتم الاحتفال باليوم العالمي للأراضي الرطبة في الثاني من فبراير من كل عام والذي تشرف علية المنظمة الدولية رامسار للأراضي الرطبة، وتحرص الوزارة على مشاركة مختلف دول العالم بهذا اليوم من خلال إقامة الفعاليات والبرامج التعليمية والتوعوية.",
    },
    {
      title: "اليوم العالمي لحماية طبقة الأوزون",
      date: "16 سبتمبر",
      img: "/enviroments/3.jpg",
      content:
        "ذكرى توقيع بروتوكول منتريال في مثل هذا اليوم من عام 1987م ويعتبر موعداً عالمياً للتذكير بأهمية حماية طبقة الأوزون التي تعمل كدرع واق يحيط بالغلاف الجوي لكوكب الأرض وتواصل الجهود الدولية للحد من استخدام المواد الكيميائية التي تؤدي لتآكل هذه الطبقة الحيوية.",
    },
    {
      title: "اليوم العالمي للتنوع الإحيائي",
      date: "22 مايو",
      img: "/enviroments/4.jpg",
      content:
        "اليوم العالمي للتنوع الأحيائي هو يوم أقرته الأمم المتحدة كيوم عالمي من أجل التشجيع على قضايا التنوع الأحيائي. يقام هذا اليوم في 22 مايو من كل عام كما أعلنت الجمعية العامة للأمم المتحدة بأن العام 2010م هي السنة الدولية للاحتفال بالتنوع الأحيائي على المستوى العالمي تحت شعار",
    },
    {
      title: "ساعة الأرض",
      date: "27 مارس",
      img: "/enviroments/5.jpg",
      content:
        "حدثا عالميا تحتفل فيه دول العالم بشكل سنوي بهدف توعية المجتمع بأهمية المشاركة في الجهود الوطنية لمواجهة تحديات ظاهرة الاحتباس الحراري والتغيرات المناخية الناتجة عنها كما يهدف هذا الاحتفال الى  تعزيز السلوك الإيجابي لأفراد المجتمع  من اجل حماية كوكب الأرض من التأثيرات السلبية  لانبعاثات غازات الاحتباس الحراري  من الأنشطة البشرية ، و تعزيز الوعي والثقافة لدى افراد المجتمع بأهمية ترشيد استخدام مصادر الطاقة التقليدية والتوسع في استخدام مصادر الطاقات .",
    },
    {
      title: "اليوم العالمي لمكافحة التصحر",
      date: "05 يونيو",
      img: "/enviroments/6.jpg",
      content:
        "تتهدد العالم أخطارا طبيعية طارئة لها أن تشكّل مفترق طرق في التاريخ. ويشكل التصحر أحد هذه التحديات التي  تحدق بالعالم بأسره، ولا سيما المنطقة العربية، وهو يتطلّب عملاً مشتركاً وسريعاً من أجل الحد من آثاره أو وضع حدٍ له.في العام 1994، أعلنت الجمعية العامة التابعة للأمم المتحدة يوم 17 حزيران/يونيو من كل عام اليوم العالمي لمكافحة التصحر والجفاف، من أجل نشر الوعي بالمشكلة وبضرورة تنفيذ اتفاقية الأمم المتحدة لمكافحة التصحر في البلدان التي تعاني من جفاف قاس و/أو تصحّر. ويشكّل هذا اليوم تحذيراً بالأخطار الموجودة وتذكيراً بالعمل المطلوب لمحاربتها",
    },
    {
      title: "يوم كوكب الأرض",
      date: "22 أبريل",
      img: "/enviroments/7.jpg",
      content:
        "يوم الأرض بدأ الإحتفال به عالمياً اعتباراً من عام 1970 م, وهو حدث سنوي يحتفل به في 22 أبريل/نيسان من كل عام، ويهدف إلى زيادة الوعي المجتمعي بالقضايا البيئية والتحديات التي تواجه كوكبنا. يتم الاحتفال به في جميع أنحاء العالم من خلال المسيرات والمؤتمرات والمشاريع المدرسية وغيرها من الأنشطة .",
    },
    {
      title: "اليوم العالمي للحياة البرية",
      date: "03 مارس",
      img: "/enviroments/8.jpg",
      content:
        "اعلنت الجمعية العامة للأمم المتحدة في دورتها 68 اعتبار يوم 3 مارس اليوم العالمي للحياة البرية حيث يصادف هذا اليوم اعتماد اتفاقية التجارة الدولية في الانواع المهددة بالانقراض من الحيوانات والنباتات البرية ((CITES، ويهدف الاحتفال بهذا اليوم الى رفع الوعي البيئي حول الحيوانات والنباتات البرية في العالم والاعتراف بالدور المهم للانقراض في ضمان ان التجارة الدولية لا تهدد بقاء هذه الانواع.",
    },
  ];
  return (
    <div className="flex flex-wrap container gap-4 pt-8 justify-center">
      {Envs.map((env, index) => (
        <Enviroment
          key={index}
          title={env.title}
          date={env.date}
          img={env.img}
          content={env.content}
        />
      ))}
    </div>
  );
};

export default Enviroments;
