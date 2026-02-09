import React from "react";

function Acievements() {
  const achieve = [
    {
      id: 1,
      year: "2025",
      title: "1st Place Regional Web Competition",
      detail: "Designed & led full project",
    },
    {
      id: 2,
      year: "2024",
      title: "Dean's List Award",
      detail: "Achieved top 10% in class",
    },
    {
      id: 3,
      year: "2023",
      title: "Hackathon Winner",
      detail: "Developed innovative app solution",
    },
    {
      id: 4,
      year: "2022",
      title: "Certified Java Developer",
    },
  ];
  return (
    <section className=" h-screen flex pt-20 bg-putih ">
      <h1 className="absolute text-[17rem] px-10 uppercase font-extrabold tracking-tighter leading-48 text-hitam opacity-15">
        Achieve
        <br />
        ments
      </h1>
      <div className="absolute z-10 w-full h-max px-10">
        <div className="w-full h-max flex justify-end py-10">
          <p>PR0004</p>
        </div>
        {achieve.map((item) => (
          <div key={item.id}>
            <div className="flex items-center gap-5 ml-10 w-full">
              <p className="text-2xl text-hitam ">{item.year}</p>
              <div className='content-[""] w-170 h-0.5 bg-hitam'></div>
              <p className="text-lg text-hitam ">{item.title}</p>
            </div>

            {item.detail && (
              <div className=" h-max flex justify-start ml-10 gap-5 w-full items-center mb-7">
                <div className=" h-10 w-190 flex justify-end">
                  <div className="h-1/2 w-15 border-l-2 border-b-2"></div>
                </div>
                <p className="text-lg text-hitam ">{item.detail}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Acievements;
