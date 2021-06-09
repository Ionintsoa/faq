import React from 'react';
import Header from '../../Components/Header';
import Question from '../../Components/Question';
import { useLocation } from 'react-router-dom';
import './QuestionList.css';

function QuestionList(props) {
  let location = useLocation();
  let questionsToShow = props.questionList ? props.questionList : null;

  if(location.query) {
    questionsToShow = props.questionList.filter(question => question.title.includes(location.query) || question.content.includes(location.query));
  }

  return (
    <div>
      <Header />
      <div className="container">
        <h1>All questions</h1>
        <div className="question-list">
          {
            questionsToShow && questionsToShow.map((question, index) => {
              return <Question title={question.title} content={question.content} user={question.user} postDate={question.postDate} answerNumber={question.answers.length} index={index} key={index}/>
            })
          }
        </div>
        
      </div>
    </div>
  );
}

export default QuestionList;
