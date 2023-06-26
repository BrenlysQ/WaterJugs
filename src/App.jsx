import './App.css'
import { useState } from 'react';
import { evaluateValues, fillProcess} from '../src/waterJug'
function App() {

  const [valueX, setValueX] = useState('');
  const [valueY, setValueY] = useState('');
  const [valueZ, setValueZ] = useState('');
  const [datas, setDatas]= useState({})
 var isSolution= true
  const handleSubmit=(e)=>{
    e.preventDefault() 
    if(valueX,valueY, valueZ){
      isSolution= evaluateValues(valueX,valueY, valueZ)
      if(isSolution)
      {
        setDatas(fillProcess(valueX,valueY, valueZ))
      }
    }
    else{
      alert('Enter values to X Y Z')
    }
  }

  const validate=(e)=>{
    const valid =e.target.validity.valid
    if(valid){
         setValueX(e.target.value)
    }
  }

  const validateY=(e)=>{
    const valid =e.target.validity.valid
    if(valid){
         setValueY(e.target.value)
    }
  }
    const validateZ=(e)=>{
    const valid =e.target.validity.valid
    if(valid){
         setValueZ(e.target.value)
    }
  }

  return (
    <div>
      <h1>Water Jug Challenge</h1>
      <div className='general-container'>
        <form className='' onSubmit={handleSubmit}>
          <div className="card">
              <label className=''>Enter size of bucket x</label>
              <input className='input' type="text" id="x" value={valueX}  pattern="[0-9]{0,100}" onChange={validate} ></input>
              </div>
            <div className="card">
              <label className=''>Enter size of bucket y</label>
              <input className='input' type="text" id="y" value={valueY} pattern="[0-9]{0,100}" onChange={validateY}></input>
            </div>
            <div className="card">
              <label className=''>Enter amount wanted</label>
              <input  className='input' type="text" id="z" value={valueZ} pattern="[0-9]{0,100}" onChange={validateZ} ></input>
            </div>  
            <div className="card">
              <button type="submit" id="calculate">Calculate</button>
            </div> 
        </form>
        <div className='table-result'>
          {(!datas || Object.entries(datas).length===0)  && <h1>No solution</h1>}
          <table className='table' >
            <thead>
              <tr>
                <th>x</th>
                <th>y</th>
              </tr>
              </thead>  
            <tbody>
              <td>
                {datas && Object.keys(datas).length !==0 && datas.dataA.map((ele, index)=>(<tr key={index}>{ele}</tr>))}
             </td>
             <td>
                {datas && Object.keys(datas).length !==0 && datas.dataB.map((ele, index)=>(<tr key={index}>{ele}</tr>))}
             </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
