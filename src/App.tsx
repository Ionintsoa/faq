import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import QuestionList from './Pages/QuestionList/QuestionList'
import Answer from './Pages/Answer/Answer'
import Ask from './Pages/Ask/Ask'
import './App.css';

const initial_questions = [{
  title: "Change column type",
  content: "Hello all, can anyone please show how to change the type of a column in an SQL database?",
  postDate: new Date('2021-06-07'),
  user: "John Smith",
  answers: [{
    user: "Mary Simons",
    content: "Hi, you can use the Alter statement",
    postDate: new Date('2021-06-07')
  }]
}]

export default function BasicExample() {
  const [questionList, setQuestionList] = useState(initial_questions);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <QuestionList questionList={questionList} />
          </Route>
          <Route path="/questions">
            <QuestionList questionList={questionList} />
          </Route>
          <Route path="/answer">
            <Answer questionList={questionList} setQuestionList={setQuestionList} />
          </Route>
          <Route path="/ask">
            <Ask questionList={questionList} setQuestionList={setQuestionList} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}