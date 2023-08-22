import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import setCurrentYear from "./scripts/setCurrentYear";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
setCurrentYear();