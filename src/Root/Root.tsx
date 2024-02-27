import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Cart, Favourites, HomePage, ItemCard, ItemsPage } from "../Pages";
import { PageNotFound } from "../Pages/NotFoundPage";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ItemTitle } from "../types/ItemTitle";
import { useAppDispatch } from "../app/hooks";
import * as itemsSlice from "../features/ItemsSlice";

export const Root = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(itemsSlice.init("products"));
  }, []);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {!isMenuOpen && (
        <div className="min-h-[calc(100vh-64px-98px)] bg-hover-color transition-all dark:bg-dark-black">
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="home" element={<Navigate to="/" />} />

              <Route path="phones">
                <Route
                  index
                  element={
                    <ItemsPage option="phones" title={ItemTitle.phone} />
                  }
                />
                <Route path=":slug" element={<ItemCard />} />
              </Route>

              <Route path="tablets">
                <Route
                  index
                  element={
                    <ItemsPage option="tablets" title={ItemTitle.tablets} />
                  }
                />
                <Route path=":slug" element={<ItemCard />} />
              </Route>

              <Route path="accessories">
                <Route
                  index
                  element={
                    <ItemsPage
                      option="accessories"
                      title={ItemTitle.accessories}
                    />
                  }
                />
                <Route path=":slug" element={<ItemCard />} />
              </Route>

              <Route path="favourites" element={<Favourites />} />
              <Route path="cart" element={<Cart />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      )}

      {!isMenuOpen && <Footer />}
    </>
  );
};
