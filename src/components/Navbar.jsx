import { useEffect, useState } from "react";

const LINKS = ["about", "skills", "experience", "projects", "education", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);
  return (<>
    <nav><div className="in">
      <a href="#home" className="logo">AM<span>.</span></a>
      <button className={"burger" + (open ? " open" : "")} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
        <i /><i /><i />
      </button>
    </div></nav>
    <div className={"menu" + (open ? " open" : "")}>
      {LINKS.map((s, k) => (
        <a key={s} href={"#" + s} style={{ "--i": k }} onClick={() => setOpen(false)}>
          <small>0{k + 1}</small>{s[0].toUpperCase() + s.slice(1)}
        </a>
      ))}
    </div>
  </>);
}
