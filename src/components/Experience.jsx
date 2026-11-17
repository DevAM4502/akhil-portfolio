import Reveal from "./Reveal";
import { DATA } from "../data";

export default function Experience() {
  return (
    <section id="experience">
      <Reveal><h2>Work <span>experience</span></h2></Reveal>
      <div className="tl">
        {DATA.jobs.map(j => (
          <Reveal key={j.when}><div className="job">
            <h3>{j.role}</h3><p className="muted">{j.co} · {j.when}</p>
            <ul>{j.pts.map(p => <li key={p}>{p}</li>)}</ul>
          </div></Reveal>
        ))}
      </div>
    </section>
  );
}
