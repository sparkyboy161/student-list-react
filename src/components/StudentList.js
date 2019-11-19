import React, { Component } from 'react';
import './StudentList.css';
import checkImg from '../img/check.svg';
import uncheckImg from '../img/uncheck.svg';
import tickImg from '../img/tick.svg';
import classNames from 'classnames'

class StudentList extends Component {
    render() {
        const {student, onClick} = this.props;
        let url = checkImg;
        if(this.props.student.isAbsent){
            url = uncheckImg;
        }
        return (
            <div className={classNames('studentList',{isAbsent: student.isAbsent===true})}>
                <p>{student.name}</p>
                <img onClick={onClick} src={url} alt='Cannot load'/>
            </div>
        );
    }
}

export default StudentList;