/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'login'>('landing');

  if (currentPage === 'login') {
    return <Login onBack={() => setCurrentPage('landing')} />;
  }

  return (
    <div className="bg-zinc-950 min-h-screen text-white selection:bg-red-600 selection:text-white">
      <Header onLoginClick={() => setCurrentPage('login')} />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
