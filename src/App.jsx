// CSS
import "./App.css";
import "./index.css";

// React Router
import { Routes, Route } from "react-router-dom";

// Layout / Wrapper / Providers
// import GlobalProviders from "./components/GlobalProviders";
import RequireAuth from "./components/RequireAuth";
import AppLayout from "./components/AppLayout";

// Pages
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DashboardPage from "./pages/DashboardPage";
import FeaturesPage from "./pages/FeaturesPage";
import DocsPage from "./pages/DocsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./pages/ScrollToTop";
import CertificatesPage from "./pages/CertificatesPage";
import SecurityPage from "./pages/SecurityPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ServicesPage from "./pages/ServicesPage";


function App() {
  return (
    <>
      {/* ScrollToTop ensures every route opens at the top */}
      <ScrollToTop />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/* PROTECTED ROUTES */}
        <Route element={<RequireAuth />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/docs" element={<DocsPage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/security" element={<SecurityPage />} />
             <Route path="/certificate" element={<CertificatesPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Route>
        </Route>

        {/* 404 ROUTE */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
