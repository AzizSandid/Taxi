import Link from "next/link";

export default function Footer(){


  return(
    <div className="flex flex-row justify-around bg-gray-500">
        <Link href={"#"}>Accueil</Link>
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Contact</Link>
    </div>
  );
}