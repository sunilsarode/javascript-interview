export default function Card({item}){
    console.log(item);
    return <div className="card">
        <h3>{item.title}</h3>
        <img src={item.url} alt="meme"/>
    </div>
}