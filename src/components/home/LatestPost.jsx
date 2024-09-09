import * as config from "../../config"



const item = config.items_data_model[config.items_data_model.length-1];
export default function LatestPost() {

return  (
    <div key={item.id} className='itemPost post latestPost grid'>
    <img src={item.image_url} alt="" className="banner" />
    <div className="post-info px-0">
        <h2>Item : {item.title}</h2>
        <p>Details : {item.details}</p>
        <p>Resolved : {item.resolved?"Resolved":"Not Resolved"}</p>
        <p>Owner : {item.owner||"Unknown"}</p>
        <p>Founded By : {item.founded_by}</p>
        <p>Founded At : {item.founded_at}</p>
        <p>Spam Reports : {item.reports}</p>
        <button className='bg-green-600 ml-0 w-50' onClick={()=>{console.log("claimed : " + item.id)}}>Claim</button>
        <button className="bg-red-400 text-white ml-0 w-50">Report</button>
    </div>
</div>
);
}