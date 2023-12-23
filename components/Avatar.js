import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/my.png"}
        width={600}
        height={550}
        alt=""
        className="translate-z-0 h-full w-full"
      />
    </div>
  );
};

export default Avatar;
