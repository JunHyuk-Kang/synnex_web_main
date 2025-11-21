'use client';

import React, { useState } from 'react';
import { Check, ChevronDown, Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [agreed, setAgreed] = useState(false);
  const [selectedType, setSelectedType] = useState('');

  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 -mt-16 relative z-10">
        <div className="bg-white rounded-[30px] p-8 md:p-16 shadow-2xl border border-gray-100">
            <div className="text-center mb-12">
                 <div className="inline-block px-4 py-1 bg-gray-100 rounded-full text-gray-600 text-sm font-bold mb-4 tracking-wide">CONTACT US</div>
                <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4">궁금한 점이 있으신가요?</h2>
                <p className="text-gray-500">문의 내용을 남겨주시면 담당자가 확인 후 빠르게 답변 드리겠습니다.</p>
            </div>

            <form className="flex flex-col gap-8 max-w-[700px] mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-900 text-sm">성함 <span className="text-red-500">*</span></label>
                        <input type="text" placeholder="홍길동" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-lg placeholder:text-gray-300" required />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-900 text-sm">연락처 <span className="text-red-500">*</span></label>
                        <input type="tel" placeholder="010-0000-0000" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-lg placeholder:text-gray-300" required />
                     </div>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-900 text-sm">이메일 <span className="text-red-500">*</span></label>
                        <input type="email" placeholder="example@email.com" className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors bg-transparent text-lg placeholder:text-gray-300" required />
                     </div>
                     <div className="flex flex-col gap-2">
                        <label className="font-semibold text-gray-900 text-sm">문의 유형 <span className="text-red-500">*</span></label>
                        <div className="relative">
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors bg-transparent appearance-none cursor-pointer text-lg text-gray-700 pr-8"
                                required
                            >
                                <option value="" disabled>선택해주세요</option>
                                <option value="course">교육 과정 문의</option>
                                <option value="instructor">강사 지원 문의</option>
                                <option value="business">기업 출강 문의</option>
                                <option value="other">기타</option>
                            </select>
                            <ChevronDown className="absolute right-0 top-4 w-5 h-5 text-gray-400 pointer-events-none"/>
                        </div>
                     </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-900 text-sm">문의 내용 <span className="text-red-500">*</span></label>
                    <textarea rows={4} placeholder="구체적인 문의 내용을 남겨주세요." className="w-full border-b border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors bg-transparent resize-none text-lg placeholder:text-gray-300" required></textarea>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 mt-4">
                     <label className="flex items-start gap-3 cursor-pointer group">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors mt-0.5 flex-shrink-0 ${agreed ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white group-hover:border-blue-400'}`}>
                             <input 
                                type="checkbox" 
                                className="hidden" 
                                checked={agreed}
                                onChange={() => setAgreed(!agreed)}
                             />
                             {agreed && <Check size={16} className="text-white" strokeWidth={3} />}
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-900 font-medium text-sm">개인정보 수집 및 이용에 동의합니다 <span className="text-red-500">*</span></span>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                문의 처리를 위해 이름, 연락처, 이메일 정보를 수집하며, 수집된 정보는 문의 처리 완료 후 파기됩니다.
                            </p>
                        </div>
                     </label>
                </div>

                <div className="flex justify-center mt-8">
                    <button type="submit" className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2">
                        문의하기 <Send size={18} />
                    </button>
                </div>
            </form>
        </div>
    </section>
  );
};

export default ContactForm;
