import React, { useEffect } from "react";
import { useState } from "react";

const TrafficLight = () => {
  const [lightOn, setLightOn] = useState("red");

  const [on, setOn] = useState(false);

  useEffect(() => {
    if (on == false) return;

    if (lightOn == "red") {
      setTimeout(() => {
        setLightOn("green");
      }, 2000);
    } else if (lightOn == "green") {
      setTimeout(() => {
        setLightOn("yellow");
      }, 2000);
    } else if (lightOn == "yellow") {
      setTimeout(() => {
        setLightOn("red");
      }, 2000);
    }
  }, [lightOn, on]);

  let runAutomatic = () => {
    setOn(true);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="traffic-base bg-dark"></div>
        </div>
        <div className="traffic-body bg-dark d-flex justify-content-center align-items-center rounded">
          <div className="traffic-lights">
            <div className="d-flex justify-content-center m-3">
              <div
                onClick={() => (on == true ? "" : setLightOn("red"))}
                className={"red bg-danger " + (lightOn == "red" ? "redOn" : "")}
              ></div>
            </div>
            <div className="d-flex justify-content-center m-3">
              <div
                onClick={() => (on == true ? "" : setLightOn("yellow"))}
                className={
                  "yellow bg-warning " + (lightOn == "yellow" ? "yellowOn" : "")
                }
              ></div>
            </div>
            <div
              onClick={() => (on == true ? "" : setLightOn("green"))}
              className="d-flex justify-content-center m-3"
            >
              <div
                className={
                  "green bg-success " + (lightOn == "green" ? "greenOn" : "")
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="botones d-flex justify-content-center align-items-center">
        {on == false && (
          <button
            onClick={() => runAutomatic()}
            className="btn btn-success m-1"
          >
            Autmatico
          </button>
        )}
        {on == true && (
          <button onClick={() => setOn(false)} className="btn btn-danger m-1">
            Manual
          </button>
        )}
      </div>
    </>
  );
};

export default TrafficLight;
