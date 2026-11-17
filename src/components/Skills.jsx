import Reveal from "./Reveal";
import { DATA } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <Reveal><h2>Tech <span>skills</span></h2></Reveal>
      <div className="grid">
        {Object.entries(DATA.skills).map(([g, list], k) => (
          <Reveal key={g} delay={k * 0.1}><div className="card"><h3>{g}</h3>
            <div className="chips">{list.map(s => <span key={s} className="chip">{s}</span>)}</div></div></Reveal>
        ))}
      </div>
    </section>
  );
}
