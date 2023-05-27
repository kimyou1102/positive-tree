import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage, ShopDetailPage } from '@pages';
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
          <Route path="/" element={<App />} />
          <Route path="/shop-detail/:id" element={<ShopDetailPage />} />
          <Route path="/home" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
);
