import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "../../../icons/Arrow-Left";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      type="button"
      className="flex flex-row items-center pb-6"
    >
      <ArrowLeft fill="#F1F2F9" />
      <span
        className="dark:text-dark-secondary dark:hover:text-dark-white font-bold 
    text-secondary transition-all"
      >
        Back
      </span>
    </button>
  );
};
