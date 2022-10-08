import { useState } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getQuiz } from './quizes'
import { HappyFace,SadFace } from '../images'

const Quiz = () => {
    const params = useParams();
    const { innerWidth: width } = window;
    const [currentQuestion, setCurrentQuextion] = useState(9);
    const [displayModal, setDisplayModal] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const getQuestion = () => {
        const quiz = getQuiz(params.age, params.subject)
        return quiz.questions[currentQuestion]
    }

    const displayAnswerModal = () => {
        return <Modal show={displayModal} onHide={() => { }}
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header >
                <Modal.Title>{isCorrect ? 'Congratulations' : 'Let\'s try next Time'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ width: "100%" }} align="center">
                    <img src={isCorrect?HappyFace:SadFace} width={200} ></img>
                    <p className='mt-2'>
                        {isCorrect ? 'Your answer is right. Plase keep your good work and continue' :
                            'Your answer is wrong. But don\'t worry. Let\'s try in the next time'}
                    </p>
                </div>
            </Modal.Body>
        </Modal>

    }


    const renderQuestion = () => {
        const question = getQuestion()
        return <div className='question-container'>
            {question.question}
        </div>
    }

    const onSelectAnswer = (answer,correctAnswer) => {
        console.log('The link was clicked.', { answer });
        const isAnswerCorrect = answer===correctAnswer
        setIsCorrect(isAnswerCorrect)
        setDisplayModal(true)
        setTimeout(
            function() {
                const {questions} = getQuiz(params.age, params.subject)
                console.log('-------->',{length:questions.length,currentQuestion})
                if(questions.length>currentQuestion){
                    setCurrentQuextion(currentQuestion+1)
                    console.log('-------->',{currentQuestion})
                }
                setDisplayModal(false)
                
            },
            1000
        );
    }

    const renderAnswers = () => {
        const { answers,correctAnswer } = getQuestion()
        return <Row className='listCenter'>
            {answers.map(answer => {
                return <Col className='listCenter' onClick={() => { onSelectAnswer(answer.key,correctAnswer) }}>
                    {answer.answer}
                </ Col>
            })}
        </Row>
    }

    return (
        <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 50
        }}>
            <div style={{ width: '100%' }}>
                {displayAnswerModal()}
                {renderQuestion()}
                {renderAnswers()}
            </div>
        </div>
    );
};

export default Quiz;
