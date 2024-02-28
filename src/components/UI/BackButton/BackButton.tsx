import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "../../../icons/Arrow-Left";

export const BackButton = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button
      onClick={() => navigate(-1)}
      type="button"
      className="flex flex-row items-center pb-6"
    >
      <ArrowLeft fill="#F1F2F9" />
      <span
        className="font-bold text-secondary transition-all 
    dark:text-dark-secondary dark:hover:text-dark-white"
      >
        {t("Back")}
      </span>
    </button>
  );
};
