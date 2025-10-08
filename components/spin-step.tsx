import Image from "next/image";

export default function SpinStep() {
  return (
    <>
      <div className="max-w-[1230px] mx-auto mt-10 md:bg-[#3f0101] rounded-md md:py-10 md:px-5 md:mb-10">
        <div>
          <h1 className="text-white text-2xl font-bold uppercase text-center md:text-4xl">
            How to Use Coins in Daily Spin
          </h1>
          <div className="h-[1px] w-[90%] mx-auto bg-[#a16207] my-5"></div>
        </div>
        <div className="grid grid-cols-1 gap-y-5 mt-10 md:grid-cols-5">
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center">
              <p className="text-white font-bold text-center text-lg">
                <span className="block uppercase">Step 1:</span>
                <span className="text-yellow-300">Log In</span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/IMAGE_STEPS/STEP_ONE.webp"
                height={400}
                width={200}
                alt="Step one of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-lg">
                <span className="block uppercase">Step 2:</span>
                <span>
                  Click &quot;
                  <span className="text-yellow-300">Daily Spin 100% Win</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/IMAGE_STEPS/STEP_TWO.webp"
                height={400}
                width={200}
                alt="Step two of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-lg">
                <span className="block uppercase">Step: 3</span>
                <span>
                  Click &quot;<span className="text-yellow-300">Lobby</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/IMAGE_STEPS/STEP_THREE.webp"
                height={400}
                width={200}
                alt="Step three of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-xl md:text-lg">
                <span className="block uppercase">Step 4 & 5:</span>
                <span className="text-pretty">
                  Click right side spin and click &quot;
                  <span className="text-yellow-300">50 coin/per spin</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/IMAGE_STEPS/STEP_FOUR&FIVE.webp"
                height={400}
                width={200}
                alt="Step four of free registration"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-5 md:justify-start md:items-center md:flex-col-reverse md:mb-auto">
            <div className="flex items-start md:items-center md:text-center">
              <p className="text-white font-bold text-center text-xl md:text-lg">
                <span className="block uppercase">Step 5:</span>
                <span className="text-balance">
                  Click &quot;<span className="text-yellow-300">Spin</span>
                  &quot;
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center w-full h-full md:h-auto md:w-[250px]">
              <Image
                src="/img/IMAGE_STEPS/STEP_SIX.webp"
                height={400}
                width={200}
                alt="Step four of free registration"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1230px] mx-auto flex items-center justify-center my-10 md:my-20">
        <div className="flex flex-col items-center gap-5 md:flex-row md:gap-7">
          <div className="text-center">
            <h2 className="text-yellow-300 mb-4 font-bold text-2xl md:mb-0 md:text-4xl md:font-bold">
              Contact Us
            </h2>
            <div className="flex flex-col items-center gap-5 md:flex-row lg:mt-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/img/IMAGE_STEPS/SOCIALS_ICONS/telegram_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="text-white mt-2 md:mt-1">
                  <a
                    href="https://t.me/AgentTMJel"
                    target="_blank"
                    className="inline-block font-semibold text-white hover:text-[#8EE4FF] transform transition duration-300 hover:-translate-y-1"
                  >
                    @AgentTMJel
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/img/IMAGE_STEPS/SOCIALS_ICONS/telegram_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="text-white mt-2 md:mt-1">
                  <a
                    href="https://t.me/angelplay789"
                    target="_blank"
                    className="inline-block font-semibold text-white hover:text-[#8EE4FF] transform transition duration-300 hover:-translate-y-1"
                  >
                    @angelplay789
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/img/IMAGE_STEPS/SOCIALS_ICONS/viber_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="mt-2 md:mt-1 inline-block font-semibold text-white hover:text-[#a78bfa] transform transition duration-300 hover:-translate-y-1 cursor-pointer">
                  +63 915 0612 743
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/img/IMAGE_STEPS/SOCIALS_ICONS/viber_icon.webp"
                  width={25}
                  height={25}
                  alt="Telegram Icon"
                />
                <p className="mt-2 md:mt-1 inline-block font-semibold text-white hover:text-[#a78bfa] transform transition duration-300 hover:-translate-y-1 cursor-pointer">
                  +63 920 5624 589
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
