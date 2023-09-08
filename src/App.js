import React, { useEffect } from 'react';
import './App.css';
import './input.css'
import Navbar from './Components/Navbar';
import SalesEmailTemplates from './Components/pages/SalesEmailTemplates';
import HelpDeskSoftware from './Components/pages/HelpDeskSoftware';
import FreeOnlineFormBuilder from './Components/pages/FreeOnlineFormBuilder';
import FreeWebsiteBuilder from './Components/pages/FreeWebsiteBuilder';
import FreeLiveChatSoftware from './Components/pages/FreeLiveChatSoftware';
import MarketingAnalytics from './Components/pages/MarketingAnalytics';
import FreeLandingPageBuilder from './Components/pages/FreeLandingPageBuilder';
import FreeWebHosting from './Components/pages/FreeWebHosting';
import AllProductsAndFeatures from './Components/pages/AllProductsAndFeatures';
import MarketingHub from './Components/pages/MarketingHub';
import SalesHub from './Components/pages/SalesHub';
import Footer from './Components/FooterSection';
import Career from './Components/pages/Career';
import Login from './Components/pages/Login';
import Signup from './Components/pages/Signup';
import HomePage from './Components/pages/HomePage';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

function App() {

  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //     case "/signup":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <>
      <Router>

        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/MarketingHub" element={<MarketingHub key={"MarketingHub"} />} />
          <Route exact path="/SalesHub" element={<SalesHub key={"SalesHub"} />} />
          <Route exact path="/AllProductsAndFeatures" element={<AllProductsAndFeatures key={"AllProductsAndFeatures"} />} />
          <Route exact path="/Login" element={<Login key={"Login"} />} />
          <Route exact path="/SalesEmailTemplates" element={<SalesEmailTemplates key={"SalesEmailTemplates"} />} />
          <Route exact path="/HelpDeskSoftware" element={<HelpDeskSoftware key={"HelpDeskSoftware"} />} />
          <Route exact path="/FreeOnlineFormBuilder" element={<FreeOnlineFormBuilder key={"FreeOnlineFormBuilder"} />} />
          <Route exact path="/FreeWebsiteBuilder" element={<FreeWebsiteBuilder key={"FreeWebsiteBuilder"} />} />
          <Route exact path="/FreeLiveChatSoftware" element={<FreeLiveChatSoftware key={"FreeLiveChatSoftware"} />} />
          <Route exact path="/MarketingAnalytics" element={<MarketingAnalytics key={"MarketingAnalytics"} />} />
          <Route exact path="/FreeLandingPageBuilder" element={<FreeLandingPageBuilder key={"FreeLandingPageBuilder"} />} />
          <Route exact path="/FreeWebHosting" element={<FreeWebHosting key={"FreeWebHosting"} />} />
          <Route exact path="/Career" element={<Career key={"Career"} />} />
          <Route exact path="/Signup" element={<Signup key={"Signup"} />} />
        </Routes>

        <Footer />

      </Router>

    </>

  );
}

export default App;
