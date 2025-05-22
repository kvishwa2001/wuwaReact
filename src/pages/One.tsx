import ActivitySteps from "../components/ActivitySteps";
import useActivity from "../hooks/useActivityContext";

const One = () => {
  const { taskData, addPoint, handleClaim } = useActivity();
  const handleTaskStatus = (item) => {
    addPoint(item.point);
    handleClaim(item.id);
  };
  return (
    <div className="activity">
      <main>
        {taskData?.map((item, index) => {
          return (
            <div
              className={`task${item.isClaimed ? " Claimed" : ""}`}
              key={index}
            >
              <div className="task_left">
                <div className="taskPoints">+{item.point}</div>
                <p className="taskInfo">{item.task}</p>
              </div>
              <div className="taskAction">
                {item.isClaimed ? (
                  <span>Finished</span>
                ) : (
                  <button
                    onClick={() => {
                      handleTaskStatus(item);
                    }}
                  >
                    {item.isFinished ? "Claim" : "Go"}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </main>
      <ActivitySteps />
    </div>
  );
};

export default One;
