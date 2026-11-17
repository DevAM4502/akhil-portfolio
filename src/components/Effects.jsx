import { useEffect, useRef } from "react";

// Custom neon cursor, 3D card tilt + spotlight, magnetic buttons, scroll progress bar
export default function Effects() {
  const dot = useRef(null), ring = useRef(null), bar = useRef(null);
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    let x = 0, y = 0, rx = 0, ry = 0, raf, active = null;
    const reset = () => { if (active) active.style.transform = ""; active = null; };
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      dot.current.style.transform = `translate(${x}px,${y}px)`;
      const t = e.target;
      ring.current.classList.toggle("big", !!t.closest("a,button,.card,.chip"));
      const c = t.closest(".card,.btn");
      if (active && active !== c) reset();
      active = c;
      if (!c) return;
      const r = c.getBoundingClientRect(), px = x - r.left, py = y - r.top;
      if (c.classList.contains("card")) {
        c.style.setProperty("--mx", px + "px"); c.style.setProperty("--my", py + "px");
        c.style.transform = `perspective(800px) rotateX(${(0.5 - py / r.height) * 9}deg) rotateY(${(px / r.width - 0.5) * 9}deg) translateY(-6px)`;
      } else {
        c.style.transform = `translate(${(px - r.width / 2) * 0.25}px,${(py - r.height / 2) * 0.35}px)`;
      }
    };
    const loop = () => {
      rx += (x - rx) * 0.15; ry += (y - ry) * 0.15;
      ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    const scroll = () => {
      const d = document.documentElement;
      bar.current.style.width = (d.scrollTop / ((d.scrollHeight - d.clientHeight) || 1)) * 100 + "%";
    };
    scroll();
    addEventListener("scroll", scroll, { passive: true });
    if (fine) {
      document.documentElement.classList.add("fine");
      addEventListener("mousemove", move);
      document.addEventListener("mouseleave", reset);
      loop();
    }
    return () => {
      cancelAnimationFrame(raf);
      removeEventListener("scroll", scroll); removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", reset);
      document.documentElement.classList.remove("fine");
    };
  }, []);
  return (<>
    <div className="progress" ref={bar} />
    <div className="cur-dot" ref={dot} />
    <div className="cur-ring" ref={ring} />
  </>);
}
