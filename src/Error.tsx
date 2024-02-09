import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="grid h-[90vh] place-content-center bg-white px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          حدث خطأ ما!
        </p>

        <p className="mt-4 text-gray-500">
          يبدو أن الصفحة التي تبحث عنها غير موجودة.
        </p>

        <Button asChild className="mt-6 ">
          <Link to="/">العودة إلى الصفحة الرئيسية</Link>
        </Button>
      </div>
    </div>
  );
};

export default Error;
