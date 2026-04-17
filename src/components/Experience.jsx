import { Environment, OrbitControls } from "@react-three/drei";
import { Soldier } from "./Soldier";

export const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <OrbitControls />
      <Soldier />
    </>
  );
};
