import Card from "@/components/Card";
import Link from "next/link";

export default function Page() {
  const BestSelling = [
    {
      id: 1,
      image: "/exemple.png",
      name: "Air Force 1",
      price: "DT 280.00",
      route: "/homme/",
    },
    {
      id: 2,
      image: "/exemple.png",
      name: "Air Force 2",
      price: "DT 380.00",
      route: "/homme/",
    },
    {
      id: 3,
      image: "/exemple.png",
      name: "Air Force 3",
      price: "DT 580.00",
      route: "/homme/",
    },
    {
      id: 4,
      image: "/exemple.png",
      name: "Air Force 1",
      price: "DT 280.00",
      route: "/homme/",
    },
    {
      id: 5,
      image: "/exemple.png",
      name: "Air Force 2",
      price: "DT 380.00",
      route: "/homme/",
    },
    {
      id: 6,
      image: "/exemple.png",
      name: "Air Force 3",
      price: "DT 580.00",
      route: "/homme/",
    },
    {
      id: 7,
      image: "/exemple.png",
      name: "Air Force 1",
      price: "DT 280.00",
      route: "/homme/",
    },
    {
      id: 8,
      image: "/exemple.png",
      name: "Air Force 2",
      price: "DT 380.00",
      route: "/homme/",
    },
    {
      id: 9,
      image: "/exemple.png",
      name: "Air Force 3",
      price: "DT 580.00",
      route: "/homme/",
    },
    {
      id: 10,
      image: "/exemple.png",
      name: "Air Force 1",
      price: "DT 280.00",
      route: "/homme/",
    },
    {
      id: 11,
      image: "/exemple.png",
      name: "Air Force 2",
      price: "DT 380.00",
      route: "/homme/",
    },
    {
      id: 12,
      image: "/exemple.png",
      name: "Air Force 3",
      price: "DT 580.00",
      route: "/homme/",
    },
  ];

  return (
    <div className="flex flex-col  min-h-screen items-center py-24 bg-white ">
      <div className="flex rounded-3xl h-[350px] w-11/12 bg-primary justify-center items-center ">
        <div className="text-black font-black sm:font-extrabold text-2xl text-center sm:text-4xl md:text-5xl">
          <div className="text-black text-sm sm:text-base md:text-lg text-center font-light ">
            <Link href='/' className="text-gray ">Home &gt;</Link> Homme
          </div>
          <h1 className="my-6">Homme</h1>
          <div className="text-black text-xl sm:text-2xl md:text-2xl text-center font-light">
            Trouver les pieces de vos reves
          </div>
        </div>
      </div>

      <div className="flex w-11/12 pt-20">
        <div className="w-1/5 p-2">
          <p className="font-bold text-base text-black sm:text-xl md:text-2xl">
            <span></span>Filtre
          </p>
          <text className="font-boldtext-sm sm:text-base md:text-sm text-black py-3">
            Marque
          </text>
        </div>
        <div className="w-4/5 p-2">
          <div className="flex items-center mb-6 sm:mb-2 w-full justify-between">
            <text className="text-xl font-bold text-black">NIKE</text>
            <div className="flex">
                <select
                  name="drop1"
                  id="Select1"
                  className="text-black"
                >
                  <option value="trier par ">trier par</option>
                  <option value="marque">marque</option>
                  <option value="pointure">pointure</option>
                </select>
                <div className="flex text-3xl font-bold text-black ml-[40px] ">
                  <button className="flex items-center justify-center w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 1024 1024"
                    >
                      <path
                        fill="currentColor"
                        d="M640 384v256H384V384zm64 0h192v256H704zm-64 512H384V704h256zm64 0V704h192v192zm-64-768v192H384V128zm64 0h192v192H704zM320 384v256H128V384zm0 512H128V704h192zm0-768v192H128V128z"
                      ></path>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g fill="none" fillRule="evenodd">
                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                        <path
                          fill="currentColor"
                          d="M9 13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2zM9 3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm10 0a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.436 20.937H15.5a2.5 2.5 0 0 1-2.5-2.5V5.565a2.5 2.5 0 0 1 2.5-2.5h2.933a2.5 2.5 0 0 1 2.5 2.5v12.872a2.5 2.5 0 0 1-2.497 2.5M15.5 4.065a1.5 1.5 0 0 0-1.5 1.5v12.872a1.5 1.5 0 0 0 1.5 1.5h2.933a1.5 1.5 0 0 0 1.5-1.5V5.565a1.5 1.5 0 0 0-1.5-1.5Zm-7 16.872H5.564a2.5 2.5 0 0 1-2.5-2.5V5.565a2.5 2.5 0 0 1 2.5-2.5H8.5a2.5 2.5 0 0 1 2.5 2.5v12.872a2.5 2.5 0 0 1-2.5 2.5M5.564 4.065a1.5 1.5 0 0 0-1.5 1.5v12.872a1.5 1.5 0 0 0 1.5 1.5H8.5a1.5 1.5 0 0 0 1.5-1.5V5.565a1.5 1.5 0 0 0-1.5-1.5Z"
                      ></path>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center w-12 h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M18.437 11H5.565a2.5 2.5 0 0 1-2.5-2.5V5.564a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5V8.5a2.5 2.5 0 0 1-2.5 2.5M5.565 4.064a1.5 1.5 0 0 0-1.5 1.5V8.5a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V5.564a1.5 1.5 0 0 0-1.5-1.5Zm12.872 16.872H5.565a2.5 2.5 0 0 1-2.5-2.5V15.5a2.5 2.5 0 0 1 2.5-2.5h12.872a2.5 2.5 0 0 1 2.5 2.5v2.934a2.5 2.5 0 0 1-2.5 2.502M5.565 14a1.5 1.5 0 0 0-1.5 1.5v2.934a1.5 1.5 0 0 0 1.5 1.5h12.872a1.5 1.5 0 0 0 1.5-1.5V15.5a1.5 1.5 0 0 0-1.5-1.5Z"
                      ></path>
                    </svg>
                  </button>
                </div>
            </div>

          </div>
          <div className="flex flex-wrap justify-evenly w-full gap-4">
            {BestSelling.map((item,index) => (
              <Card
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                route={item.route + item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
