import Reveal from "./Reveal";
import { DATA } from "../data";

export default function Education() {
  return (
    <section id="education">
      <Reveal><h2><span>Education</span> & certs</h2></Reveal>
      <div className="grid">
        {DATA.edu.map(([t, s, y], k) => (
          <Reveal key={t} delay={k * 0.1}><div className="card"><h3>{t}</h3><p className="muted">{s}</p><p className="muted">{y}</p></div></Reveal>
        ))}
      </div>
    </section>
  );
}
