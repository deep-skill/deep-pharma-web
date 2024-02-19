import Image from 'next/image';
import onboardingImg from '@/public/images/assets/onboarding/onboarding-img.png';
import deepLogo from '@/public/images/assets/deep-skill-logo.png';
import onboardingVector from '@/public/images/assets/onboarding/onboarding-vector.png';

const OnboardingPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row">
        <div className="bg-orange h-1/2 w-full rounded-b-[72px] flex flex-col shadow-md shadow-y-4 shadow-blur-4 relative items-center overflow-hidden md:rounded-b-[0px] md:rounded-tr-[72px] md:w-1/2 md:h-full">
          <Image
            src={onboardingImg}
            alt="Girl w/ laptop"
            className="h-full object-contain object-bottom md:w-full"
          />
        </div>
        <div className="bg-white w-full h-1/2 flex flex-col justify-center items-center gap-8 md:w-1/2 md:h-full">
          <p className="w-4/5 text-center text-4xl font-bold text-orange md:text-6xl">
            Gestiona tu inventario y haz crecer tu negocio.
          </p>
          <button
            className="w-1/3 align-middle select-none font-sans font-bold text-center transition-all text-s py-3 px-6 bg-orange text-white shadow-2xl  hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full md:bg-white md:text-orange"
            type="button"
          >
            Ingresar
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 md:top-0">
        <Image src={deepLogo} alt="Powered by Deep Skill" />
      </div>
        <div className="absolute bottom-0 md:right-0 md:scale-x-[-1]">
          <Image src={onboardingVector} alt="Powered by Deep Skill" />
        </div>
    </>
  );
};
export default OnboardingPage;
