import Reveal from "./Reveal";
import { DATA } from "../data";

export default function About() {
  return (
    <section id="about">
      <Reveal><h2>About <span>me</span></h2></Reveal>
      <Reveal delay={0.1}><p className="muted" style={{ fontSize: "1.05rem", maxWidth: 720 }}>{DATA.about}</p></Reveal>
      <div className="stats">
        {DATA.stats.map(([n, l], k) => <Reveal key={l} delay={k * 0.12}><div className="card"><b>{n}</b><small>{l}</small></div></Reveal>)}
      </div>
    </section>
  );
}
