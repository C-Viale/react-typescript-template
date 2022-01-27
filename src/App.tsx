import { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import Router from './configs/Router'

export default function App() {
  return (
      <BrowserRouter>
        {/* Fallback must be provided to lazy imports inside Router work. May be changed to an loader animation or something */}
        <Suspense fallback={<>Loading...</>}>
          <Router />
        </Suspense>
      </BrowserRouter>
  );
}