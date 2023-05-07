import PingSoundEffect from "../assets/ping-sound-effect.mp3";

export const playPing = () => {
  const audio = new Audio(PingSoundEffect);
  audio.play();
};
