import { Container,Row } from 'react-bootstrap'
import {Leaf,Lemon,Frog,Car,Apple, Star, Hart} from '../../images'

export const Age4ColorIdentificationQuestion = {
    subject:'Color Identification',
    questions:[
        {
            key:'question 1',
            question:<div style={{width:"100%"}} align="center">
                <img src={Leaf} width={400}></img>
                <p className='question-text'>What is the color of leaf?</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='square' style={{background:'green',color:'white',fontWeight:"bolder"}}>Green</div>},
                {key:'2',answer:<div className='square' style={{background:'blue',color:'white',fontWeight:"bolder"}}>Blue</div>}
            ],
            correctAnswer:'1'
        },
        {
            key:'question 2',
            question:<div style={{width:"100%"}} align="center">
                <img src={Lemon} width={400}></img>
                <p className='question-text'>What is the color of lemon?</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'yellow',color:'black',fontWeight:"bolder"}}>Yellow</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'1'
        },
        {
            key:'question 3',
            question:<div style={{width:"100%"}} align="center">
                <img src={Frog} width={400}></img>
                <p className='question-text'>What is the color of frog?</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'3'
        },
        {
            key:'question 4',
            question:<div style={{width:"100%"}} align="center">
                <img src={Car} width={400}></img>
                <p className='question-text'>What is the color of car?</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'1'
        },
        {
            key:'question 5',
            question:<div style={{width:"100%"}} align="center">
                <img src={Apple} width={400}></img>
                <p className='question-text'>What is the color of apple?</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'2'
        },
        {
            key:'question 6',
            question:<div style={{width:"100%"}} align="center" className='img-container'>
                <img src={Star} width={400}></img>
                <div class="centered-text">Green</div>
                <p className='question-text'>Select the right Color of the star</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'3'
        },
        {
            key:'question 7',
            question:<div style={{width:"100%"}} align="center" >
                <div class="rectangle-shape">Blue</div>
                <p className='question-text'>Select the right Color of the Rectangle</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'1'
        },
        {
            key:'question 8',
            question:<div style={{width:"100%"}} align="center" className='img-container' >
                <img src={Hart} width={400}></img>
                <div class="centered-text">Red</div>
                <p className='question-text'>Select the right Color of the hart</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'2'
        },
        {
            key:'question 9',
            question:<div style={{width:"100%"}} align="center" className='img-container' >
                <Container>
                    <Row>
                        <div className='ellipse-small' style={{background:'blue',color:'black',fontWeight:"bolder"}}></div>
                        <div className='ellipse-small' style={{background:'red',color:'black',fontWeight:"bolder"}}></div>
                        <div className='ellipse-small' style={{background:'blue',color:'black',fontWeight:"bolder"}}></div>
                        <div className='ellipse-small' style={{background:'red',color:'black',fontWeight:"bolder"}}></div>
                        <div className='ellipse-small' style={{background:'blue',color:'black',fontWeight:"bolder"}}></div>
                        <div className='ellipse-small-border' style={{color:'black',fontWeight:"bolder"}}>?</div>
                    </Row>
                </Container>
                <p className='question-text'>What is the next color?</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'1'
        },
        {
            key:'question 10',
            question:<div style={{width:"100%"}} align="center">
                <Container>
                    <Row>
                        <div className='rectangle-small' style={{background:'red',color:'black',fontWeight:"bolder"}}></div>
                        <div className='rectangle-small' style={{background:'green',color:'black',fontWeight:"bolder"}}></div>
                        <div className='rectangle-small' style={{background:'yellow',color:'black',fontWeight:"bolder"}}></div>
                        <div className='rectangle-small' style={{background:'red',color:'black',fontWeight:"bolder"}}></div>
                        <div className='rectangle-small' style={{background:'green',color:'black',fontWeight:"bolder"}}></div>
                        <div className='rectangle-small' style={{background:'yellow',color:'black',fontWeight:"bolder"}}></div>
                        <div className='rectangle-small-border' style={{color:'black',fontWeight:"bolder"}}>?</div>
                    </Row>
                </Container>
                <p className='question-text'>What is the next color?</p>
            </div>,
            answers:[
                {key:'1',answer:<div className='ellipse' style={{background:'red',color:'black',fontWeight:"bolder"}}>Red</div>},
                {key:'2',answer:<div className='ellipse' style={{background:'blue',color:'black',fontWeight:"bolder"}}>Blue</div>},
                {key:'3',answer:<div className='ellipse' style={{background:'green',color:'black',fontWeight:"bolder"}}>Green</div>}
            ],
            correctAnswer:'1'
        }
    ]
}
