import Image from 'next/image';
import girl from '@/public/images/assets/onboarding/onboarding-girl.png';
import logo from '@/public/images/assets/onboarding-logo.png';
import mobileimg from '@/public/images/assets/onboarding/onboarding-img.png';

const OnboardingPage = () => {
  return (
    <main className="h-screen flex flex-col md:flex-row">
      <div className="bg-orange h-full w-full rounded-b-[72px] relative">
        {/* <Image
          src={logo}
          alt="Deep Pharma Logo"
          className="w-2/5 absolute top-20 left-5"
        />
        <Image
          src={girl}
          alt="Girl w/ laptop"
          className="object-contain rounded-b-[72px] shadow-md shadow-y-4 shadow-blur-4 absolute bottom-0"
        /> */}
        <Image
          src={mobileimg}
          alt="Girl w/ laptop"
          className="w-full h-full object-cover rounded-b-[72px] shadow-md shadow-y-4 shadow-blur-4 absolute bottom-0"
        />
      </div>
      <div className="bg-white w-full h-1/2">
        <p>Botón</p>
      </div>
    </main>
  );
};
export default OnboardingPage;
