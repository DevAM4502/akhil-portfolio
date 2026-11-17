import Reveal from "./Reveal";
import { DATA } from "../data";
import useTyping from "../hooks/useTyping";

export default function Hero() {
  const typed = useTyping(DATA.roles);
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        <div>
          <Reveal><p className="hi">Hi, I'm</p></Reveal>
          <Reveal delay={0.1}><h1 className="grad">{DATA.name}</h1></Reveal>
          <Reveal delay={0.2}><p className="type">{typed}<span className="cursor" /></p></Reveal>
          <Reveal delay={0.3}><div className="btns">
            <a className="btn p" href="#contact">Hire me</a>
            <a className="btn" href="#projects">View work</a>
          </div></Reveal>
        </div>
        <Reveal delay={0.3}>
          <div className="orbit">
            <div className="core">AM</div>
            {["Angular", ".NET", "SQL", "React"].map((t, k) => (
              <span key={t} className="o" style={{ "--dl": `${-k * 3.5}s` }}>{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
