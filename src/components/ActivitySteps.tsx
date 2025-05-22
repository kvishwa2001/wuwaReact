
import useActivity from "../hooks/useActivityContext";

const ActivitySteps = () => {
  const rewards = ["20", "40", "60", "80", "100"];
  const { points, steps } = useActivity();
  const lineMeter = steps * 20 - 3.5;
  return (
    <div className="steps_holder">
      <div className="info">
        <p>{points || 0}</p>
        <span>Activity Pts</span>
      </div>
      <div className="steps_meter">
        <div
          className="step_line"
          style={{
            width: lineMeter - 1 + "%",
          }}
        ></div>
        {rewards?.map((point, index) => {
          return (
            <div
              key={point}
              className={`step ${index + 1 <= parseInt(steps) && "activated"}`}
            >
              {point}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivitySteps;
