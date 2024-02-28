import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import phone_1 from "../../assets/img/PhonesHome/Phones_1.png";
import phone_2 from "../../assets/img/PhonesHome/Phones_2.png";
import phone_3 from "../../assets/img/PhonesHome/Phones_3.png";
import { useAppSelector } from "../../app/hooks";

export const Phones = () => {
  const products = useAppSelector((state) => state.items.items);
  const { t } = useTranslation();

  const phonesQuantity = products.filter(
    (product) => product.category === "phones",
  ).length;

  const tabletsQuantity = products.filter(
    (product) => product.category === "tablets",
  ).length;

  const accessoriesQuantity = products.filter(
    (product) => product.category === "accessories",
  ).length;

  return (
    <>
      <div className="container pb-16">
        <h2 className="pb-6 text-[32px] font-extrabold leading-[41px] transition-all dark:text-dark-white">
          {t("ShopCategory-title")}
        </h2>
        <div className="grid grid-cols-1 justify-between gap-8 sm:grid-cols-3 sm:gap-4">
          <Link to="phones" className="flex items-center justify-center gap-6">
            <div className="grid gap-6">
              <img
                src={phone_1}
                alt="phone_1"
                className="rounded-lg rounded-b-lg transition-all hover:scale-[1.1]"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold leading-[26px] transition-all dark:text-dark-white">
                  {t("ShopCategory-phone")}
                </span>
                <span className="text-sm font-semibold text-secondary transition-all dark:text-dark-secondary">{`${phonesQuantity} ${t("Models")}`}</span>
              </div>
            </div>
          </Link>
          <Link to="tablets" className="flex items-center justify-center">
            <div className="grid gap-6">
              <img
                src={phone_2}
                alt="phone_1"
                className="rounded-lg rounded-b-lg transition-all hover:scale-[1.1]"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold leading-[26px] transition-all dark:text-dark-white">
                  {t("ShopCategory-tablets")}
                </span>
                <span className="text-sm font-semibold text-secondary transition-all dark:text-dark-secondary">{`${tabletsQuantity} ${t("Models")}`}</span>
              </div>
            </div>
          </Link>
          <Link to="accessories" className="flex items-center justify-center">
            <div className="grid gap-6">
              <img
                src={phone_3}
                alt="phone_1"
                className="rounded-lg rounded-b-lg transition-all hover:scale-[1.1]"
              />
              <div className="flex flex-col gap-1">
                <span className="text-xl font-bold leading-[26px] transition-all dark:text-dark-white">
                  {t("ShopCategory-accessories")}
                </span>
                <span className="text-sm font-semibold text-secondary transition-all dark:text-dark-secondary">{`${accessoriesQuantity} ${t("Models")}`}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
