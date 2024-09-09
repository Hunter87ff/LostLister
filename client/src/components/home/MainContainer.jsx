import Courses from "./Courses"
import LatestPost from "./LatestPost"




export default function MainContainer() {
    return (
        <div className="main" >
            <LatestPost />
            <div className="categories-block">
                <h2>Categories</h2>
                <div className="block-divider"></div>
            </div>
            <Courses />
        </div>
    )
}