import Categories from "./Categories"
import LatestPost from "./LatestPost"




export default function MainContainer() {
    return (
        <div className="main" >
            <LatestPost />
            <div className="categories-block">
                <h2>Posts</h2>
                <div className="block-divider"></div>
            </div>
            <Categories />
        </div>
    )
}