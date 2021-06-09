import React from 'react';
import Header from '../../Components/Header';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom'

import './Ask.css';

const validate = values => {
  const errors:any = {};
  if (!values.content) {
    errors.content = 'Required';
  } else if (values.content.length < 15) {
    errors.content = 'Answer must be 15 characters or more';
  }

  if (!values.title) {
    errors.title = 'Required';
  }

  return errors;
};

function Ask(props) {
  let history = useHistory();

  const addQuestion = (values) => {
    const newQuestion = {
      user: "Marc Lemon",
      title: values.title,
      content: values.content,
      postDate: new Date(),
      answers:[]
    }
    let questions = [...props.questionList];
    questions.push(newQuestion);
    props.setQuestionList(questions);
  }

  const formik = useFormik({
    initialValues: {
      title: '',
      content: ''
    },
    validate,
    onSubmit: (values) => {
      addQuestion(values);
      history.push("/questions");
    },
  });



  return (
    <div>
      <Header />
      <div className="container">
        <h1>Ask a question</h1>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" id="title" name="title" placeholder="Table update SQL" onChange={formik.handleChange} value={formik.values.title} />
            {formik.errors.title ? <span className="form-error">{formik.errors.title}</span> : null}
          </Form.Group>
          <Form.Group>
            <Form.Label>Question Description</Form.Label>
            <Form.Control as="textarea" rows={3} id="content" name="content" onChange={formik.handleChange} value={formik.values.content} />
            {formik.errors.content ? <span className="form-error">{formik.errors.content}</span> : null}
          </Form.Group>

          <Button type="submit" className="btn-success">Submit</Button>
        </Form>
      </div>
    </div>
  );
}

export default Ask;
