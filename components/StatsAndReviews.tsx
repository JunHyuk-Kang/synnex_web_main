import React from 'react';
import Image from 'next/image';
import { Quote, ThumbsUp, Lightbulb } from 'lucide-react';

const StatsAndReviews: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[30px] p-8 md:p-16 relative overflow-hidden shadow-sm border border-blue-100">
        <div className="text-center mb-16 relative z-10">
            <span className="inline-block px-4 py-1 bg-white rounded-full text-blue-700 text-sm font-bold mb-4 tracking-wide shadow-sm">REVIEWS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">숫자로 증명하는 성과</h2>
            <p className="text-neutral-500 text-lg">데이터가 증명하는 신뢰할 수 있는 교육 파트너</p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mb-20 px-4 relative z-10">
            <div className="flex flex-col items-center gap-2">
                <span className="text-lg text-neutral-600 font-medium">누적 수강생</span>
                <span className="text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tighter">20,000<span className="text-3xl text-neutral-400 font-normal ml-2">명</span></span>
            </div>
            <div className="w-px h-20 bg-neutral-200 hidden md:block"></div>
            <div className="flex flex-col items-center gap-2">
                <span className="text-lg text-neutral-600 font-medium">수강생 만족도</span>
                <span className="text-5xl md:text-6xl font-extrabold text-blue-600 tracking-tighter">9.2<span className="text-3xl text-blue-300 font-normal ml-2">점</span></span>
            </div>
             <div className="w-px h-20 bg-neutral-200 hidden md:block"></div>
            <div className="flex flex-col items-center gap-2">
                <span className="text-lg text-neutral-600 font-medium">강사님 만족도</span>
                <span className="text-5xl md:text-6xl font-extrabold text-indigo-600 tracking-tighter">9.8<span className="text-3xl text-indigo-300 font-normal ml-2">점</span></span>
            </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {/* Review 1 (Large) */}
            <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow col-span-1 md:col-span-2 md:row-span-1 min-h-[280px] flex flex-col border border-gray-100">
                 <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600"><Quote size={20} fill="currentColor" className="text-blue-600" /></div>
                    <h4 className="text-xl font-bold text-zinc-900">“실무에 바로 적용할 수 있었어요”</h4>
                 </div>
                 <p className="text-gray-600 leading-relaxed mb-auto text-lg">
                    이전에는 이론적인 내용만 배워서 실제 업무에 적용하기 어려웠는데, 시넥스의 교육 과정은 실습 위주로 구성되어 있어서 정말 좋았습니다. 강사님의 피드백도 구체적이었고, 동료들과의 네트워킹 기회도 큰 도움이 되었습니다.
                 </p>
                 <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                        <Image src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="User" fill sizes="40px" className="object-cover"/>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">김민수 님</p>
                        <p className="text-xs text-gray-500">리더십 과정 수료</p>
                    </div>
                 </div>
            </div>
             
            {/* Small Box 1 */}
             <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow min-h-[240px] flex flex-col items-center justify-center border border-gray-100">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <ThumbsUp size={32} className="text-green-600" />
                </div>
                <p className="font-bold text-xl text-center text-zinc-900">실무 적용도 100%</p>
                <p className="text-gray-500 text-center mt-2">배운 내용을 즉시 활용</p>
             </div>

            {/* Small Box 2 */}
             <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow min-h-[240px] flex flex-col items-center justify-center border border-gray-100">
                 <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb size={32} className="text-yellow-600" />
                </div>
                <p className="font-bold text-xl text-center text-zinc-900">인사이트 획득</p>
                 <p className="text-gray-500 text-center mt-2">새로운 관점의 발견</p>
             </div>

             {/* Review 2 (Medium) */}
             <div className="bg-white rounded-[24px] p-8 shadow-sm hover:shadow-md transition-shadow col-span-1 md:col-span-2 min-h-[280px] flex flex-col border border-gray-100">
                 <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 bg-indigo-100 rounded-full text-indigo-600"><Quote size={20} fill="currentColor" className="text-indigo-600" /></div>
                    <h4 className="text-xl font-bold text-zinc-900">“강사님의 열정이 느껴졌어요”</h4>
                 </div>
                 <p className="text-gray-600 leading-relaxed mb-auto text-lg">
                    강의 내용도 훌륭했지만, 무엇보다 강사님의 열정적인 모습에 큰 동기부여를 받았습니다.
                    한 명 한 명 세심하게 케어해주시는 모습이 인상 깊었어요. 다음 심화 과정도 꼭 듣고 싶습니다.
                 </p>
                 <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative">
                        <Image src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User" fill sizes="40px" className="object-cover"/>
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900">이영희 님</p>
                        <p className="text-xs text-gray-500">마케팅 과정 수료</p>
                    </div>
                 </div>
            </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
};

export default StatsAndReviews;
