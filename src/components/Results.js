import { storageName } from "../data/keyWords"
import './style/results.css'

export const Results =()=>{
  const results = JSON.parse(localStorage.getItem(storageName))

  if(results){
    return(
      <div className="result">
        <h3 className="result__title">Result list</h3>
        <table className="result__table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Time</th>
          </tr>
          </thead>
          <tbody>
          {results.map((elem, i)=>{
            return(
              <tr key={i}>
                <td>{elem.name}</td>
                <td>{elem.time}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }else{
    return(
      <div className="result">
        <h3 className="result__title">No results</h3>
      </div>
    )
  }
}
