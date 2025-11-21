
import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const steps = [
    { id: 1, title: "강사 요건 확인", desc: "필수 자격 요건 및 우대 사항을 확인해주세요." },
    { id: 2, title: "지원서 작성", desc: "온라인 지원서를 꼼꼼하게 작성하여 제출합니다." },
    { id: 3, title: "심사 (1~2주 소요)", desc: "제출해주신 서류를 바탕으로 내부 심사를 진행합니다." },
    { id: 4, title: "최종 안내", desc: "심사 결과 및 향후 일정에 대해 개별 안내드립니다." },
]

const InstructorProcess: React.FC = () => {
  return (
    <section className="w-full bg-blue-600 py-24">
        <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                
                <div className="lg:w-5/12 text-white">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/50 rounded-full text-blue-100 text-xs font-bold mb-6 border border-blue-400/30">
                        <CheckCircle2 size={14} /> BECOME AN INSTRUCTOR
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        전문가가 아니어도<br/>
                        괜찮습니다.<br/>
                        <span className="text-blue-200">당신의 이야기</span>가<br/>
                        성장이 됩니다.
                    </h2>
                    <p className="text-blue-100 mb-10 text-lg leading-relaxed opacity-90">
                        시넥스는 열정 있는 모든 분들에게 열려있습니다. <br/>
                        지금 바로 강사로 등록하고 새로운 기회를 만들어보세요.
                        지식 공유의 가치를 함께 만들어갈 파트너를 기다립니다.
                    </p>
                    <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-bold hover:bg-blue-50 transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2">
                        지금 지원하기 <ArrowRight size={20}/>
                    </button>
                </div>

                <div className="lg:w-7/12 w-full">
                    <div className="bg-white/10 backdrop-blur-lg rounded-[30px] p-8 md:p-12 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-8">지원 프로세스</h3>
                        <div className="grid gap-8">
                            {steps.map((step, idx) => (
                                <div key={step.id} className="flex gap-6 group">
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex-shrink-0 flex items-center justify-center text-blue-600 font-bold text-xl shadow-md group-hover:scale-110 transition-transform duration-300">
                                            {step.id}
                                        </div>
                                        {idx !== steps.length - 1 && (
                                            <div className="w-0.5 h-full bg-blue-400/50 my-2 rounded-full"></div>
                                        )}
                                    </div>
                                    <div className="flex flex-col pt-2 pb-6">
                                        <span className="text-white text-xl font-bold mb-2 group-hover:text-blue-200 transition-colors">{step.title}</span>
                                        <span className="text-blue-100 text-base leading-relaxed">{step.desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default InstructorProcess;
