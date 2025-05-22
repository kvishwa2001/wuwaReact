import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { taskData as Alldata } from "../data/data.tsx";
interface dataProps {
  id: number;
  task: string;
  isClaimed: boolean;
  point: number;
}
interface props {
  points: number;
  steps: number;
  taskData: dataProps[];
  handleSteps: () => void;
  handleClaim: (id: number) => void;
  addPoint: (point: number) => void;
}

export const Actcontext = createContext<props | null>(null);

const MissionContext = ({ children }: PropsWithChildren) => {
  const [taskData, setTaskData] = useState(Alldata);
  const [points, SetPoints] = useState<number>(0);
  const [lineWidth, setLineWidth] = useState<number>(0);
  const [steps, SetSteps] = useState<number>(0);

  const addPoint = (newPoint: number) => {
    SetPoints(points + newPoint);
    alert("Point Added");
  };
  const handleClaim = (item: number) => {
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
