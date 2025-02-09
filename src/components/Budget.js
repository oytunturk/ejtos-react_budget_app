import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const MAX_BUDGET = 20000

const Budget = () => {
    const { expenses, budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
	if(event.target.value > MAX_BUDGET) {
	    alert("The value cannot exceed max budget "+MAX_BUDGET);
            setNewBudget(MAX_BUDGET);
	} else if (event.target.value < totalExpenses) {
	    alert("You cannot reduce the budget value lower than the spending "+totalExpenses);
            setNewBudget(totalExpenses);
	} else {
            setNewBudget(event.target.value);
	}
    }
    return (
<div className='alert alert-secondary'>
    <span>Budget: {currency}</span>
    <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
