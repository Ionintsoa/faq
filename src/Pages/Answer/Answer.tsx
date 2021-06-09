import React from 'react';
import Header from '../../Components/Header';
import AnswerBlock from '../../Components/AnswerBlock';
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import './Answer.css';

const validate = values => {
  const errors:any = {};
  if (!values.content) {
    errors.content = 'Required';
  } else if (values.content.length < 15) {
    errors.content = 'Answer must be 15 characters or more';
  }
  return errors;
};

function Answer(props) {
  let location = useLocation();
  const question = (location.questionIndex >= 0 && props.questionList && props.questionList[location.questionIndex]) ? props.questionList[location.questionIndex] : null;

  const addAnswer = (values) => {
    const newAnswer = {
      user: "Marc Lemon",
      content: values.content,
      postDate: new Date()
    }
    let questions = [...props.questionList];
    questions[location.questionIndex].answers.push(newAnswer);
    props.setQuestionList(questions);
  }

  const formik = useFormik({
    initialValues: {
      content: ''
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      addAnswer(values);
      resetForm();
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <Header />
      <div className="container answer-container">
        {
          question &&
          <div>
            <h1>{question.title}</h1>
            <h5>Posted on {question.postDate.toLocaleString()} by {question.user}</h5>
            <hr />
            <div className="question-description">
              <p>{question.content}</p>
            </div>
            <hr />
            <h4>Give your answer</h4>
            <div className="answer-form">
              <Form onSubmit={formik.handleSubmit}>
                <Form.Group>
                  <Form.Control as="textarea" id="content"  name="content" rows={3} onChange={formik.handleChange} value={formik.values.content} />
                  {formik.errors.content ? <span className="form-error">{formik.errors.content}</span> : null}
                </Form.Group>
                <Button type="submit" className="btn-success">Submit</Button>
              </Form>
            </div>
            <hr />
          </div>
        }
        {
          (question.answers.length > 0) &&
          <div>
            <h4>Answers({question.answers.length})</h4>
            <div className="answers">
              {
                question.answers.map((answer, index) => {
                  return <AnswerBlock user={answer.user} content={answer.content} postDate={answer.postDate} key={index} />
                })
              }
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Answer;
