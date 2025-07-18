import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `Passionate about clean architecture
    I build scalable, high-performance solutions
    from prototype to production`;

  const aboutText = `
⚙️ Engineering clarity, not just code<br />
DRDO intern exploring the world of AI/ML. Whether it's Python scripts or React components—I build with intent.<br /><br />

🧠 Full-stack thinker, frontend dreamer<br />
From HTML to Next.js, I translate logic into smooth UI. Sprinkle some GSAP for motion magic.<br /><br />

💻 Just a CS student? Nah. I ship projects, solve problems & chase performance.
  `;

  const imgRef = useRef(null);

  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });

  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"When design meets strategy to create meaningful interactions"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />

      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <img
          ref={imgRef}
          src="images/man.jpg"
          alt="man"
          className="w-md rounded-3xl"
        />

        {/* ✅ Render with proper line breaks */}
        <div
          className="w-full text-white/60 leading-relaxed tracking-wide text-xl md:text-2xl lg:text-3xl"
          dangerouslySetInnerHTML={{ __html: aboutText }}
        ></div>
      </div>
    </section>
  );
};

export default About;
