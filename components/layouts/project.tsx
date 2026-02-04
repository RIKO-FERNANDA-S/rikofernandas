import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

function Project() {
  const cards = [

    { id: 1, title: "Validnesia", img: "/image/validnesia.png" },
    { id: 2, title: "PT. Ultrajaya", img: "/image/pt-ultrajaya.png" },
    { id: 3, title: "Bathari", img: "/image/bathari.png" },
    { id: 4, title: "Pocari Sweat", img: "/image/pocari.png" },
  ];

  return (
    <section className="w-full h-max bg-putih px-8 py-10">
      <div className="w-full flex justify-between items-end h-max mb-10 mt-16">
        <h1 className="text-9xl font-extrabold tracking-tighter">PROJECT</h1>
        <div className="text-end h-full ">
        <p className="text-hitam font-light mt-3">PR0003</p>
        <Link href="/" className="flex  items-center gap-1 ">
        <h1 className="font-bold text-3xl tracking-tighter">VIEW ALL</h1>
        <ArrowUpRight size={20}/>
        </Link>

        </div>
      </div>
      <div className="w-full h-max flex justify-end gap-5 group">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="relative border border-[#00000062] flex-1 h-125 overflow-hidden transition-all duration-500 hover:flex-3"
            whileHover="hover"
          >
           
            <motion.div
              className="absolute inset-0"
              whileHover={{ filter: "grayscale(0%)" }}
              initial={{ filter: "grayscale(100%)" }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
                priority={card.id === 1}
              />
            </motion.div>

            
            <div className="absolute inset-0 z-10 flex items-end justify-center p-6 pointer-events-none">
              <motion.h1
                className="text-white font-bold uppercase text-2xl drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                variants={{
                  hover: { opacity: 1, y: -10 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {card.title}
              </motion.h1>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Project;
