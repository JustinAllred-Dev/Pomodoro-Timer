import React from "react";
function Timer({
  session,
  focusDuration,
  secondsToDuration,
  minutesToDuration,
  breakDuration,
  isTimerRunning,
}) {
  console.log(session?.timeRemaining / (focusDuration * 60));
  return (
    session !== null && (
      <>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label} for{" "}
              {session?.label === "Focusing"
                ? minutesToDuration(focusDuration)
                : minutesToDuration(breakDuration)}{" "}
              minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
        {!isTimerRunning && <h2>Paused</h2>}
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax={focusDuration}
                aria-valuenow={
                  100 -
                  (session?.timeRemaining /
                    ((session?.label === "Focusing"
                      ? focusDuration
                      : breakDuration) *
                      60)) *
                    100
                }
                style={{
                  width: `${
                    100 -
                    (session?.timeRemaining /
                      ((session?.label === "Focusing"
                        ? focusDuration
                        : breakDuration) *
                        60)) *
                      100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>
      </>
    )
  );
}
export default Timer;
