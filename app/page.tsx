import Image from "next/image";
import img from '../public/arrowAnimation.svg';

export default function Home() {
  return (
    <div className="flex flex-col   px-[40px] overflow-hidden">
      <main className="flex flex-col px-[40px] pl-[40px] justify-center items-center md:items-start">
        <div className=" flex flex-row">
          <Image className="" src={img} width={40} height={40} alt={""} />
          <div className="flex flex-col px-[40px] pl-[40px] justify-center items-center md:items-start">
            <h1 className="text-center text-[45px] md:text-[96px] font-bold">HEY THERE, IT&apos;S</h1>
            <h1 className="text-center text-[45px] text-[#00ADB5] md:text-[96px] font-bold">TIAN.DEV</h1>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
