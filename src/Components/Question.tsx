import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Question.css';


function Question(props) {
  return (
    <Card className="question">
      <Card.Header>{props.title} : posted on {props.postDate.toLocaleString()} by {props.user}</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.content}
        </Card.Text>
        <span className="answer-number">{props.answerNumber} answer(s)</span>
        <Link to={{pathname: '/answer/', questionIndex: props.index}} className="btn btn-primary">
          Answer
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Question;