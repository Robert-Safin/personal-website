import BackgroundPatterns from "./components/BackgroundPatterns";
import Avatar from "./components/Avatar";
import Greet from "./components/Greet";

export default function Home() {
  return (
    <div className="">
      <div className="container flex flex-col mx-auto">
        <BackgroundPatterns />

        <div className="border-b flex flex-col md:flex-row-reverse md:pb-20">
          <Avatar />
          <Greet />
        </div>
      </div>
    </div>
  );
}
