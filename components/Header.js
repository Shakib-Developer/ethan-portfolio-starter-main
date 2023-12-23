import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex justify-between items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="conatainer mx-auto">
        <div className="flex flex-col text-2xl lg:text-4xl uppercase font-bold lg:flex-row justify-between items-center gap-y-5 py-4">
          <Link href={"/"}>
            <h2>
              ahammed <span className="text-accent">.</span>
            </h2>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
