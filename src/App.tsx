import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Seo from './components/Seo';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Seo
                    path="/"
                    title="Capella Integrated Global | Reliable Diesel (AGO) Supply in Nigeria"
                    description="Capella Integrated Global Limited supplies dependable diesel (AGO) to businesses and organisations in Abuja, Kaduna, Nasarawa, Niger State and Kogi."
                  />
                  <Home />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Seo
                    path="/services"
                    title="Diesel (AGO) Supply Services | Capella Integrated Global"
                    description="Reliable diesel supply with flexible delivery volumes and competitive pricing for industries across Abuja, Kaduna, Nasarawa, Niger State and Kogi."
                  />
                  <Services />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <Seo
                    path="/about"
                    title="About Capella Integrated Global | Diesel Supply Company"
                    description="Capella Integrated Global Limited is a Nigerian company providing reliable diesel supply to businesses across industries, built on integrity and safety."
                  />
                  <About />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <Seo
                    path="/contact"
                    title="Contact Capella Integrated Global | Abuja, Nigeria"
                    description="Reach Capella Integrated Global in Abuja by phone, email or contact form. We respond within one business day. Open Monday to Saturday."
                  />
                  <Contact />
                </>
              }
            />
            <Route
              path="/quote"
              element={
                <>
                  <Seo
                    path="/quote"
                    title="Request a Diesel Supply Quote | Capella Integrated Global"
                    description="Tell us your delivery location, volume and schedule and get a tailored diesel supply quote from Capella within two business days."
                  />
                  <Quote />
                </>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
