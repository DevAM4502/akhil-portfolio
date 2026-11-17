import { useEffect, useRef } from "react";

export default function Background() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current, ctx = cv.getContext("2d");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const m = { x: -999, y: -999 };
    let w, h, P = [], raf;
    const init = () => {
      w = innerWidth; h = innerHeight;
      cv.width = w * dpr; cv.height = h * dpr;
      cv.style.width = w + "px"; cv.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(90, Math.floor((w * h) / 16000));
      P = Array.from({ length: n }, (_, i) => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
        c: i % 3 === 0 ? "255,43,214" : "0,240,255",
      }));
    };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of P) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy);
        if (d > 0 && d < 140) { p.x += (dx / d) * 1.2; p.y += (dy / d) * 1.2; }
        ctx.fillStyle = `rgba(${p.c},.9)`; ctx.shadowColor = `rgb(${p.c})`; ctx.shadowBlur = 8;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.6, 0, 6.283); ctx.fill();
      }
      ctx.shadowBlur = 0;
      for (let i = 0; i < P.length; i++) {
        for (let j = i + 1; j < P.length; j++) {
          const a = P[i], b = P[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(${a.c},${(1 - d / 120) * 0.35})`;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const p = P[i], d = Math.hypot(p.x - m.x, p.y - m.y);
        if (d < 160) {
          ctx.strokeStyle = `rgba(138,92,255,${(1 - d / 160) * 0.6})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(m.x, m.y); ctx.stroke();
        }
      }
      if (!still) raf = requestAnimationFrame(draw);
    };
    const move = (e) => { m.x = e.clientX; m.y = e.clientY; };
    init(); draw();
    addEventListener("resize", init);
    addEventListener("mousemove", move);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", init); removeEventListener("mousemove", move); };
  }, []);
  return (<>
    <div className="bg-aurora" />
    <div className="bg-grid" />
    <canvas ref={ref} className="bg-canvas" />
  </>);
}
