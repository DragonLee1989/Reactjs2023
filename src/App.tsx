import "./App.css";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Expertise } from "./components/Expertise";
import { Logo } from "./components/Logo";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";

export default function App() {
  return (
    <div className="container mx-auto w-[1000px]">
      <div className="cv-wrapper flex">
        <div className="col-left bg-blue-500 w-[40%]">
          <Logo />
          <Contact />
          <Expertise />
          <Skill />
        </div>
        <div className="col-right flex-1 bg-gray-200">
          <div className="mx-10 mt-[70px]">
            <p className="font-bold text-3xl text-blue-500">LE NHAT LONG</p>
            <p className="font-bold text-lg text-blue-500">WEB DEVELOPER</p>
            <p className="font-bold mt-[120px]">ABOUT ME</p>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              qui rem architecto quaerat cum, illum laudantium nisi, eum
              praesentium obcaecati omnis fugiat ipsum quam aspernatur quos
              voluptates porro ratione at.
            </p>
            <Education />
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}
