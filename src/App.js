import React, { Component } from 'react';
import StudentList from './components/StudentList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      studentList : [
        {name: 'Huy', isAbsent: true},
        {name: 'Lam', isAbsent: false},
        {name: 'Trung Anh', isAbsent: true}
      ]
    }
  }

  onClickedItem(student){
    return (event)=>{
      const {studentList} = this.state;
      let index = studentList.indexOf(student);
      this.setState({
        studentList:[
          ...studentList.slice(0,index),
          {
            ...student,
            isAbsent: !student.isAbsent
          },
          ...studentList.slice(index+1)
        ]
      })
    }    
  }

  render(){
    const {studentList} = this.state;
    return (
      <div className="App">
        <h1>Student List</h1>
        {
          studentList.map((student,index) =>
            <StudentList onClick={this.onClickedItem(student)} student={student} key={index}/>
          )
        }
        <div className="footer">
          <input type="text" placeholder="Add a student"/>
        </div>
      </div>
    );
  }
}

export default App;
