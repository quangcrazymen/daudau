import { Link } from "react-router-dom"
import { db } from "../../firebase-config"
import { collection, getDocs } from "firebase/firestore/lite"
import VideoCard from "../../components/VideoCard"
import sideBarBtn from "../../images/sideBarBtn.png"
import logo from "../../images/smallLogo.png"
import profilePicture from "../../images/profilePicture.png"
import heroImage from "../../images/heroImage.png"
import "./style.css"
import FooterNav from "../../components/FooterNav"
import { useState, useEffect } from "react"
// Use htmltagwrap Alt+W
function Home() {

    const [lessons, setLessons] = useState([])
    const lessonsCollectionRef = collection(db, "Courses/Age 3 to 6/Lessons")


    useEffect(() => {
        async function getLessons() {
            const data = await getDocs(lessonsCollectionRef)
            setLessons(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getLessons()
    }, [])

    return (
        <div className="homepage">
            <div className="topNav">
                <div className="topNav--left">
                    <img className="sideBarBtn" src={sideBarBtn} alt="sideBarBtn" />
                    <img className="logo--small" src={logo} alt="Small logo" />
                    <h2 className="logo--text">Shield.</h2>
                </div>
                <img className="picture--profile" src={profilePicture} alt="Profile pic" />
            </div>
            <div className="content">
                <div className="heroImage">
                    <div className="heroWrapper">
                        <h2 className="home--heroTitle">Giáo dục giới tính</h2>
                        <button className="home--moreInfo">Tìm hiểu thêm</button>
                    </div>
                    <img src={heroImage} alt="family"></img>
                </div>

                <div className="features--bar">
                    <div className="feature--btn">
                        <Link to="/video">
                            <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.4134 9.33159L7.77442 0.713004C6.98229 0.243431 6.08321 -0.00255911 5.1685 2.0075e-05C4.25379 0.00259926 3.35603 0.253655 2.56643 0.727689C1.77682 1.20172 1.12348 1.88185 0.672784 2.69898C0.222085 3.51611 -0.00992292 4.44114 0.000325378 5.38011V22.6795C0.000325378 24.0906 0.546362 25.4439 1.51831 26.4417C2.49026 27.4394 3.80851 28 5.18306 28C6.09297 27.9984 6.98654 27.7517 7.77442 27.2844L22.4134 18.6658C23.2 18.1984 23.853 17.527 24.307 16.7187C24.761 15.9105 25 14.9939 25 14.0609C25 13.1279 24.761 12.2113 24.307 11.4031C23.853 10.5949 23.2 9.92339 22.4134 9.45604V9.33159ZM20.898 15.85L6.25901 24.593C5.9309 24.7839 5.5602 24.8842 5.18306 24.8842C4.80592 24.8842 4.43522 24.7839 4.10711 24.593C3.77993 24.3991 3.50824 24.1202 3.31937 23.7843C3.1305 23.4484 3.0311 23.0673 3.03116 22.6795V5.31788C3.0311 4.93004 3.1305 4.54901 3.31937 4.21312C3.50824 3.87722 3.77993 3.59829 4.10711 3.40437C4.43657 3.21637 4.80617 3.11483 5.18306 3.10878C5.55969 3.11672 5.92885 3.21814 6.25901 3.40437L20.898 12.0852C21.2253 12.279 21.4971 12.5579 21.6861 12.8938C21.875 13.2297 21.9745 13.6108 21.9745 13.9987C21.9745 14.3866 21.875 14.7677 21.6861 15.1036C21.4971 15.4395 21.2253 15.7184 20.898 15.9122V15.85Z" fill="#4749A1" />
                            </svg>
                        </Link>
                        <p className="feature--text">Video</p>
                    </div>
                    <div className="feature--btn">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 18.2C6.24288 18.2 5.99154 18.2762 5.77776 18.4191C5.56397 18.5619 5.39735 18.765 5.29896 19.0025C5.20056 19.2401 5.17482 19.5014 5.22498 19.7536C5.27514 20.0058 5.39895 20.2374 5.58076 20.4192C5.76257 20.601 5.99421 20.7249 6.24638 20.775C6.49856 20.8252 6.75994 20.7994 6.99749 20.701C7.23503 20.6026 7.43806 20.436 7.58091 20.2222C7.72376 20.0085 7.8 19.7571 7.8 19.5C7.8 19.1552 7.66304 18.8246 7.41924 18.5808C7.17544 18.337 6.84478 18.2 6.5 18.2ZM22.178 13L23.777 11.401C24.5073 10.6697 24.9176 9.6785 24.9176 8.645C24.9176 7.6115 24.5073 6.62025 23.777 5.889L20.098 2.223C19.3667 1.49266 18.3755 1.08243 17.342 1.08243C16.3085 1.08243 15.3173 1.49266 14.586 2.223L13 3.822C12.9796 2.80123 12.5597 1.82918 11.8305 1.11457C11.1013 0.399963 10.121 -0.000204136 9.1 7.81228e-08H3.9C2.86566 7.81228e-08 1.87368 0.410892 1.14228 1.14228C0.410892 1.87368 0 2.86566 0 3.9V22.1C0 23.1343 0.410892 24.1263 1.14228 24.8577C1.87368 25.5891 2.86566 26 3.9 26H22.1C23.1343 26 24.1263 25.5891 24.8577 24.8577C25.5891 24.1263 26 23.1343 26 22.1V16.9C26.0002 15.879 25.6 14.8987 24.8854 14.1695C24.1708 13.4403 23.1988 13.0204 22.178 13ZM10.4 22.1C10.4 22.4448 10.263 22.7754 10.0192 23.0192C9.77544 23.263 9.44478 23.4 9.1 23.4H3.9C3.55522 23.4 3.22456 23.263 2.98076 23.0192C2.73696 22.7754 2.6 22.4448 2.6 22.1V3.9C2.6 3.55522 2.73696 3.22456 2.98076 2.98076C3.22456 2.73696 3.55522 2.6 3.9 2.6H9.1C9.44478 2.6 9.77544 2.73696 10.0192 2.98076C10.263 3.22456 10.4 3.55522 10.4 3.9V22.1ZM13 7.488L16.432 4.056C16.6756 3.81387 17.0051 3.67797 17.3485 3.67797C17.6919 3.67797 18.0214 3.81387 18.265 4.056L21.944 7.8C22.1861 8.04357 22.322 8.37306 22.322 8.7165C22.322 9.05994 22.1861 9.38943 21.944 9.633L18.2 13.377L13 18.512V7.488ZM23.4 22.1C23.4 22.4448 23.263 22.7754 23.0192 23.0192C22.7754 23.263 22.4448 23.4 22.1 23.4H12.766C12.8994 23.0147 12.9739 22.6115 12.987 22.204L19.591 15.6H22.1C22.4448 15.6 22.7754 15.737 23.0192 15.9808C23.263 16.2246 23.4 16.5552 23.4 16.9V22.1Z" fill="#4749A1" />
                        </svg>
                        <p className="feature--text">Thư viện</p>
                    </div>
                    <div className="feature--btn">
                        <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.9895 7.80805C23.9895 7.80805 23.9895 7.80805 23.9895 7.69177L23.9042 7.47375C23.8746 7.42749 23.8413 7.38374 23.8047 7.34294C23.7667 7.28141 23.7239 7.22308 23.6768 7.16852L23.5489 7.06678L23.3215 6.9505L12.661 0.220931C12.435 0.076554 12.174 0 11.9076 0C11.6412 0 11.3802 0.076554 11.1543 0.220931L0.579039 6.9505L0.451113 7.06678L0.323186 7.16852C0.276069 7.22308 0.233291 7.28141 0.19526 7.34294C0.158718 7.38374 0.125445 7.42749 0.0957621 7.47375L0.0104778 7.69177C0.0104778 7.69177 0.0104778 7.69177 0.0104778 7.80805C-0.0034926 7.93361 -0.0034926 8.06039 0.0104778 8.18595V20.8893C0.00999441 21.1363 0.0710809 21.3793 0.18797 21.5955C0.304859 21.8117 0.473695 21.9938 0.678537 22.1247L11.339 28.8543C11.4047 28.8957 11.4768 28.9252 11.5523 28.9415C11.5523 28.9415 11.6233 28.9415 11.666 28.9415C11.9064 29.0195 12.1646 29.0195 12.4051 28.9415C12.4051 28.9415 12.4762 28.9415 12.5188 28.9415C12.5943 28.9252 12.6664 28.8957 12.732 28.8543L23.3215 22.1247C23.5263 21.9938 23.6951 21.8117 23.812 21.5955C23.9289 21.3793 23.99 21.1363 23.9895 20.8893V8.18595C24.0035 8.06039 24.0035 7.93361 23.9895 7.80805ZM10.5288 25.0171L2.71114 20.0753V10.8022L10.5288 15.7295V25.0171ZM11.9503 13.215L3.9904 8.18595L11.9503 3.17148L19.9101 8.18595L11.9503 13.215ZM21.1894 20.0753L13.3717 25.0171V15.7295L21.1894 10.8022V20.0753Z" fill="#4749A1" />
                        </svg>
                        <p className="feature--text">Game</p>
                    </div>
                    <div className="feature--btn">
                        <Link to="courses">
                            <svg width="21" height="26" viewBox="0 0 21 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.25 19.5C4.99041 19.5 4.73665 19.5762 4.52081 19.7191C4.30497 19.8619 4.13675 20.065 4.03741 20.3025C3.93807 20.5401 3.91208 20.8014 3.96272 21.0536C4.01336 21.3058 4.13837 21.5374 4.32192 21.7192C4.50548 21.901 4.73934 22.0249 4.99394 22.075C5.24854 22.1252 5.51244 22.0994 5.75227 22.001C5.9921 21.9026 6.19708 21.736 6.3413 21.5222C6.48552 21.3085 6.5625 21.0571 6.5625 20.8C6.5625 20.4552 6.42422 20.1246 6.17808 19.8808C5.93194 19.637 5.5981 19.5 5.25 19.5ZM5.25 11.7C4.99041 11.7 4.73665 11.7762 4.52081 11.9191C4.30497 12.0619 4.13675 12.265 4.03741 12.5025C3.93807 12.7401 3.91208 13.0014 3.96272 13.2536C4.01336 13.5058 4.13837 13.7374 4.32192 13.9192C4.50548 14.101 4.73934 14.2249 4.99394 14.275C5.24854 14.3252 5.51244 14.2994 5.75227 14.201C5.9921 14.1026 6.19708 13.936 6.3413 13.7222C6.48552 13.5085 6.5625 13.2571 6.5625 13C6.5625 12.6552 6.42422 12.3246 6.17808 12.0808C5.93194 11.837 5.5981 11.7 5.25 11.7ZM5.25 3.9C4.99041 3.9 4.73665 3.97624 4.52081 4.11909C4.30497 4.26194 4.13675 4.46497 4.03741 4.70251C3.93807 4.94006 3.91208 5.20144 3.96272 5.45362C4.01336 5.70579 4.13837 5.93743 4.32192 6.11924C4.50548 6.30105 4.73934 6.42486 4.99394 6.47502C5.24854 6.52518 5.51244 6.49944 5.75227 6.40104C5.9921 6.30265 6.19708 6.13602 6.3413 5.92224C6.48552 5.70846 6.5625 5.45712 6.5625 5.2C6.5625 4.85522 6.42422 4.52456 6.17808 4.28076C5.93194 4.03696 5.5981 3.9 5.25 3.9ZM21 3.9C21 2.86566 20.5852 1.87368 19.8467 1.14228C19.1083 0.410892 18.1068 0 17.0625 0H3.9375C2.89321 0 1.89169 0.410892 1.15327 1.14228C0.414843 1.87368 0 2.86566 0 3.9V6.5C0.00578893 7.46207 0.370402 8.38807 1.02375 9.1C0.370402 9.81193 0.00578893 10.7379 0 11.7V14.3C0.00578893 15.2621 0.370402 16.1881 1.02375 16.9C0.370402 17.6119 0.00578893 18.5379 0 19.5V22.1C0 23.1343 0.414843 24.1263 1.15327 24.8577C1.89169 25.5891 2.89321 26 3.9375 26H17.0625C18.1068 26 19.1083 25.5891 19.8467 24.8577C20.5852 24.1263 21 23.1343 21 22.1V19.5C20.9942 18.5379 20.6296 17.6119 19.9762 16.9C20.6296 16.1881 20.9942 15.2621 21 14.3V11.7C20.9942 10.7379 20.6296 9.81193 19.9762 9.1C20.6296 8.38807 20.9942 7.46207 21 6.5V3.9ZM18.375 22.1C18.375 22.4448 18.2367 22.7754 17.9906 23.0192C17.7444 23.263 17.4106 23.4 17.0625 23.4H3.9375C3.5894 23.4 3.25556 23.263 3.00942 23.0192C2.76328 22.7754 2.625 22.4448 2.625 22.1V19.5C2.625 19.1552 2.76328 18.8246 3.00942 18.5808C3.25556 18.337 3.5894 18.2 3.9375 18.2H17.0625C17.4106 18.2 17.7444 18.337 17.9906 18.5808C18.2367 18.8246 18.375 19.1552 18.375 19.5V22.1ZM18.375 14.3C18.375 14.6448 18.2367 14.9754 17.9906 15.2192C17.7444 15.463 17.4106 15.6 17.0625 15.6H3.9375C3.5894 15.6 3.25556 15.463 3.00942 15.2192C2.76328 14.9754 2.625 14.6448 2.625 14.3V11.7C2.625 11.3552 2.76328 11.0246 3.00942 10.7808C3.25556 10.537 3.5894 10.4 3.9375 10.4H17.0625C17.4106 10.4 17.7444 10.537 17.9906 10.7808C18.2367 11.0246 18.375 11.3552 18.375 11.7V14.3ZM18.375 6.5C18.375 6.84478 18.2367 7.17544 17.9906 7.41924C17.7444 7.66304 17.4106 7.8 17.0625 7.8H3.9375C3.5894 7.8 3.25556 7.66304 3.00942 7.41924C2.76328 7.17544 2.625 6.84478 2.625 6.5V3.9C2.625 3.55522 2.76328 3.22456 3.00942 2.98076C3.25556 2.73696 3.5894 2.6 3.9375 2.6H17.0625C17.4106 2.6 17.7444 2.73696 17.9906 2.98076C18.2367 3.22456 18.375 3.55522 18.375 3.9V6.5Z" fill="#4749A1" />
                            </svg>
                        </Link>
                        <p className="feature--text">Các khóa học</p>
                    </div>
                </div>
                <div className="recently--feature">
                    <h2>Gần đây</h2>
                    <p>Xem tất cả</p>
                </div>
                <div className="recently--videos">
                    {
                        lessons.map(lesson => <VideoCard content={{ ...lesson }} key={lesson.Index} />)
                    }

                </div>
            </div>
            <FooterNav />
            {/* <Router>
                <Route path="courses" element={<CoursesPage/>} />
            </Router> */}
        </div>
    );
}

export default Home;