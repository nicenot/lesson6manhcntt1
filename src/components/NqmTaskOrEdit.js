import React, { useState } from 'react'

export default function NqmTaskOrEdit({nqmOnSubmit}) {
        const nqmTakssObj = {
            nqm_taskId:0,
            nqm_taskName:"",
            nqm_level:""
        }
        const[nqmTask, setNqmTask] =useState(nqmTakssObj);

        //hàm sử lý sự kiện dựa trên điều kiện thay đổi sự kiện
        const nqmHandleChange = (nqmEvent)=>{
            let Name = nqmEvent.target.name;
            let value = nqmEvent.target.value;
            
            setNqmTask(prev => {
                return{
                    ...prev,
                [Name]:value,
                }
            })
        }
      const nqmHandleSubmit = (nqmEvent)=> {
        nqmEvent.preventDefault();
        nqmOnSubmit(nqmTask)
        
      }
  return (
    <div>
        <h2>them moi task</h2>
        <form>
            <div>
                <label>Task ID</label>
                <input name='nqm_TaskID' value={nqmTask.nqm_taskId} onChange={nqmHandleChange} />
            </div>
            <div>
                <label>Task Name</label>
                <input name='nqm_TaskName' value={nqmTask.nqm_taskName} onChange={nqmHandleChange} />
            </div>
            <div>
                <label>Task level</label>
               <select name='nqm_level' value={nqmTask.nqm_level}>
                <option value={'Small'}></option>
                <option value={'Medium'}></option>
                <option value={'High'}></option>
               </select>
            </div>
            <button onClick={'nqmHandleSubmit'}>ghi lại</button>
        </form>
    </div>
  )
}
