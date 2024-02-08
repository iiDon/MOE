import { Link } from "react-router-dom";

export type GoalProps = {
  src: string;
  url: string;
};
const Goal = ({ src, url }: GoalProps) => {
  return (
    <Link to={url}>
      <img src={src} alt="" className="w-24" />
    </Link>
  );
};

export default Goal;
