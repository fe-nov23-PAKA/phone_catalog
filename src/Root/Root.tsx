import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Cart, Favourites, HomePage, ItemCard, ItemsPage } from "../Pages";
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
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="home" element={<Navigate to="/" />} />

            <Route path="phones">
              <Route index element={<ItemsPage option="phones" />} />
              <Route path=":phoneID" element={<ItemCard />} />
            </Route>

            <Route path="tablets" element={<ItemsPage option="tablets" />}>
              <Route path=":tabletID" element={<ItemCard />} />{" "}
            </Route>

            <Route
              path="accessories"
              element={<ItemsPage option="accessories" />}
            >
              <Route path=":accessoryID" element={<ItemCard />} />{" "}
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
