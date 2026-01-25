import { Button } from "@/components/ui/button";
import JulImg from "../assets/julimg.webp";
import reklambg from "../assets/reklambg.webp";

export default function ReklamSection() {
  return (
    <div
      className="my-10 flex flex-col md:flex-row items-center justify-center rounded-xl p-6 bg-center bg-cover"
      style={{ backgroundImage: `url(${reklambg})` }}
    >
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={JulImg}
          alt="Julklapp"
          className="rounded-lg max-w-full h-auto object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 text-center flex flex-col items-center gap-4 mt-6 md:mt-0">
        <h3 className="text-xl font-semibold bg-black text-white px-6 py-3">
          Julklappstips
        </h3>

        <p className="text-white bg-black/50 py-2 px-4">
          Julklappsköpen klara på några klick
        </p>

        <Button className="mt-4 w-48 bg-yellow-500 hover:bg-yellow-600 transition rounded-lg text-lg">
          Se julklappar
        </Button>
      </div>
    </div>
  );
}
