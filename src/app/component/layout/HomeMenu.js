"use client";

import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";
import { useEffect, useState } from "react";

export default function HomeMenu() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch("/api/menu-items").then((res) => {
      res.then((menuItems) => {
        const bestSellers = menuItems.slice(-3);
        setBestSellers(bestSellers);
      });
    });
  }, []);

  return (
    <section>
      <div className="absolute w-full left-0 right-0">
        <div className="absolute left-0 -top-20 -z-10">
          <Image src={"/sallad1.png"} width={109} height={189} alt="" />
        </div>
        <div className="absolute right-0 -top-36 -z-20">
          <Image src={"/sallad2.png"} width={107} height={195} alt="" />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
          subHeader={"Check out"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {bestSellers?.length > 0 &&
          bestSellers.map((item) => <MenuItem {...item} />)}
      </div>
    </section>
  );
}
