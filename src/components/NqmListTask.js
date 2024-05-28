import React from 'react'

export default function NqmListTask({renderNqmListTasks }) {
    console.log(renderNqmListTasks);

    //render data
    let nqmElementTask = renderNqmListTasks.map((task, index)=>{
        return (
            <>
                <tr key={index}>
                    <td>{index+1}</td>    
                    <td>{task.nqm_taskId}</td> 
                    <td>{task.nqm_taskName}</td>     
                    <td>{task.nqm_level}</td>  
                    <td>
                        <button className='btn btn-success'>edit</button>
                        <button className='btn btn-danger'>remove</button>
                    </td>
                </tr>   

            </>
        )
    })
    
  return (
    <div>
        <h2>danh sách các nhiệm vụ </h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task ID</th>
                    <th>Task Name</th>
                    <th>Task level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {nqmElementTask}
            </tbody>
        </table>
    </div>
  )
}
