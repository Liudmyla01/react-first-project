import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';



function App() {

  let data = [
    {id:1, name: 'Liuda', salary: 905, increase:true},
    {id:2, name: 'Alex', salary: 805, increase:true},
    {id:3, name: 'Tom', salary: 705, increase:false},
    {id:4, name: 'Mat', salary: 5, increase:false}
  ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>
        <EmployeesAddForm/>
    </div>
  );
}

export default App;
