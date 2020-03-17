import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

it("renders the App component properly", () => {
  expect(<App />).toBeTruthy();
})
