import React, { useState, useCallback } from "react";
import Count from "./Count";
import Button from "./Button";
import Title from "./Title";

const ParentComponent = () =>{
    const [age, setAge] = useState(27);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() =>{
        setAge(age + 1);
    }, [age]) //This says this function depends on age.

    const incremenSalary = useCallback(() =>{
        setSalary(salary + 1000);
    }, [salary]) 

    return(
        <div>
            <Title/>
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={incremenSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent;

//using memo, we can prevent re-render the Count component.
//Bcz, Count accept age or salary props. So, when it change then re-render only their Count component.
//But stil there is a problem for Button component. 
//Bcz, when call handleClick, then parentComponent re-render. This problem happen when pass function as the props.
//Thats why we need useCallback. 