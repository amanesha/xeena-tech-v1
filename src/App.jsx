import { Routes, Route } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Home } from './pages/Home'
import { Solutions } from './pages/Solutions'
import { Banking } from './pages/solutions/Banking'
import { Cards } from './pages/solutions/Cards'
import { CryptoPayments } from './pages/solutions/CryptoPayments'
import { Tokenization } from './pages/solutions/Tokenization'
import { CorporateTools } from './pages/solutions/CorporateTools'
import { Consulting } from './pages/solutions/Consulting'
import { Contact } from './pages/Contact'
import { CookiePolicy } from './pages/legal/CookiePolicy'
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy'
import { TermsOfService } from './pages/legal/TermsOfService'
import { AcceptableUsePolicy } from './pages/legal/AcceptableUsePolicy'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/banking" element={<Banking />} />
          <Route path="/solutions/cards" element={<Cards />} />
          <Route path="/solutions/crypto-payments" element={<CryptoPayments />} />
          <Route path="/solutions/tokenization" element={<Tokenization />} />
          <Route path="/solutions/corporate-tools" element={<CorporateTools />} />
          <Route path="/solutions/consulting" element={<Consulting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/acceptable-use-policy" element={<AcceptableUsePolicy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
