import React, { useRef } from "react";
import "./index.css";
import Template from "../../components/template";
import useEffectOnce from "../../hooks/useEffectOnce";
import World from "./classes/world";
import { TITLE } from "../../constants/common";
import { getCurrentDate } from "../../helpers/common";

const Sandbox = () => {
  const canvasRef = useRef();

  useEffectOnce(async () => {
    const initialize = async () => {
      const world = new World({ canvasRef });
      await world.init();

      return () => world.dispose();
    };

    await initialize();
  });

  return (
    <div>
      <Template
        title={TITLE}
        subTitle="Sandbox"
        posted="22/06/2024"
        updated={getCurrentDate()}
      >
        <canvas ref={canvasRef} className="webgl-canvas" />
      </Template>
    </div>
  );
};

export default Sandbox;
