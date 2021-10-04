import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = (props) => {

    const elements = props.data.map(item =>{
        const {id, ...itemProps} = item;
        return(
            <EmployeesListItem key={id} {...itemProps}/> 
            // идинтично нижнему ряду
            // <EmployeesListItem name={item.name} salary={item.salary}/> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;