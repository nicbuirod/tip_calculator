import dollar from "./dollar.svg";
import people from "./people.svg";
import "./App.css";
import { useState } from "react";



function App() {
  const [radio_value, setRadio_value] = useState();
  const [amount, setAmount] = useState();
  const [tip_value, setTipvalue] = useState();
  const [total_person, setTotal_person] = useState();
  const [person, setPerson] = useState();
 
 


  const Tip = () => {
   setTotal_person((+amount+(amount*radio_value/100))/person)
    
    setTipvalue (amount*radio_value/100)
      
  };

  

  

  return (
    <div className="App">
      <div className="container">
        <div className="container__tip">
          <p>Tip Amount</p>
          <p className="dollar">$</p>
           <span class='usd'>{tip_value}</span>
        </div> 
        <div className="container__tip">      
          <p >
          Total per person 
          </p>
          <p className="dollar">$</p>
          <span className="usd">{total_person}</span>

        </div> 
        <div className="container__amount">
          <div className="dollar_amount">
          <img src={dollar} className='img_dollar' />
          <input
            type="number"
            id="amount"
            name="amount"
            onChange={(e) => setAmount(e.target.value)} className='input_amount'
          ></input>
          </div>
          <p className="points">.................................................................................................................</p>
          <p className="label_sub">Bill amount</p>
        </div>
        <div className="container__people">
          <div className="dollar_amount">
          <img src={people} />
          <input type="number" id="people" name="people" onChange={(e) => setPerson(e.target.value)} className='input_people'></input>
          </div>
          <p className="points">.............................................................</p>
          <p className="label_sub">Number of people</p>
        </div>
        <div className="container__percentage">
          <input
            type="radio"
            id="5"
            name="percentage"
            value="5"
            className="radio"
            onChange={(e) => setRadio_value(e.target.value)}
          />
          <div className="label"><label for="5">5%</label></div>
          
          <input
            type="radio"
            id="10"
            name="percentage"
            value="10"
            className="radio"
            onChange={(e) => setRadio_value(e.target.value)}
            
          />
          <div className="label"><label for="10">10%</label></div>
          <input
            type="radio"
            id="15"
            name="percentage"
            value="15"
            className="radio"
            onChange={(e) => setRadio_value(e.target.value)}
          />
          <div className="label"><label for="15">15%</label></div>
          <input
            type="radio"
            id="20"
            name="percentage"
            value="20"
            className="radio"
            onChange={(e) => setRadio_value(e.target.value)}
          />
          <div className="label"><label for="20">20%</label></div>
        </div>
        <div className="container_button">
        <button className="button" onClick={(e) => {setTipvalue(Tip)}}>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
