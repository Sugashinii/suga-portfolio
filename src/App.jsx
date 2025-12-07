import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-100 antialiased">
      <header className="sticky top-0 z-30 bg-[#0a192f]/95 backdrop-blur border-b border-slate-800/80">
        <div className="mx-auto max-w-5xl px-4">
          <Navbar />
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 space-y-24">
        <Hero />
        <About />
        <Projects />
      </main>

      <footer className="bg-[#0a192f]">
        <div className="mx-auto max-w-5xl px-4 py-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
