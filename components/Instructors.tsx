import React from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Linkedin, Instagram } from 'lucide-react';

const Instructors: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
       <div className="bg-zinc-900 rounded-[30px] p-8 md:p-16 text-white relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>

            <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative z-10">
                <div>
                    <span className="inline-block px-4 py-1 bg-zinc-800 rounded-full text-blue-400 text-sm font-bold mb-4 tracking-wide border border-zinc-700">INSTRUCTORS</span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">시넥스의 전문가들</h2>
                    <p className="text-zinc-400">각 분야 최고의 현업 전문가들이 멘토로 함께합니다.</p>
                </div>
                
                <div className="flex gap-3 mt-6 md:mt-0">
                    <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors border border-zinc-700"><ArrowLeft size={20} className="text-white"/></button>
                    <button className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors border border-zinc-700"><ArrowRight size={20} className="text-white"/></button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="group relative">
                        <div className="w-full h-[380px] bg-zinc-800 rounded-[24px] overflow-hidden relative">
                           <Image src={`https://images.unsplash.com/photo-${1500000000000 + item * 1000}?auto=format&fit=crop&w=800&q=80`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0 will-change-transform" alt="Instructor"/>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                           
                           <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h4 className="text-xl font-bold text-white mb-1">David Kim</h4>
                                <p className="text-sm text-blue-400 font-medium mb-3">Product Designer @Google</p>
                                <p className="text-xs text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                    10년차 UX/UI 디자이너로서 실무에서 겪은 다양한 경험을 공유합니다.
                                </p>
                                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <a href="#" className="text-zinc-400 hover:text-white"><Linkedin size={16}/></a>
                                    <a href="#" className="text-zinc-400 hover:text-white"><Instagram size={16}/></a>
                                </div>
                           </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    </section>
  );
};

export default Instructors;
