import React from 'react';
// import LoginPage from '@pages/LoginPage';
// import SignupPage from '@pages/SignupPage';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { MainPage, RestaurantDetailPage, ProductDetailPage, ProductListPage, RestaurantListPage } from '@pages';
// import { Header } from '@organisms';
import { CookiesProvider } from 'react-cookie';
import App from './App';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <RecoilRoot>
    <CookiesProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </RecoilRoot>,
);
