import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Services from "./routes/web3 services/services.component";
import ContactUs from "./routes/contact-us/contact-us.component";
import AboutUs from "./routes/about-us/about-us.component";
import Footer from "./routes/footer/footer.component";
import FAQs from "./routes/FAQs/faq.component";
import ScrollToTop from "./components/ScrollToTop.component";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="FAQs" element={<FAQs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
