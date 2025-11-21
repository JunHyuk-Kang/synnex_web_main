
import React from 'react';
import Image from 'next/image';
import { Youtube, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-zinc-50 border-t border-gray-200 pt-32 pb-12 mt-auto">
      <div className="max-w-[1200px] mx-auto px-4">
         <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
             
             <div className="flex flex-col gap-6 max-w-sm">
                 {/* <div className="text-2xl font-bold text-zinc-900 tracking-tight">Synex Education</div> */}
                 <div className="relative h-8 w-32 md:h-10 md:w-40 cursor-pointer">
                    <Image
                        src="/logo.png"
                        alt="Synnex Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                 <p className="text-gray-500 text-sm leading-relaxed">
                     시넥스는 모든 사람의 성장을 지원하는 교육 플랫폼입니다. <br/>
                     함께 배우고, 나누고, 성장하세요.
                 </p>
                 <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all"><Youtube size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"><Facebook size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-pink-600 hover:border-pink-200 hover:bg-pink-50 transition-all"><Instagram size={18} /></a>
                    <a href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-sky-500 hover:border-sky-200 hover:bg-sky-50 transition-all"><Twitter size={18} /></a>
                 </div>
             </div>

             <div className="flex flex-wrap gap-x-16 gap-y-10">
                 <div className="flex flex-col gap-4">
                     <h5 className="font-bold text-zinc-900 text-sm">회사 정보</h5>
                     <div className="flex flex-col gap-3 text-sm text-zinc-500">
                         <a href="#" className="hover:text-blue-600 transition-colors">회사 소개</a>
                         <a href="#" className="hover:text-blue-600 transition-colors">채용 정보</a>
                         <a href="#" className="hover:text-blue-600 transition-colors">오시는 길</a>
                     </div>
                 </div>
                 <div className="flex flex-col gap-4">
                     <h5 className="font-bold text-zinc-900 text-sm">서비스</h5>
                     <div className="flex flex-col gap-3 text-sm text-zinc-500">
                         <a href="#" className="hover:text-blue-600 transition-colors">교육 과정</a>
                         <a href="#" className="hover:text-blue-600 transition-colors">강사 등록</a>
                         <a href="#" className="hover:text-blue-600 transition-colors">기업 교육</a>
                     </div>
                 </div>
                 <div className="flex flex-col gap-4">
                     <h5 className="font-bold text-zinc-900 text-sm">고객 지원</h5>
                     <div className="flex flex-col gap-3 text-sm text-zinc-500">
                         <a href="#" className="hover:text-blue-600 transition-colors">공지사항</a>
                         <a href="#" className="hover:text-blue-600 transition-colors">자주 묻는 질문</a>
                         <a href="#" className="hover:text-blue-600 transition-colors">1:1 문의</a>
                     </div>
                 </div>
                 <div className="flex flex-col gap-4">
                     <h5 className="font-bold text-zinc-900 text-sm">정책</h5>
                     <div className="flex flex-col gap-3 text-sm text-zinc-500">
                         <a href="#" className="hover:text-blue-600 transition-colors font-semibold">개인정보 처리 방침</a>
                         <a href="#" className="hover:text-blue-600 transition-colors">이용약관</a>
                     </div>
                 </div>
             </div>
         </div>
         
         <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">© 2024 Synex Education. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-gray-400">
                <span>대표: 김시넥스</span>
                <span>사업자등록번호: 123-45-67890</span>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
