import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image
          className=" rounded-md"
          src="/Y.svg"
          width={50}
          height={40}
          priority
          alt="p"
        />
      </Link>
    </>
  );
};

export default Logo;
