'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 py-5 flex justify-between items-center">
        <div className="relative h-8 w-32 md:h-10 md:w-40 cursor-pointer">
          <Image
            src="/logo.png"
            alt="Synnex Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          <a href="#about" className="text-black text-base font-medium hover:text-blue-700 transition-colors">서비스 소개</a>
          <a href="#instructors" className="text-black text-base font-medium hover:text-blue-700 transition-colors">강사 등록하기</a>
          <a href="#contact" className="text-black text-base font-medium hover:text-blue-700 transition-colors">문의하기</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-black text-lg font-medium py-2 border-b border-gray-50">서비스 소개</a>
            <a href="#instructors" onClick={() => setIsMenuOpen(false)} className="text-black text-lg font-medium py-2 border-b border-gray-50">강사 등록하기</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-black text-lg font-medium py-2">문의하기</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
