import React, { useRef, useEffect } from 'react';

const NetworkVisualization = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const colorDot = ['rgb(173, 72, 255)', 'rgb(24, 203, 252)', 'rgb(128, 0, 0)'];
    const bottomColor = [173, 72, 255];
    const topColor = [24, 203, 252];

    let mousePosition = { x: canvas.width / 2, y: canvas.height / 2 };
    let dots = { nb: 300, distance: 100, d_radius: 150, array: [] };

    function Dot() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();
      this.radius = Math.random() * 1.5;
      this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype = {
      create: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        const dotDistance = Math.hypot(this.x - mousePosition.x, this.y - mousePosition.y);
        const distanceRatio = dotDistance / (canvas.width / 1.7);
        ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
        ctx.fill();
      },
      animate: function () {
        for (let i = 0; i < dots.nb; i++) {
          const dot = dots.array[i];
          if (dot.y < 0 || dot.y > canvas.height) dot.vy = -dot.vy;
          if (dot.x < 0 || dot.x > canvas.width) dot.vx = -dot.vx;
          dot.x += dot.vx;
          dot.y += dot.vy;
        }
      },
      line: function () {
        for (let i = 0; i < dots.nb; i++) {
          for (let j = 0; j < dots.nb; j++) {
            const i_dot = dots.array[i];
            const j_dot = dots.array[j];
            if (Math.hypot(i_dot.x - j_dot.x, i_dot.y - j_dot.y) < dots.distance) {
              if (Math.hypot(i_dot.x - mousePosition.x, i_dot.y - mousePosition.y) < dots.d_radius) {
                ctx.beginPath();
                ctx.moveTo(i_dot.x, i_dot.y);
                ctx.lineTo(j_dot.x, j_dot.y);

                const gradient = ctx.createLinearGradient(i_dot.x, i_dot.y, j_dot.x, j_dot.y);
                const colorAtIDot = interpolateColor(topColor, bottomColor, i_dot.y / canvas.height);
                const colorAtJDot = interpolateColor(topColor, bottomColor, j_dot.y / canvas.height);
                gradient.addColorStop(0, `rgba(${colorAtIDot.join(',')})`);
                gradient.addColorStop(1, `rgba(${colorAtJDot.join(',')})`);

                ctx.strokeStyle = gradient;
                ctx.stroke();
                ctx.closePath();
              }
            }
          }
        }
      },
    };

    function interpolateColor(topColor, bottomColor, factor) {
      const result = topColor.map((start, index) => {
        return Math.round(start + factor * (bottomColor[index] - start));
      });
      return result;
    }

    function createDots() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < dots.nb; i++) {
        dots.array.push(new Dot());
        dots.array[i].create();
      }
      dots.array[0].radius = 1.5;
      dots.array[0].colour = '#51a2e9';
      dots.array[0].create();
      dots.array[0].line();
      dots.array[0].animate();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.array.forEach(dot => {
        dot.create();
      });
      dots.array[0].line();
      dots.array[0].animate();

      // Create gradient overlay
      const gradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', (event) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.x = event.clientX - rect.left;
      mousePosition.y = event.clientY - rect.top;
      try {
        dots.array[0].x = mousePosition.x;
        dots.array[0].y = mousePosition.y;
      } catch (error) {
        console.error(error);
      }
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.lineWidth = 0.3;
    });

    createDots();
    animate();
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;
};

export default NetworkVisualization;
