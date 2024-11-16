import React from "react";
import CTABox from "./CTABox";

const data = [
  {
    title: "Company",
    links: ["About", "Works", "Features", "Carriers", "Sponsors"],
  },
  {
    title: "Help",
    links: ["FAQ", "Shipping", "Returns", "Privacy", "Terms"],
  },
  {
    title: "FAQ",
    links: ["Account", "Manage Deliveries", "Orders", "Payments"],
  },
  {
    title: "Resources",
    links: [
      "Free eBooks",
      "Development Tutorial",
      "How to - Blog",
      "Youtube Playlist",
    ],
  },
];

const Footer = () => {
  return (
    <>
      <footer className="w-full h-auto overflow-x-hidden bg-[#181A1C] px-2.5 py-16">
        <CTABox />
        <div className="h-auto w-full text-gray-100 lg:mx-auto max-w-screen-xl flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col gap-8 lg:gap-0 items-start text-left">
            <h1 className="text-4xl pb-7 font-heading leading-0 mt-[-0.45rem]">
              Alumni Jams
            </h1>
            <p className="text-gray-500 max-w-[248px]">
              {`Empowering academic excellence through a digital platform.`}
            </p>
          </div>
          {data.map(({ title, links }, index) => (
            <Links key={index} title={title} links={links} />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;

const Links = ({ title, links }) => {
  return (
    <div className="flex gap-5 mb-6 lg:py-0 flex-col">
      <h3 className="uppercase pb-2 tracking-wider font-heading">{title}</h3>
      {links.map((link, index) => (
        <p key={index} className="text-gray-500">
          {link}
        </p>
      ))}
    </div>
  );
};
