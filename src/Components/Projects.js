import React from 'react'
import shopify from './Images/Shopify.png';
import web from './Images/portfolio_web.png';
import grocery from './Images/Mcjawz2.png';
import refresher from './Images/Refresher.png';
import {FaPython,FaJs,FaBootstrap,FaPhp,FaHtml5,FaCss3,FaReact,FaGithub} from 'react-icons/fa';
import {SiSelenium} from"react-icons/si"
import {Row,Col, Card, CardBody, CardTitle,CardText, CardImg,CardHeader} from 'reactstrap';
import Fade from 'react-reveal/Fade';




const Projects = () => {
    return (
<div class="container-fluid bg-dark pb-3"style={{marginTop:"-1px"}}>
             <div><h1 id="about-me">My Internships</h1></div>

                <div className="internship" style={{color:'white', margin:"auto",textAlign:"left", padding:"80px",textUnderlineOffset:"18%"}}>
                    <Fade left>
                          <div className="FadedBorder" style={{color:'white',fontSize:"30px",borderLeft:"4px solid #7289da",marginLeft:"10%"}}>
                              <div style={{textDecorationLine:"underline",textDecorationColor:"#7289da",marginLeft:"10px"}}>Continent 8 Technologies</div>
                              <div style={{marginLeft:"10px"}}><h5>&emsp;Data Analyst Intern</h5>
                                  <h6>&emsp; September 2021 - Current</h6></div>
                            </div>
                    </Fade> 
                </div>

            <div id="projects-div" class="container-fluid bg-dark pb-3" style={{paddingTop:"4em"}}>
                <div ><h1 id="about-me">My Projects</h1></div>
            </div>

    <div className='ShopifyProject'>
    <Fade bottom>
        <Row>
            <Col style={{paddingBottom:"22px"}} xs={12} md={6} >
                <Card className='h-100' style={{margin:"auto"}}>
                    <CardTitle style={{marginTop:"10px", fontSize:"20px"}}>Shopify Scraper Discord Bot<a href=""><FaGithub className='IconsInCardTitle'/></a></CardTitle>
                    <CardImg variant="top" src={shopify} />
                    <CardBody>
                        <CardText> 
                           
                            Used a REST API to extract variants and other valuable info from Shopify products.<br/>
                            Created a Discord bot which outputs Add To Cart links aswell as variants for any shopify product 
                   
                        <div className='CardIcons'><FaPython/>  </div>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
             <Col style={{paddingBottom:"22px"}} xs={12} md={6}>
                <Card className='h-100'style={{margin:"auto"}}>
                    <CardTitle  style={{marginTop:"10px", fontSize:"20px"}}>Miscellaneous Python Projects<a href=""><FaGithub className='IconsInCardTitle'/></a> </CardTitle>
                    <CardImg variant="top" src={refresher} />
                    <CardBody>
                        <CardText>
                            MyConcordia CO-OP Autologin &amp; Page Refresher<br/>
                            OpenSea Stats Scraper<br/>
                            NFT MetaData Scraper<br/>
                            <div className='CardIcons'><FaPython/>     <SiSelenium style={{fontSize:"30px"}}/></div>  
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        </Fade>
            
            <Fade bottom>
            <Row>
                <Col style={{paddingBottom:"22px"}} xs={12} md={6}>
                <Card className='h-100' style={{margin:"auto"}}>
                    <CardTitle style={{marginTop:"10px", fontSize:"20px"}}>McJawz Grocery Store<a href=""><FaGithub className='IconsInCardTitle'/></a></CardTitle>
                    <CardImg variant="top" src={grocery} />
                    <CardBody>
                        <CardText>
                            Created a database using XML. Integrated Add, Delete and Edit product functionalities.<br/>
                            Using the database created dynamic product and aisle pages.<br/>
                            Item availablility and carted products with cookies.<br/>
                            <div className='CardIcons'>
                            <FaJs/> <FaPhp/> <FaHtml5/> <FaCss3/> <FaBootstrap/></div>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col style={{paddingBottom:"22px"}} xs={12} md={6}>
                <Card className='h-100' style={{margin:"auto"}}>
                    <CardTitle style={{marginTop:"10px", fontSize:"20px"}}>Portfolio Wesbite<a href=""><FaGithub className='IconsInCardTitle'/></a></CardTitle>
                    <CardImg variant="top" src={web} />
                    <CardBody>
                    <CardText style={{margin:"auto"}}>
                              Created this Portfolio Website with HTML and CSS.<br/>
                              Used React to convert this to a single page app.<br/>
                             <div className='CardIcons'><FaReact/> <FaHtml5/> <FaCss3/> <FaBootstrap/></div>
                        </CardText>
                    </CardBody>
                </Card>
            </Col>
            </Row>
            </Fade>
            
    </div>
</div>
    )
}

export default Projects
