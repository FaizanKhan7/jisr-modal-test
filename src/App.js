import React, { useState } from "react";
import "./App.css";
import images from "./assets";
import Button from "./components/Button/Button";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(false);
  };
  const handleCloseModal = () => {
    setIsModalOpen(true);
  };
  console.log("isModalOpen", isModalOpen);
  return (
    <div className="container">
      <div className="modalContainer">
        {isModalOpen ? (
          <div className="mainView">
            <img src={images.logo} alt="jisr" className="logo" />
            <Button title="Click Me!" handleClick={handleOpenModal} />
          </div>
        ) : (
          <div className="modalContent">
            <button onClick={handleCloseModal}>
              <img src={images.closeIcon} alt="close-icon" />
            </button>
            <div className="titleContent">
              <img src={images.alertIcon} alt="alert-icon" />
              <h3>Unclosed Overdue Pay Runs</h3>
            </div>
            <p>
              Would you like to skip unclosed periods and start with this pay
              run <span>(January 2023)?</span>
            </p>
            <div className="buttonWrapper">
              <Button
                title="Back"
                buttonStyle={"primary"}
                handleClick={handleCloseModal}
              />
              <div />
              <Button
                title="Skip Unclosed Periods"
                buttonStyle={"seconday"}
                handleClick={() => console.log("Skip")}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
