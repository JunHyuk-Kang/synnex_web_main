import React from 'react';
import Image from 'next/image';
import { ArrowRight, Clock, Users } from 'lucide-react';

const courses = [
    {
        id: 1,
        title: "비즈니스 리더십 마스터 클래스",
        desc: "팀장급 이상을 위한 실전 리더십 트레이닝. 조직 관리와 성과 창출의 핵심을 배웁니다.",
        tags: ["모집마감"],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        period: "4주 과정",
        capacity: "20명"
    },
    {
        id: 2,
        title: "디지털 마케팅 실전 전략",
        desc: "데이터 기반의 퍼포먼스 마케팅 A to Z. 최신 트렌드와 도구 활용법을 익힙니다.",
        tags: ["수강생 모집 중", "인기"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        period: "8주 과정",
        capacity: "30명"
    },
    {
        id: 3,
        title: "스타트업 투자 유치 가이드",
        desc: "투자자를 설득하는 IR 피칭 스킬. 성공적인 자금 조달을 위한 실전 노하우.",
        tags: ["강사 모집 중"],
        image: "https://images.unsplash.com/photo-1559136555-930d72f1d300?q=80&w=2031&auto=format&fit=crop",
        period: "2일 단기",
        capacity: "15명"
    }
];

const CurrentCourses: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
         <div className="flex flex-col md:flex-row justify-between items-end mb-8">
            <div>
                 <span className="inline-block px-4 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-bold mb-4 tracking-wide">COURSES</span>
                <h2 className="text-3xl font-bold text-zinc-900 mb-2">현재 모집중인 교육</h2>
                <p className="text-neutral-500">당신의 성장을 위한 최고의 커리큘럼을 만나보세요.</p>
            </div>
             <button className="hidden md:flex px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all items-center gap-2 text-stone-600 font-medium">
                전체보기 <ArrowRight size={16} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {courses.map(course => (
                <div key={course.id} className="group bg-white rounded-[24px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full will-change-transform">
                    <div className="relative h-52 overflow-hidden">
                        <Image src={course.image} alt={course.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform" />
                        <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                            {course.tags.map((tag, i) => (
                                <span key={i} className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md
                                    ${tag === '모집마감' ? 'bg-black/70 text-white' : 
                                      tag === '인기' ? 'bg-red-500/90 text-white' : 'bg-blue-600/90 text-white'}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 text-zinc-900 group-hover:text-blue-700 transition-colors">{course.title}</h3>
                        <p className="text-gray-500 text-sm mb-6 line-clamp-2 flex-grow">{course.desc}</p>
                        
                        <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 border-t border-gray-50 pt-4">
                            <div className="flex items-center gap-1"><Clock size={14}/> {course.period}</div>
                            <div className="flex items-center gap-1"><Users size={14}/> 정원 {course.capacity}</div>
                        </div>

                        <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-700 font-semibold hover:bg-blue-700 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                            자세히 보기 <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="md:hidden flex justify-center">
             <button className="px-6 py-3 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-50 transition-colors flex items-center gap-2 text-stone-600 font-medium w-full justify-center">
                전체 교육과정 보기 <ArrowRight size={16} />
            </button>
        </div>
    </section>
  );
};

export default CurrentCourses;
