import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, RestaurantDetailPage, ProductDetailPage, ProductListPage, RestaurantListPage } from '@pages';
import { Header } from '@organisms';
import App from './App';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<MainPage />} />
          <Route path="/restaurant" element={<RestaurantListPage />} />
          <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
          <Route path="/product" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
);
