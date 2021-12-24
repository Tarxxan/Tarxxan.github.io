import img from './Images/ProgC.png';
import {FaGithub,FaFileAlt,FaLinkedin} from 'react-icons/fa';
import Resume from '../public/Resume_ChristianPangia.pdf'


const AboutMe = () => {
    return (
    <div id='AboutMeClass' className='AboutMeClass' style={{marginTop:"50px",paddingTop:"3em"}}>
            <div class="container-fluid bg-dark">
                <div id="about-me-row" class="row bg-dark">
                        <div class="d-flex justify-content-center col-lg-6">
                            <img src={img} alt="Programmer"></img>
                        </div>
                     <div class="d-flex justify-content-center col-lg-6">
                            <div id="about-me-div">
                                <h1 id="about-me">About Me</h1><br></br>
                                <h4> Hi, my name is <span style={{color:"#7289da"}}>Christian</span> and i'm a second year Computer Science student at Concordia University.<br></br><br></br>
                                I am experienced with languages such as <span style={{color:"#7289da"}}>Java, Javascript, Python.</span><br></br><br></br>
                                I am interested in creating new <span style={{color:"#7289da"}}>Web Technologies and Products</span> as well as automating web tasks using <span style={{color:"#7289da"}}> REST API's.</span><br></br><br></br>
                                Whenever possible, I apply my passion for developing and automation to simplify small tedious tasks.<br></br><br></br>
                                <span style={{color:"#7289da"}}>Check Me Out Below ! </span> </h4>
                                <h1 style={{fontSize:"75px"}}>
                                <a  href={"https://github.com/Tarxxan"} style={{color: "white"}}><FaGithub/> </a>
                                <a id="pdf" href={Resume} download style={{color: "white"}}><FaFileAlt/></a>
                                <a href={"https://www.linkedin.com/in/christian-pangia-henneveld/"} style={{color: "white"}}><FaLinkedin/> </a></h1>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default AboutMe
