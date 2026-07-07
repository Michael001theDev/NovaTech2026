import { useEffect, useRef } from "react";

interface InteractiveBackgroundProps {
  isDarkMode: boolean;
}

export default function InteractiveBackground({ isDarkMode }: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 180, // influence radius
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Particle class
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseRadius: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.baseRadius = Math.random() * 2 + 1.5;
        this.radius = this.baseRadius;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on boundaries
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;

        // Mouse influence: attract or repel slightly
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            // Draw slightly toward mouse
            this.x += (dx / distance) * force * 0.6;
            this.y += (dy / distance) * force * 0.6;
            this.radius = this.baseRadius + force * 2;
          } else {
            if (this.radius > this.baseRadius) {
              this.radius -= 0.1;
            }
          }
        } else {
          if (this.radius > this.baseRadius) {
            this.radius -= 0.1;
          }
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Bright cyan-blue glow or elegant dark blue
        context.fillStyle = isDarkMode
          ? `rgba(56, 189, 248, ${0.4 + (this.radius - this.baseRadius) * 0.2})` // sky-400
          : `rgba(14, 165, 233, ${0.3 + (this.radius - this.baseRadius) * 0.2})`; // sky-500
        context.fill();
      }
    }

    // Initialize particles
    const particleCount = Math.min(80, Math.floor((width * height) / 18000));
    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Elegant organic wave math
    let waveOffset = 0;

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw standard clean ambient background color if needed (though parents handle it)
      // We can also draw smooth background glows in the canvas to simulate professional shader gradients!
      const gradient = ctx.createRadialGradient(
        width * 0.3,
        height * 0.2,
        0,
        width * 0.3,
        height * 0.2,
        width * 0.8
      );

      if (isDarkMode) {
        gradient.addColorStop(0, "rgba(8, 20, 52, 0.6)"); // Deep midnight blue
        gradient.addColorStop(0.5, "rgba(4, 10, 28, 0.4)");
        gradient.addColorStop(1, "rgba(2, 6, 23, 0.8)"); // Slate-950
      } else {
        gradient.addColorStop(0, "rgba(224, 242, 254, 0.4)"); // Light sky-100
        gradient.addColorStop(0.5, "rgba(240, 249, 255, 0.2)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0.6)");
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw a slow organic ribbon/flow in background
      waveOffset += 0.002;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7);
      for (let x = 0; x <= width; x += 20) {
        const y =
          height * 0.65 +
          Math.sin(x * 0.0015 + waveOffset) * 60 +
          Math.cos(x * 0.0008 + waveOffset * 1.5) * 40;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = isDarkMode
        ? "rgba(14, 165, 233, 0.04)" // very subtle cyan line
        : "rgba(14, 165, 233, 0.03)";
      ctx.lineWidth = 15;
      ctx.stroke();

      // Update and draw particles
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      // Draw connection lines
      ctx.lineWidth = 0.85;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < 140) {
            const opacity = (1 - dist / 140) * (isDarkMode ? 0.16 : 0.12);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isDarkMode
              ? `rgba(56, 189, 248, ${opacity})`
              : `rgba(14, 165, 233, ${opacity})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      id="bg-interactive-canvas"
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-500"
    />
  );
}
