import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const optionStyle = {
    'color': 'white',
    'background-color': 'green',
};

const Currency = () => {
  const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                currency: val,
            })
    }
    return (
      <div class='select-currency'> Currency {
	  <select name="Currency" id="Currency" onChange={(val) => this.changeCurrency(val.target.value)}>
              <option value="$" style={optionStyle} selected="selected">$ - Dollar</option>
	      <option value="£" style={optionStyle}>£ - Pound</option>
              <option value="€" style={optionStyle}>€ - Euro</option>
	      <option value="₹" style={optionStyle}>₹ - Ruppee</option> 
	  </select>	
      }	
      </div>
    );
};

export default Currency;
