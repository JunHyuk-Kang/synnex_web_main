import React from 'react';
import Image from 'next/image';

const BusinessAreas: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
       <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-lg border border-gray-100"> 
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 leading-tight">시넥스는 함께 성장하는<br className="md:hidden"/> 세상을 만듭니다</h2>
            <p className="text-neutral-500 text-lg">분야별 전문성을 바탕으로 최고의 교육을 제공합니다.</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-center gap-6 h-auto lg:h-[500px]">
            {/* Area 1 */}
            <div className="flex-1 bg-zinc-800 rounded-[24px] p-10 flex flex-col justify-between group hover:flex-[2] transition-all duration-500 ease-in-out relative overflow-hidden cursor-pointer min-h-[300px] shadow-md">
               <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop" fill sizes="400px" className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 will-change-[opacity]" alt="강사 양성"/>
               <div className="relative z-10">
                 <span className="text-white/80 text-6xl font-bold block mb-4 opacity-50">01</span>
                 <h3 className="text-white text-3xl font-bold leading-snug">강사<br/>양성</h3>
               </div>
               <p className="relative z-10 text-white/90 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-auto translate-y-4 group-hover:translate-y-0 will-change-[opacity,transform]">
                 전문 강사로 성장할 수 있는 체계적인 커리큘럼을 제공합니다.
               </p>
            </div>

            {/* Area 2 */}
            <div className="flex-1 bg-stone-600 rounded-[24px] p-10 flex flex-col justify-between group hover:flex-[2] transition-all duration-500 ease-in-out relative overflow-hidden cursor-pointer min-h-[300px] shadow-md">
              <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" fill sizes="400px" className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 will-change-[opacity]" alt="교육 기획"/>
               <div className="relative z-10">
                 <span className="text-white/80 text-6xl font-bold block mb-4 opacity-50">02</span>
                 <h3 className="text-white text-3xl font-bold leading-snug">교육 기획<br/>및 운영</h3>
               </div>
                <p className="relative z-10 text-white/90 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-auto translate-y-4 group-hover:translate-y-0 will-change-[opacity,transform]">
                 기업 및 기관 맞춤형 교육 프로그램을 기획하고 운영합니다.
               </p>
            </div>

            {/* Area 3 */}
            <div className="flex-1 bg-blue-900 rounded-[24px] p-10 flex flex-col justify-between group hover:flex-[2] transition-all duration-500 ease-in-out relative overflow-hidden cursor-pointer min-h-[300px] shadow-md">
               <Image src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop" fill sizes="400px" className="object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-500 will-change-[opacity]" alt="컨설팅"/>
               <div className="relative z-10">
                 <span className="text-white/80 text-6xl font-bold block mb-4 opacity-50">03</span>
                 <h3 className="text-white text-3xl font-bold leading-snug">사업 개발<br/>및 컨설팅</h3>
               </div>
                <p className="relative z-10 text-white/90 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-auto translate-y-4 group-hover:translate-y-0 will-change-[opacity,transform]">
                 비즈니스 성장을 위한 전문 컨설팅을 지원합니다.
               </p>
            </div>
          </div>
       </div>
    </section>
  );
};

export default BusinessAreas;
