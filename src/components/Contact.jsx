import Reveal from "./Reveal";
import { DATA } from "../data";

export default function Contact() {
  return (
    <section id="contact" style={{ textAlign: "center" }}>
      <Reveal><h2>Let's <span>work together</span></h2></Reveal>
      <Reveal delay={0.1}><p className="muted">Open to full-stack and .NET / Angular roles. Say hello!</p></Reveal>
      <Reveal delay={0.2}><div className="btns" style={{ justifyContent: "center" }}>
        <a className="btn p" href={"mailto:" + DATA.email}>Email me</a>
        <a className="btn" href={DATA.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        <a className="btn" href={"tel:" + DATA.phone.replace(/\s/g, "")}>Call</a>
      </div></Reveal>
    </section>
  );
}
