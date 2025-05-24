import { useContext } from "react";
import { Actcontext } from "../context/MissionContext.tsx";

const useActivity = () => {
  return useContext(Actcontext);
 
};

export default useActivity;
