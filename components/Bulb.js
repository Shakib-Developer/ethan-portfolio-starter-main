import Image from "next/image";

const Bulb = () => {
  return (
    <div className=" absolute -left-60 -bottom-28 rotate-10 mix-blend-color-dodge animate-pulse duration-100 z-10 w-[350px] xl:w-[500px]">
      <Image
        src={"/bulb-2.png"}
        width={280}
        height={200}
        alt=""
        className="h-full w-full"
      />
    </div>
  );
};

export default Bulb;
