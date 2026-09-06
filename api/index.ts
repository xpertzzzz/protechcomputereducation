import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import all our server functions
import * as adminFns from "../src/server/admin";
import * as authFns from "../src/server/auth-functions";
import * as exportFns from "../src/server/export";
import * as publicFns from "../src/server/functions";

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Public endpoints
app.get("/api/settings", async (req, res) => res.json(await publicFns.getSettingsFn()));
app.get("/api/public/courses", async (req, res) => res.json(await publicFns.getPublicCoursesFn()));
app.get("/api/public/courses/:slug", async (req, res) => res.json(await publicFns.getCourseBySlugFn(req.params.slug)));
app.get("/api/public/gallery", async (req, res) => res.json(await publicFns.getPublicGalleryFn()));
app.get("/api/public/testimonials", async (req, res) => res.json(await publicFns.getPublicTestimonialsFn()));
app.post("/api/public/enquiry", async (req, res) => {
    try {
        const result = await publicFns.submitEnquiryFn(req.body.data);
        res.json(result);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

// Auth endpoints
app.post("/api/auth/login", async (req, res) => {
    try {
        const result = await authFns.loginFn(req.body.data, req, res);
        res.json(result);
    } catch (err: any) {
        res.status(401).json({ message: err.message });
    }
});
app.post("/api/auth/logout", async (req, res) => res.json(await authFns.logoutFn(req, res)));
app.get("/api/auth/check", async (req, res) => {
    const session = await authFns.getSessionFn(req);
    res.json({ isAuthenticated: !!session, session });
});

// Admin endpoints
app.get("/api/admin/courses", async (req, res) => res.json(await adminFns.getAdminCoursesFn()));
app.get("/api/admin/enquiries", async (req, res) => res.json(await adminFns.getEnquiriesFn()));
app.get("/api/admin/gallery", async (req, res) => res.json(await adminFns.getAdminGalleryFn()));
app.get("/api/admin/stats", async (req, res) => res.json(await adminFns.getDashboardStatsFn()));
app.get("/api/admin/payments", async (req, res) => res.json(await adminFns.getPaymentsFn()));
app.get("/api/admin/students", async (req, res) => res.json(await adminFns.getStudentsFn()));
app.get("/api/admin/testimonials", async (req, res) => res.json(await adminFns.getAdminTestimonialsFn()));

app.get("/api/admin/export/students", async (req, res) => {
    try {
        const base64 = await exportFns.exportStudentsFn(req, res);
        res.send(base64);
    } catch(err: any) { res.status(401).send(err.message) }
});
app.get("/api/admin/export/payments", async (req, res) => {
    try {
        const base64 = await exportFns.exportPaymentsFn(req, res);
        res.send(base64);
    } catch(err: any) { res.status(401).send(err.message) }
});

export default app;
