import { createContext, useState, type PropsWithChildren } from "react";
import { taskData } from "../data/data.tsx";
interface dataProps {
  id: number;
  task: string;
  isClaimed: boolean;
  point: number;
}
interface props {
  points: number;
  setps: number;
  taskData: dataProps[];
  addPoint: (point: number) => void;
}

const context = createContext<props | null>(null);

const MissionContext = ({ children }: PropsWithChildren) => {
  const [points, SetPoints] = useState<number>(0);
  const [setps, SetSteps] = useState<number>(0);

  const addPoint = (newPoint: number) => {
    points > 200 ? SetPoints(200) : SetPoints(points + newPoint);
    alert("Point Added");
  };

  return (
    <context.Provider
      value={{
        points,
        addPoint,
        setps,
        taskData,
      }}
    >
      {children}
    </context.Provider>
  );
};

export default MissionContext;
