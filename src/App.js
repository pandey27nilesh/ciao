import "./App.css";
import React from "react";
import Modal from "./Modal";

//for MODALS    :-----    https://www.youtube.com/watch?v=d3aI1Dt0Z50&t=820s

// steps for making modals

// line-15 (s1) we set out initial state as false
// line-17 (s2) now we used setModal() i.e. useState to Toggle between false <----> True
// line-26 (s3) the information of toggling is passed from one componet to another through PROPS
// line-6 (in Modal.js file) (s4) if condition is TRUE then display it ELSE null.

function App() {
  const [modal, setModal] = React.useState(false); // modal = it is a varaible
  const clickHandler = () => {
    setModal((currstate) => true);
  }; // currstate (false)   ====>     !false (i.e. true)

  const closeme = () => {
    setModal((currstate) => false);
  };

  return (
    <div>
      <div className="container">
        <button className="btn1" onClick={clickHandler}>
          open
        </button>
        <button className="btn2" onClick={closeme}>
          close
        </button>
      </div>

      <div>
        <Modal initial_state={modal} final_state={setModal} />
      </div>
    </div>
  );
}

export default App;
