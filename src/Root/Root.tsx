import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { Cart, Favourites, HomePage, ItemCard, ItemsPage } from "../Pages";
import { PageNotFound } from "../Pages/NotFoundPage";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ItemTitle } from "../types/ItemTitle";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import * as itemsSlice from "../features/ItemsSlice";
import { Contacts } from "../Pages/Contacts";

export const Root = () => {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.theme);

  useEffect(() => {
    const html = document.documentElement;

    if (theme === "dark") {
      document.body.classList.add("custom-scrollbar-dark");
      html.style.backgroundColor = "#0F0F11";
    } else {
      document.body.classList.remove("custom-scrollbar-dark");
    }
  }, [theme]);

  useEffect(() => {
    dispatch(itemsSlice.init("products"));
  }, []);

  return (
    <>
      <Header />

      <div className="min-h-[calc(100vh-64px-98px)] overflow-hidden bg-hover-color transition-all dark:bg-dark-black">
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="home" element={<Navigate to="/" />} />

            <Route path="phones">
              <Route
                index
                element={<ItemsPage option="phones" title={ItemTitle.phone} />}
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

      <Footer />
    </>
  );
};
