import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import {
  MainPage,
  RestaurantDetailPage,
  ProductDetailPage,
  ProductListPage,
  RestaurantListPage,
  LoginPage,
  SignupPage,
  KakaoAuthHandler,
} from '@pages';
import { Header } from '@organisms';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/restaurant" element={<RestaurantListPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
        <Route path="/product" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/kakao_login" element={<KakaoAuthHandler />} />
        {/* <Route path="/oauth" element={<KakaoAuthHandler />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
