
import Card from "../Card/Card";

export default function Gallery({list}){
    return <div className="row">
    {list && list.map(item => <div key={item.id} className="c-card"><Card  data={item}/></div>)}
</div>
}