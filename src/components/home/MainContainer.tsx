import Courses from "./Courses"
// import * as images from "../static/img/banner"


export default function MainContainer() {
    return (
        <div className="main" >
        <div className="post" >
            <img src="https://img.freepik.com/premium-photo/crimson-flash-drive-isolated-clean-white-background-clear-png-white-background_94628-93417.jpg?semt=ais_hybrid" alt="" className="banner"/>
            <div className="post-info" >
                <h2>Bhadwa University</h2>
                <p>Bhadwa University is a private university located in Bharasat, Awest Bengal, India. It was established in 1999. It is the best university in the world in terms of providing top quality un-employed skill less students</p>
            </div>
        </div>
        <Courses/>
        <center><div className="center-header" >Recognitions, Memberships and Approvals</div></center>
        <div className="post" >
            <img src="static/img/banner/grad_std.png" alt="" className="banner"/>
            <div className="post-info" >
                <h2>Bhadwa University</h2>
                <p>Bhadwa University is a private university located in Bharasat, Awest Bengal, India. It was established in 1999. It is the best university in the world in terms of providing top quality un-employed skill less students</p>
            </div>
        </div>
        
    </div>
    )
    }