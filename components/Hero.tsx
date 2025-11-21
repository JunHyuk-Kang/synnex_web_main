import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4 mt-6 md:mt-10">
      <div className="relative w-full h-[400px] md:h-[620px] rounded-[20px] md:rounded-[30px] overflow-hidden shadow-xl group">
        <Image
          src="/main_img1.jpg"
          alt="Hero Background"
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        <div className="absolute bottom-10 left-6 md:left-[75px] md:bottom-[100px] z-10">
          <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight drop-shadow-md">
            교육과 연결을 통해 <br />
            모든 사람과 조직의 가치와 <br className="hidden md:block"/>
            가능성을 발견합니다
          </h1>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-10 right-6 md:right-[75px] flex gap-2 z-10">
             {[0, 1, 2, 3].map((_, i) => (
                 <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white w-8' : 'bg-white/40 w-2 hover:bg-white/60'}`} />
             ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
