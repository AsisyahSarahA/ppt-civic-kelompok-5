import React, { useEffect, useRef } from 'react';

interface OceanCanvasProps {
  theme: 'day' | 'night';
}

interface Star {
  x: number;
  y: number;
  size: number;
  alpha: number;
  speed: number;
}

interface Cloud {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  alpha: number;
}

export const OceanCanvas: React.FC<OceanCanvasProps> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
      initClouds();
    };

    window.addEventListener('resize', handleResize);

    // Stars for night mode
    let stars: Star[] = [];
    const initStars = () => {
      stars = [];
      const count = Math.floor((width * height) / 8000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.55),
          size: Math.random() * 1.8 + 0.5,
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.02 + 0.005
        });
      }
    };
    initStars();

    // Clouds for day mode
    let clouds: Cloud[] = [];
    const initClouds = () => {
      clouds = [];
      const count = 5;
      for (let i = 0; i < count; i++) {
        clouds.push({
          x: Math.random() * width,
          y: Math.random() * (height * 0.35) + 30,
          width: Math.random() * 180 + 120,
          height: Math.random() * 45 + 35,
          speed: Math.random() * 0.25 + 0.08,
          alpha: Math.random() * 0.25 + 0.15
        });
      }
    };
    initClouds();

    let step = 0;

    const render = () => {
      step += 0.015;

      // 1. Sky Background Gradient
      const isNight = theme === 'night';
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (isNight) {
        // Deep Oceanic Midnight to Navy
        skyGrad.addColorStop(0, '#040B16');
        skyGrad.addColorStop(0.4, '#091A30');
        skyGrad.addColorStop(0.7, '#0B2342');
        skyGrad.addColorStop(1, '#08172B');
      } else {
        // Tropical Nusantara Dawn/Daylight
        skyGrad.addColorStop(0, '#E0F2FE');
        skyGrad.addColorStop(0.35, '#BAE6FD');
        skyGrad.addColorStop(0.65, '#7DD3FC');
        skyGrad.addColorStop(1, '#38BDF8');
      }
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. Celestial Bodies (Sun or Moon)
      const celestialX = width * 0.82;
      const celestialY = height * 0.18;

      if (isNight) {
        // Stars
        stars.forEach((star) => {
          star.alpha += Math.sin(step * 2 + star.x) * star.speed;
          const a = Math.max(0.1, Math.min(0.9, star.alpha));
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${a})`;
          ctx.fill();
        });

        // Glowing Moon
        const moonGlow = ctx.createRadialGradient(
          celestialX,
          celestialY,
          10,
          celestialX,
          celestialY,
          80
        );
        moonGlow.addColorStop(0, 'rgba(242, 183, 5, 0.45)');
        moonGlow.addColorStop(0.5, 'rgba(15, 163, 177, 0.15)');
        moonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = moonGlow;
        ctx.beginPath();
        ctx.arc(celestialX, celestialY, 80, 0, Math.PI * 2);
        ctx.fill();

        // Moon Body (Crescent / Full Golden Moon)
        ctx.save();
        ctx.beginPath();
        ctx.arc(celestialX, celestialY, 26, 0, Math.PI * 2);
        ctx.fillStyle = '#FEF08A';
        ctx.shadowColor = '#F2B705';
        ctx.shadowBlur = 18;
        ctx.fill();
        ctx.restore();
      } else {
        // Dynamic Daylight Sun
        const sunGlow = ctx.createRadialGradient(
          celestialX,
          celestialY,
          15,
          celestialX,
          celestialY,
          110
        );
        sunGlow.addColorStop(0, 'rgba(253, 224, 71, 0.7)');
        sunGlow.addColorStop(0.35, 'rgba(242, 183, 5, 0.35)');
        sunGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = sunGlow;
        ctx.beginPath();
        ctx.arc(celestialX, celestialY, 110, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.beginPath();
        ctx.arc(celestialX, celestialY, 32, 0, Math.PI * 2);
        ctx.fillStyle = '#FEF9C3';
        ctx.shadowColor = '#F2B705';
        ctx.shadowBlur = 24;
        ctx.fill();
        ctx.restore();

        // Drifting Clouds
        clouds.forEach((cloud) => {
          cloud.x += cloud.speed;
          if (cloud.x > width + cloud.width) {
            cloud.x = -cloud.width;
            cloud.y = Math.random() * (height * 0.35) + 30;
          }

          ctx.save();
          ctx.fillStyle = `rgba(255, 255, 255, ${cloud.alpha})`;
          ctx.beginPath();
          ctx.ellipse(
            cloud.x,
            cloud.y,
            cloud.width * 0.5,
            cloud.height * 0.45,
            0,
            0,
            Math.PI * 2
          );
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(
            cloud.x + cloud.width * 0.2,
            cloud.y - cloud.height * 0.2,
            cloud.width * 0.35,
            cloud.height * 0.4,
            0,
            0,
            Math.PI * 2
          );
          ctx.fill();
          ctx.restore();
        });
      }

      // 3. Multi-Layer Ocean Waves at the Bottom Half
      const horizonY = height * 0.62;

      // Celestial Light Reflection on the Sea
      const lightBeam = ctx.createLinearGradient(celestialX, horizonY, celestialX, height);
      if (isNight) {
        lightBeam.addColorStop(0, 'rgba(254, 240, 138, 0.12)');
        lightBeam.addColorStop(0.5, 'rgba(15, 163, 177, 0.08)');
        lightBeam.addColorStop(1, 'rgba(15, 163, 177, 0)');
      } else {
        lightBeam.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
        lightBeam.addColorStop(0.5, 'rgba(242, 183, 5, 0.12)');
        lightBeam.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = lightBeam;
      ctx.beginPath();
      ctx.moveTo(celestialX - 80, horizonY);
      ctx.lineTo(celestialX + 80, horizonY);
      ctx.lineTo(celestialX + 260, height);
      ctx.lineTo(celestialX - 260, height);
      ctx.closePath();
      ctx.fill();

      // Wave Layers: Back, Mid, Front
      const waveConfigs = isNight
        ? [
            {
              baseY: horizonY + 25,
              amplitude: 14,
              frequency: 0.005,
              speed: 1.1,
              color: 'rgba(11, 35, 66, 0.88)',
              foam: 'rgba(15, 163, 177, 0.25)'
            },
            {
              baseY: horizonY + 75,
              amplitude: 22,
              frequency: 0.004,
              speed: 1.6,
              color: 'rgba(7, 26, 50, 0.94)',
              foam: 'rgba(242, 183, 5, 0.2)'
            },
            {
              baseY: horizonY + 140,
              amplitude: 30,
              frequency: 0.003,
              speed: 2.1,
              color: 'rgba(4, 15, 30, 0.98)',
              foam: 'rgba(255, 255, 255, 0.35)'
            }
          ]
        : [
            {
              baseY: horizonY + 25,
              amplitude: 14,
              frequency: 0.005,
              speed: 1.1,
              color: 'rgba(14, 116, 144, 0.85)',
              foam: 'rgba(255, 255, 255, 0.4)'
            },
            {
              baseY: horizonY + 75,
              amplitude: 22,
              frequency: 0.004,
              speed: 1.6,
              color: 'rgba(3, 105, 161, 0.92)',
              foam: 'rgba(255, 255, 255, 0.5)'
            },
            {
              baseY: horizonY + 140,
              amplitude: 30,
              frequency: 0.003,
              speed: 2.1,
              color: 'rgba(11, 31, 58, 0.98)',
              foam: 'rgba(242, 183, 5, 0.4)'
            }
          ];

      waveConfigs.forEach((w, layerIndex) => {
        ctx.beginPath();
        ctx.moveTo(0, height);
        ctx.lineTo(0, w.baseY);

        for (let x = 0; x <= width; x += 8) {
          const y =
            w.baseY +
            Math.sin(x * w.frequency + step * w.speed) * w.amplitude +
            Math.cos(x * w.frequency * 0.6 - step * 0.7) * (w.amplitude * 0.35);
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fillStyle = w.color;
        ctx.fill();

        // Wave crest foam line
        ctx.save();
        ctx.lineWidth = layerIndex === 2 ? 3 : 1.5;
        ctx.strokeStyle = w.foam;
        ctx.stroke();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
      style={{ width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
};
