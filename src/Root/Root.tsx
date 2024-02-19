import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cart, CatalogPage, Favourites, HomePage, ItemCard } from "../Pages";
import { PageNotFound } from "../Pages/NotFoundPage";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { getData } from "../utils/getData";
import { Phone } from "../types/Phone";

export const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [startVisiblePhones, setStartVisiblePhones] = useState<Phone[]>([]);

  useEffect(() => {
    getData().then((phones) => {
      setStartVisiblePhones(phones);
    });
  }, []);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isMenuOpen && (
        <Routes>
          <Route path="/">
            <Route
              index
              element={<HomePage startVisiblePhones={startVisiblePhones} />}
            />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="catalog">
              <Route
                index
                element={
                  <CatalogPage startVisiblePhones={startVisiblePhones} />
                }
              />
              <Route path=":slug?" element={<ItemCard />} />
            </Route>
            <Route path="favourites" element={<Favourites />} />
            <Route path="cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}

      {!isMenuOpen && <Footer />}
    </>
  );
};
