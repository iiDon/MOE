import { cn } from "@/lib/utils";

const H1 = ({ title, color }: { title: string; color?: string }) => {
  return (
    <h1 className={cn("text-center text-2xl font-bold", color)}>{title}</h1>
  );
};

export default H1;
