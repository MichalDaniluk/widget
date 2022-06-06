import { createContext } from "react";
import LightLevelSlice from "../features/lightLevel/lightLevelSlice";

const LightLevelContext = createContext(LightLevelSlice);

export default LightLevelContext;
