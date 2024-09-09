
import * as config from "../../config"


export default function Categories() {
    return (
        <div className="post">

            {config.items_data_model.map((item) => (
                <div className="post-content rounded">
                    <div key={item.id} className='post-block'>
                        <img src={item.image_url} alt="" className="rounded object-cover aspect-[4/3" />
                        <div className="text-left" >
                            <h2>Item : {item.title}</h2>
                            <p>Details : {item.details}</p>
                            <p>Resolved : {item.resolved?"Resolved":"Not Resolved"}</p>
                            {/* <p>Owner : {item.owner||"notFound"}</p> */}
                            <p>Founded By : {item.founded_by}</p>
                            <p>Founded At : {item.founded_at}</p>
                            {/* <p>Spam Reports : {item.reports}</p> */}
                        </div>
                        <br />
                    </div>
                    <button  className='bg-green-600 float-left' onClick={()=>{console.log("claimed : " + item.id)}}>Claim</button>              
                </div>
            ))} 
    </div >
    );
}