
import React from 'react';
import { Trophy, Lightbulb, Users, Rocket, Globe } from 'lucide-react';

const values = [
  { ko: '도전과 성장', en: 'Challenge & Growth', icon: <Trophy className="w-10 h-10 text-blue-600" /> },
  { ko: '연결과 협력', en: 'Connection & Collaboration', icon: <Users className="w-10 h-10 text-blue-600" /> },
  { ko: '소통과 공감', en: 'Communication & Empathy', icon: <Lightbulb className="w-10 h-10 text-blue-600" /> },
  { ko: '창조와 탁월함', en: 'Creation & Excellence', icon: <Rocket className="w-10 h-10 text-blue-600" /> },
  { ko: '기여와 지속가능성', en: 'Contribution & Sustainability', icon: <Globe className="w-10 h-10 text-blue-600" /> },
];

const CoreValues: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-4">
       <div className="bg-white rounded-[30px] p-8 md:p-16 shadow-lg border border-gray-100">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-bold mb-4 tracking-wide">OUR VALUES</span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-3">시넥스의 핵심가치</h2>
          <p className="text-neutral-500 text-lg">우리가 지향하는 5가지 핵심 가치를 소개합니다.</p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 lg:gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="flex flex-col items-center gap-5 w-full sm:w-48 lg:flex-1 text-center group">
              <div className="w-[120px] h-[120px] bg-blue-50 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-100 transition-colors duration-300 shadow-inner">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {val.icon}
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <h3 className="text-xl text-zinc-900 font-bold">{val.ko}</h3>
                <p className="text-sm text-neutral-500 font-medium">{val.en}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
