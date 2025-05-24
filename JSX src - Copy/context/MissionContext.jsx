import {
  createContext,
  useEffect,
  useState,
} from "react";
import { taskData as Alldata } from "../data/data.tsx";


export const Actcontext = createContext(null);

const MissionContext = ({ children }) => {
  const [taskData, setTaskData] = useState(Alldata);
  const [points, SetPoints] = useState(0);
  const [lineWidth, setLineWidth] = useState(0);
  const [steps, SetSteps] = useState(0);

  const addPoint = (newPoint) => {
    SetPoints(points + newPoint);
    alert("Point Added");
  };
  const handleClaim = (item) => {
    setTaskData((prev) => {
      return prev.map((item1) => {
        return item1.id == item ? { ...item1, isClaimed: true } : item1;
      });
    });
  };

  const handleSteps = () => {
    const currentStep = points / 5 / 4;
    currentStep >= 5 ? SetSteps(5) : SetSteps(currentStep);
  };

  useEffect(() => {
    points >= 200 && SetPoints(200);
    handleSteps();
    points == 200 && alert("Mission Finished");
  }, [points]);
  return (
    <Actcontext.Provider
      value={{
        points,
        addPoint,
        steps,
        taskData,
        handleClaim,
        handleSteps,
      }}
    >
      {children}
    </Actcontext.Provider>
  );
};

export default MissionContext;
