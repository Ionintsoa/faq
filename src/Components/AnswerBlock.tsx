import React from 'react';
import { Card } from 'react-bootstrap';
import './AnswerBlock.css';


function AnswerBlock(props) {
  return (
    <Card body className="answer-block">
      <h6>{props.user} - {props.postDate.toLocaleString()} </h6>
      <hr/>
      <p>{props.content}</p>
    </Card>
  );
}

export default AnswerBlock;