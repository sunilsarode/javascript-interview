export default function Shimmer(){
    return Array(20).fill(0).map((item,index)=>{
        return  <div key={index} className="card">
        <h3>...</h3>
        <div className="shimm"></div>
    </div>
    })
}