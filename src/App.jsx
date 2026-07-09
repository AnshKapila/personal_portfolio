"use client";
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { WorkPage } from "./pages/WorkPage";
import { ProjectPage } from "./pages/ProjectPage";
import { ContactPage } from "./pages/ContactPage";
import { ServicePage } from "./pages/ServicePage";
import { ServicesListPage } from "./pages/ServicesListPage";
import { WebsiteAuditPage } from "./pages/WebsiteAuditPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { NotFoundPage } from "./pages/NotFoundPage";
export default function App() {
    const [isHeroBright, setIsHeroBright] = useState(false);
    return (<BrowserRouter>
      <div className="relative w-full min-h-screen bg-black flex flex-col font-sans selection:bg-white/30 text-white">
        <Navbar isHeroBright={isHeroBright}/>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage setIsHeroBright={setIsHeroBright}/>}/>
            <Route path="/work" element={<WorkPage />}/>
            <Route path="/work/:slug" element={<ProjectPage />}/>
            <Route path="/services" element={<ServicesListPage />}/>
            <Route path="/services/:slug" element={<ServicePage />}/>
            <Route path="/contact" element={<ContactPage />}/>
            <Route path="/audit" element={<WebsiteAuditPage />}/>
            <Route path="/privacy" element={<PrivacyPage />}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>);
}
