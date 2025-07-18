import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { socials } from "../constants";
import Marquee from "../components/Marquee";

const Contact = () => {
  const text = `Got a question, how or project Idea We'd to hear from you and discuss further!`;
  const items = [
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
    "just imagin, I code",
  ];
  return (
    <section id="contact" className="flex flex-col justify-between min-h-screen bg-black">
        <div>
            <AnimatedHeaderSection
                subTitle={"You Dream It, I Code it"}
                title={"Contact"}
                text={text}
                textColor={"text-white"}
                withScrollTrigger={true}
            />
            <div className="flex px-10 font-light text-white uppercase lg:text-[30px] text-[26px] leading-none mb-10 ">
                <div className="flex flex-col w-full gap-10">
                    <div className="social-link">
                        <h2>E-mail</h2>
                        <div className="w-full h-px my-2 bg-white/30" />
                        <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">adityasaini472894@gmail.com</p>
                    </div>
                    <div className="social-link">
                      <h2>Social Media</h2>
                      <div className="w-full h-px my-2 bg-white/30"/>
                      <div className="flex flex-wrap gap-2">
                        {socials.map((social, index) => (
                            <a key={index}  href={social.href}>
                                {"{ "}
                                {social.name}
                                {" }"}
                            </a>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>

        <Marquee items={items} className="text-white bg-transparent" />
    </section>

  );
};

export default Contact;
