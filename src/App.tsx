import "./App.css";
import { RankStar } from "./components/RankStar";
// import { Layer } from "./components/Tailwind/Layer";

export default function App() {
  return (
    <div className="container mx-auto">
      <div className="cv-wrapper flex">
        <div className="col-left bg-blue-700 w-[30%]">
          <RankStar number={3} />
          <RankStar number={1} />
          <RankStar number={4} />
        </div>
        <div className="col-right flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quod
            nesciunt, suscipit exercitationem quos fuga provident, autem,
            impedit tenetur perspiciatis error voluptas dolore fugit assumenda
            distinctio maxime sint blanditiis aliquam!
          </p>
        </div>
      </div>
    </div>
  );
}
