import { useState } from "react";
import Joyride, { STATUS } from "react-joyride";
import "./App.css";

function App() {
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>Lets begin our journey!</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: <h2>Here is the first step!</h2>,
        placement: "bottom",
        target: "#step-1",
        title: "first step"
      },
      {
        content: <h2>Here is the second step!</h2>,
        placement: "bottom",
        target: "#step-2",
        title: "second step"
      },
      {
        content: <h2>Here is the third step!</h2>,
        placement: "bottom",
        target: "#step-3",
        title: "third step"
      },
      {
        content: <h2>Here is the fourth step!</h2>,
        placement: "bottom",
        target: "#step-4",
        title: "fourth step"
      },
      {
        content: <h2>Here is the fifth step!</h2>,
        placement: "bottom",
        target: "#step-5",
        title: "fifth step"
      },
      {
        content: <h2>Here is the sixth step!</h2>,
        placement: "bottom",
        target: "#step-6",
        title: "sixth step"
      },
    ],
  });

  const buttons = [1, 2, 3, 4, 5, 6];

  return (
    <div className="app">
      <Joyride
        continuous
        callback={() => {}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        showProgress
      />

      {buttons.map((item) => {
        return (
          <div className="items-list" key={item} id={`step-${item}`}>
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default App;
