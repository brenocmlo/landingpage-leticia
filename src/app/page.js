"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickCategories from "@/components/QuickCategories";
import Procedures from "@/components/Procedures";
import Technology from "@/components/Technology";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { clinicConfig } from "@/config/clinic";

export default function Home() {
  useEffect(() => {
    // Scroll reveal IntersectionObserver implementation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Stop observing once revealed to maintain state
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before elements enter full view
      }
    );

    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        <div className="reveal">
          <Hero />
        </div>
        <div className="reveal">
          <QuickCategories />
        </div>
        <div className="reveal">
          <Procedures />
        </div>
        <div className="reveal">
          <Technology />
        </div>
        <div className="reveal">
          <About />
        </div>
        <div className="reveal">
          <Testimonials />
        </div>
        <div className="reveal">
          <Faq />
        </div>
        <div className="reveal">
          <ContactForm />
        </div>
      </main>
      <Footer />

      {/* Floating WhatsApp CTA */}
      <a
        href={clinicConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar com Leticia Terceiro no WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}
