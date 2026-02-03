import Image from "next/image";
import React from "react";

function Project() {
  const cards = [
    { id: 1, title: "Validnesia", img: "/image/pt-ultrajaya.png" },
    { id: 2, title: "Validnesia", img: "/image/bathari.png" },
    { id: 3, title: "Validnesia", img: "/image/joker-topup.png" },
    { id: 4, title: "Validnesia", img: "/image/validnesia.png" },
  ];

  return (
    <section className="w-full h-max bg-putih px-8 py-10">
      <div className="w-full h-max mb-10">
        <h1 className="text-9xl font-extrabold tracking-tighter">PROJECT</h1>
      </div>
      <div className="w-full h-max flex justify-center gap-5 group ">
        {cards.map((card) => (
          <div className="relative flex-1 h-125 overflow-hidden rounded-2xl transition-all duration-500 hover:flex-3">
            <Image
              src={card.img}
              alt={card.title}
              fill // Mengisi seluruh area parent (div)
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Opsional: Optimasi loading
              className="object-cover transition-transform duration-500 hover:scale-110"
              priority={card.id === 1} 
            />

            {/* Overlay Teks */}
            <div className="relative z-10 flex h-full items-end p-6 bg-black/20">
              <h3 className="text-white font-bold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
