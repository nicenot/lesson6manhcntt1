import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import NqmListTask from './components/NqmListTask';
import NqmTaskOrEdit from './components/NqmTaskOrEdit';

function App() {
  //mock data 
  const nqm_listTasks = [
    { nqm_taskId:2210900039,nqm_taskName:"nguyễn quang mạnh", nqm_level:"Small" },
    { nqm_taskId:1,nqm_taskName:"Học lập trình frontend", nqm_level:"Small" },
    { nqm_taskId:2, nqm_taskName:"Học lập trình reactjs",nqm_level:"Medium"},
    { nqm_taskId:3, nqm_taskName:"Lập trình với Frontend - Reactjs",nqm_level:"High"},
    { nqm_taskId:4, nqm_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",nqm_level:"Small"},
   ]

    const [nqmlistTasks, setNqmListTasks] = useState(nqm_listTasks);


    const nqmHandleSubmit = (nqmParam)=>{
      console.log("app:",nqmParam);
      setNqmListTasks(prev =>{
        return[
          ...prev,
        ]
      })
    }

  return (
    <div className="container border">  
      <h1>nguyễn quang mạnh</h1>
      <hr/>
      <div>
        {/*danh sach list tasks*/}
       <NqmListTask renderNqmListTasks  =  {nqmlistTasks} />
      </div>
      <div>
        <NqmTaskOrEdit nqmOnSubmit={nqmHandleSubmit}/>
      </div>
    </div>
  );
}

export default App;
