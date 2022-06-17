import { Router, Route, Link } from "react-router-dom"
import CourseInfo from "../../components/CourseInfo";
import courseThumbnail from "../../images/courseThumbnail.png"
import "./style.css"
function Courses() {
    return (
        <div>
            <div className='register--backBtn'>
                <Link to="/home">
                    <svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 18L1 9.5L9.5 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>
            <h2>Các khóa học</h2>
            <CourseInfo courseThumbnail={courseThumbnail} />
            <Link to="lessons"><button className="viewCourse--btn">XEM BÀI HỌC</button></Link>
            <button className="longBtn">MUA KHÓA HỌC</button>
        </div>
    );
}

export default Courses;