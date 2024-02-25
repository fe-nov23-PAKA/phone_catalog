import { Link } from "react-router-dom";
import phone_1 from "../../assets/img/PhonesHome/Phones_1.png";
import phone_2 from "../../assets/img/PhonesHome/Phones_2.png";
import phone_3 from "../../assets/img/PhonesHome/Phones_3.png";
import { useAppSelector } from "../../app/hooks";

export const Phones = () => {
  const products = useAppSelector((state) => state.items.items);

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
        <h2 className="pb-6 text-[32px] font-extrabold leading-[41px]">
          Shop by category
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
                <span className="text-xl font-bold leading-[26px]">
                  Mobile phones
                </span>
                <span className="text-sm text-secondary">{`${phonesQuantity} models`}</span>
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
                <span className="text-xl font-bold leading-[26px]">
                  Tablets
                </span>
                <span className="text-sm text-secondary">{`${tabletsQuantity} models`}</span>
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
                <span className="text-xl font-bold leading-[26px]">
                  Accessories
                </span>
                <span className="text-sm text-secondary">{`${accessoriesQuantity} models`}</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
