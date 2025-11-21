import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Dynamic imports for below-the-fold components
const CoreValues = dynamic(() => import('@/components/CoreValues'));
const BusinessAreas = dynamic(() => import('@/components/BusinessAreas'));
const StatsAndReviews = dynamic(() => import('@/components/StatsAndReviews'));
const CurrentCourses = dynamic(() => import('@/components/CurrentCourses'));
const Instructors = dynamic(() => import('@/components/Instructors'));
const InstructorProcess = dynamic(() => import('@/components/InstructorProcess'));
const ContactForm = dynamic(() => import('@/components/ContactForm'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col bg-neutral-50">
      <Header />
      <main className="flex-grow flex flex-col gap-20 md:gap-32 pb-24">
        <Hero />
        <div id="about" className="flex flex-col gap-20">
          <CoreValues />
          <BusinessAreas />
        </div>
        <StatsAndReviews />
        <CurrentCourses />
        <div id="instructors">
          <Instructors />
        </div>
        <InstructorProcess />
        <div id="contact">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
