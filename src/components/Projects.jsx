import Reveal from "./Reveal";
import { DATA } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <Reveal><h2>Featured <span>projects</span></h2></Reveal>
      <div className="grid">
        {DATA.projects.map((p, k) => (
          <Reveal key={p.t} delay={k * 0.12}><div className="card"><h3>{p.t}</h3>
            <p className="muted">{p.d}</p>
            <div className="chips">{p.s.map(s => <span key={s} className="chip">{s}</span>)}</div></div></Reveal>
        ))}
      </div>
    </section>
  );
}
