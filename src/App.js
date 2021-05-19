import React from "react"
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import { incNumber , decNumber, multNumber, dividNumber } from './actions/index';

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myMultDivideState = useSelector((state) => state.multDivideNumber);
  
  const dispatch = useDispatch();
  return(
    <>
    <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <a className="quantity_minus" title="decrement" 
            onClick={() => dispatch(decNumber(1))}
          ><span> - </span></a>
          <input name="quantity" type="text" className="quantity_input" value={myState} />
          <a className="quantity_plus" title="Increment" 
            onClick={() => dispatch(incNumber(5))}
          ><span> + </span></a>
        </div>
    </div>

    <div className="container m-5">
        <h1>Multiple/Divide counter</h1>
        <h4>using React and Redux</h4>
        <div className="quantity">
          <a className="quantity_minus" title="decrement" 
            onClick={() => dispatch(dividNumber(5))}
          ><span> / </span></a>
          <input name="quantity" type="text" className="quantity_input" value={myMultDivideState} />
          <a className="quantity_plus" title="Increment" 
            onClick={() => dispatch(multNumber(5))}
          ><span> * </span></a>
        </div>
    </div>

    </>

  )
};

export default App; 
