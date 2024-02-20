import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import {
  AccessoriesPage,
  Cart,
  Favourites,
  HomePage,
  ItemCard,
  PhonesPage,
  TabletsPage,
} from "../Pages";
import { PageNotFound } from "../Pages/NotFoundPage";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isMenuOpen && (
        <Routes>
          <Route path="home" element={<HomePage />} />

          <Route path="phones" element={<PhonesPage />}>
            <Route path=":slug?" element={<ItemCard />} />
          </Route>

          <Route path="tablets" element={<TabletsPage />}>
            <Route path=":slug?" element={<ItemCard />} />
          </Route>

          <Route path="accessories" element={<AccessoriesPage />}>
            <Route path=":slug?" element={<ItemCard />} />
          </Route>

          <Route path="favourites" element={<Favourites />} />
          <Route path="cart" element={<Cart />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}

      {!isMenuOpen && <Footer />}
    </>
  );
};
