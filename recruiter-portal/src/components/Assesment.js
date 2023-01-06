import React, { useState } from "react";
import Data from '../datatables/Data'

export default function Assesment() {
    const questions = [
        {
            question: 'JSX is typesafe?',
            answers: [
                { answer: 'True', isCorrect: true },
                { answer: 'False', isCorrect: false },
                { answer: 'None of the above', isCorrect: false },
                { answer: 'cannpnt be determined', isCorrect: false },
            ],

        },

        {
            question: 'React merges the object you provide into the current state using which of the following',
            answers: [
                { answer: 'setState()', isCorrect: true },
                { answer: 'State()', isCorrect: false },
                { answer: 'getState()', isCorrect: false },
                { answer: 'None of the above', isCorrect: false },

            ],
        },
        {
            question: 'Arbitary inputs of components are called?',
            answers: [
                { answer: 'Keys', isCorrect: false },
                { answer: 'Props', isCorrect: true },
                { answer: 'Elements', isCorrect: false },
                { answer: 'Ref', isCorrect: false },
            ],
        },
        {
            question: '______ can be done while more than one Element needs to be returned from a component?',
            answers: [
                { answer: 'Abstraction', isCorrect: false },
                { answer: "Packing", isCorrect: false },
                { answer: 'Insulation', isCorrect: false },
                { answer: 'Wrapping', isCorrect: true },
            ],
        },
        {
            question: 'which of the following needs to be updated to achieve dyanamic UI updates?',
            answers: [
                { answer: 'State', isCorrect: true },
                { answer: 'Props', isCorrect: false },
                { answer: 'Components', isCorrect: false },
                { answer: 'None of the Above', isCorrect: false },
            ],
        },

        {
            question: 'Lifecycle methods are mainly used _____',
            answers: [
                { answer: 'State', isCorrect: false },
                { answer: 'Props', isCorrect: false },
                { answer: 'Components', isCorrect: false },
                { answer: 'Free up Resources', isCorrect: true },
            ],

        },
    ];
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
            <Data/>
		</div>
	);
}









