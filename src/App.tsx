import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

// Layouts
import RootLayout from "./pages/__root";
import AdminLayout from "./pages/admin";

// Pages
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import GalleryPage from "./pages/gallery";
import TestimonialsPage from "./pages/testimonials";
import CoursesPage from "./pages/courses.index";
import CourseDetailsPage from "./pages/courses.$slug";
import LoginPage from "./pages/login";

// Legal pages
import DisclaimerPage from "./pages/disclaimer";
import PrivacyPolicyPage from "./pages/privacy-policy";
import RefundPolicyPage from "./pages/refund-policy";
import StudentPolicyPage from "./pages/student-policy";
import TermsAndConditionsPage from "./pages/terms-and-conditions";

// Admin pages
import AdminDashboard from "./pages/admin.index";
import AdminCourses from "./pages/admin.courses";
import AdminEnquiries from "./pages/admin.enquiries";
import AdminGallery from "./pages/admin.gallery";
import AdminPayments from "./pages/admin.payments";
import AdminSettings from "./pages/admin.settings";
import AdminStudents from "./pages/admin.students";
import AdminTestimonials from "./pages/admin.testimonials";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:slug" element={<CourseDetailsPage />} />
          <Route path="login" element={<LoginPage />} />
          
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="refund-policy" element={<RefundPolicyPage />} />
          <Route path="student-policy" element={<StudentPolicyPage />} />
          <Route path="terms-and-conditions" element={<TermsAndConditionsPage />} />

          {/* Admin routes */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="courses" element={<AdminCourses />} />
            <Route path="enquiries" element={<AdminEnquiries />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="payments" element={<AdminPayments />} />
            <Route path="settings" element={<AdminSettings />} />
            <Route path="students" element={<AdminStudents />} />
            <Route path="testimonials" element={<AdminTestimonials />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
