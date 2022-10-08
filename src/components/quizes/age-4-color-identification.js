import {Leaf} from '../../images'

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
        }
    ]
}
