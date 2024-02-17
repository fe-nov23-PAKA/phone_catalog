import { Navigate, Route, Routes } from "react-router-dom";
import { Cart, CatalogPage, Favourites, HomePage, ItemCard } from "../Pages";
import { PageNotFound } from "../Pages/NotFoundPage";

export const Root = () => (
  <Routes>
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="catalog">
        <Route index element={<CatalogPage />} />
        <Route path=":slug?" element={<ItemCard />} />
      </Route>
      <Route path="favourites" element={<Favourites />} />
      <Route path="cart" element={<Cart />} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
