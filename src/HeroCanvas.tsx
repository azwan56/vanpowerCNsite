import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  glowColor: string;
  pulsePhase: number;
  pulseSpeed: number;
}

interface Packet {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 650);

    // Color palette matching the 3 flagship platforms (Indigo, Cyan, Emerald, Purple)
    const nodeColors = [
      { fill: '#6366f1', glow: 'rgba(99, 102, 241, 0.45)' }, // Indigo (DailyStock/Core)
      { fill: '#06b6d4', glow: 'rgba(6, 182, 212, 0.45)' },  // Cyan (CMEMS Ocean)
      { fill: '#10b981', glow: 'rgba(16, 185, 129, 0.45)' }, // Emerald (RGM Athletics)
      { fill: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.4)' },  // Violet (Neural LLM)
      { fill: '#3b82f6', glow: 'rgba(59, 130, 246, 0.4)' },  // Sky (Cloud)
    ];

    // Determine particle count based on screen width
    const particleCount = width < 640 ? 28 : width < 1024 ? 42 : 58;
    const maxDistance = width < 640 ? 100 : 135;

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const palette = nodeColors[Math.floor(Math.random() * nodeColors.length)];
      const baseRadius = Math.random() * 2.2 + 1.8;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: baseRadius,
        baseRadius,
        color: palette.fill,
        glowColor: palette.glow,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.03,
      });
    }

    // Traveling data packets along synapses
    const packets: Packet[] = [];
    const maxPackets = width < 640 ? 6 : 14;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
      isHovered: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.isHovered = false;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 650;
    };

    window.addEventListener('resize', handleResize);
    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Only spawn packets between sufficiently close nodes
    const maybeSpawnPacket = (i: number, j: number) => {
      if (packets.length >= maxPackets) return;
      if (Math.random() > 0.015) return;
      const p1 = particles[i];
      packets.push({
        fromIndex: i,
        toIndex: j,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        color: p1.color,
      });
    };

    // Main render loop
    let isVisible = true;
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
    });
    observer.observe(canvas);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce at boundaries with gentle padding
        if (p.x < 10) { p.x = 10; p.vx *= -1; }
        if (p.x > width - 10) { p.x = width - 10; p.vx *= -1; }
        if (p.y < 10) { p.y = 10; p.vy *= -1; }
        if (p.y > height - 10) { p.y = height - 10; p.vy *= -1; }

        // Mouse magnetic repel/interact
        if (mouse.isHovered) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 1.8;
            p.y -= (dy / dist) * force * 1.8;
          }
        }

        // Pulse radius
        p.pulsePhase += p.pulseSpeed;
        p.radius = p.baseRadius + Math.sin(p.pulsePhase) * 0.8;

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = p.glowColor;
        ctx.fill();

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      // 2. Connect nearby particles with luminous synapses
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.38;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = (1 - dist / maxDistance) * 1.4;
            ctx.stroke();

            // Try spawning data packet
            maybeSpawnPacket(i, j);
          }
        }

        // If mouse is near particle, connect to mouse
        if (mouse.isHovered) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius * 1.1) {
            const alpha = (1 - dist / (mouse.radius * 1.1)) * 0.55;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.lineWidth = 1.6;
            ctx.stroke();
          }
        }
      }

      // 3. Update and render traveling data packets (synaptic pulses)
      for (let k = packets.length - 1; k >= 0; k--) {
        const pkt = packets[k];
        pkt.progress += pkt.speed;

        if (pkt.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const p1 = particles[pkt.fromIndex];
        const p2 = particles[pkt.toIndex];
        if (!p1 || !p2) {
          packets.splice(k, 1);
          continue;
        }

        const curX = p1.x + (p2.x - p1.x) * pkt.progress;
        const curY = p1.y + (p2.y - p1.y) * pkt.progress;

        // Draw traveling photon
        ctx.beginPath();
        ctx.arc(curX, curY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = pkt.color;
        ctx.shadowBlur = 10;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(curX, curY, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = pkt.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
}
