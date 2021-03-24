import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-full">
        <div className="relative h-3/4 flex items-center justify-center">
          <Image
            className="absolute opacity-70"
            src="/header-placeholder.jpg"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative h-16 w-72">
            <Image src="/logo.jpg" layout="fill" objectFit="contain" />
          </div>
        </div>
        <div className="h-1/4 bg-gray-50">
          <div className="h-full flex flex-col items-center justify-center space-y-4 px-8">
            <p className="text-center text-xl">Kopen en verkopen van onze eigen en jouw vastgoed</p>
            <svg
              className="w-10 h-10 text-primary animate-bounce"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div className="px-4 py-10">
          <div className="space-y-10">
            <div className="border-b-2 border-blue-50 pb-2">
              <p className="text-primary text-2xl font-bold">Toekomstige projecten</p>
            </div>
            <div className="relative w-full h-44">
              <Image src="/berkenmei.jpg" layout="fill" objectFit="contain" />
            </div>
            <div className="relative w-full h-44">
              <Image src="/biekensstraat.jpg" layout="fill" objectFit="contain" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full h-96">
          <Image
            className="absolute opacity-70"
            src="/header-placeholder.jpg"
            layout="fill"
            objectFit="cover"
          />
          <div className="relative h-full w-full bg-gradient-to-t from-primary">
            <div className="h-full px-8 py-10 space-y-5 flex flex-col justify-center">
              <p className="text-2xl font-bold text-white text-center">
                Wil jij ook iets verkopen of verhuren?
              </p>
              <p className="text-white text-center text-sm">
                Neem gerust contact op met ons voor een antwoord op al uw vragen over het verkopen
                of verhuren van jouw eigendom
              </p>
              <button className="bg-white rounded-md font-bold text-primary py-3 px-8 focus:outline-none">
                Contacteer ons
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-primary py-8">
        <div className="px-8 flex flex-col items-center space-y-5">
          <Image src="/logo.jpg" layout="intrinsic" width="144" height="38" />
          <div className="flex space-x-3">
            <div className="h-5 w-5 bg-white"></div>
            <div className="h-5 w-5 bg-white"></div>
            <div className="h-5 w-5 bg-white"></div>
          </div>
          <p className="text-white opacity-60">&#169; Qweb Design 2020</p>
        </div>
      </div>
    </div>
  );
}
