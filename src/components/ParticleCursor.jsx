import React, { useEffect } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const ParticleCursor = () => {
  useEffect(() => {
   
    const pc = neonCursor({
        el: document.getElementById('app'),
        shaderPoints: 1,
        curvePoints: 80,
        curveLerp: 0.7,
        radius1: 2,
        radius2: 10,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025
    });

   
    return () => {
      if (pc && pc.destroy) {
        pc.destroy();
      }
    };
  }, []);

  return null; 
};

export default ParticleCursor;
