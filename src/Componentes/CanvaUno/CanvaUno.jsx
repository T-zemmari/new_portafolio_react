import { useRef, useEffect } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

function SketchWrapper() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      const parent = canvas.parentElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <div ref={canvasRef} style={{ width: "100%", height: "100%" }}>
      <Canvas canvasRef={canvasRef} />
    </div>
  );
}

function Canvas({ canvasRef }) {
  let font;

  function preload(p5) {
    //font = p5.loadFont('../src/assets/fonts/COMICATE.TTF');
    font = p5.loadFont('../src/assets/fonts/roboto/Roboto-Bold.ttf');
  }

  function setup(p5) {
    p5.createCanvas(canvasRef.current.offsetWidth, canvasRef.current.offsetHeight, p5.WEBGL).parent(canvasRef.current);
    p5.textFont(font); // Establecer la fuente de texto cargada
  }

  function draw(p5) {
    /*p5.background(50)*/
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();
    p5.textSize(32); // Tamaño del texto
    p5.fill(255); // Color del texto
    p5.text("Diseño Web", 50, -50); // Texto y posición
    p5.text("Creación de Aplicaciones", -50, 0);
    p5.text("Desarrollo Frontend", -50, 50);
  }

  function sketch(p5) {
    p5.preload = () => preload(p5);
    p5.setup = () => setup(p5);
    p5.draw = () => draw(p5);
  }

  return <ReactP5Wrapper sketch={sketch} />;
}

export default function CanvasComponent() {
  return <SketchWrapper />;
}
