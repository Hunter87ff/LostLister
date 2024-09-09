import Header from "../Header";
import Footer from "../Footer";
import * as config from "../../config"


const itemList = config.items_data_model.map((item) => {
    // Transform the item data as needed
    return {
        id: item.id,
        created_at: item.created_at,
        title: item.title.toUpperCase(),
        details: item.details,
        resolved: item.resolved,
        owner: item.owner,
        founded_by: item.founded_by,
        founded_at: item.founded_at,
        reports: item.reports,
        image_url: item.image_url,
    };
  });



export default function Post() {
  return (
    <div className="mainPosts">
        <Header />
        <div className="postContainer">
        {itemList.map((item) => (
            <div key={item.id} className='itemPost post'>
                <img src={item.image_url} alt="" className="banner" />
                <div className="post-info px-0">
                    <h2>Title : {item.title}</h2>
                    <p>Details : {item.details}</p>
                    <p>Resolved : {item.resolved?"Resolved":"Not Resolved"}</p>
                    <p>Owner : {item.owner||"notFound"}</p>
                    <p>Founded By : {item.founded_by}</p>
                    <p>Founded At : {item.founded_at}</p>
                    <p>Spam Reports : {item.reports}</p>
                    <button className='bg-green-600' onClick={()=>{console.log("claimed : " + item.id)}}>Claim</button>              
                </div>
            </div>
        ))}
        </div>
        <Footer />
    </div>
  );
}