import { Navigate, Route, Routes } from "react-router-dom";
import {
  Cart,
  Catalog,
  Favourites,
  HomePage,
  ItemCard,
  PageNotFound,
} from "../Pages";

export const Root = () => (
  <Routes>
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="home" element={<Navigate to="/" replace />} />
      <Route path="catalog">
        <Route index element={<Catalog />} />
        <Route path=":slug?" element={<ItemCard />} />
      </Route>
      <Route path="favourites" element={<Favourites />} />
      <Route path="cart" element={<Cart />} />
    </Route>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
