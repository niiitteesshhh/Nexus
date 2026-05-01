import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Esports from "./pages/Esports";
import Community from "./pages/Community";
import Store from "./pages/Store";
import SignIn from "./pages/SignIn";
import GameDetails from "./pages/GameDetails";
import CreatePost from "./pages/CreatePost";
import { CartProvider } from "./context/CartContext";
import CustomCursor from "./components/CustomCursor";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<GameDetails />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/create" element={<CreatePost />} />
        <Route path="/store" element={<Store />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <CartProvider>
      <CustomCursor />
      <Router>
        <div className="flex flex-col min-h-screen bg-brand-dark scroll-smooth selection:bg-brand-cyan selection:text-black">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

