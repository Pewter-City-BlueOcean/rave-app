import React from 'react';

import Hydra from 'hydra-synth'

const Background = () => {
  var hydra = new Hydra();

  osc(20, 0.03, 1.7).kaleid().mult(osc(20, 0.001, 0).rotate(1.58)).blend(o0, 0.94).modulateScale(osc(10, 0),-0.03).scale(0.8, () => (1.05 + 0.1 * Math.sin(0.05*time))).out(o0)
}

export default Background;

// osc(20, 0.03, 1.7)
// .kaleid()
// .mult(
//   osc(20, 0.001, 0)
//     .rotate(1.58))
// .blend(o0, 0.85)
// .modulateScale(
//   osc(100, 0),-0.03)
//   .kaleid()

//   .scale(0.8, () =>
//     (1.05 + .4 * Math.sin(time * 3)))

// .out(o0)