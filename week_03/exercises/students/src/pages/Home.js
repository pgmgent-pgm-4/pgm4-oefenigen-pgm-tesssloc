import React from 'react'
import StudentList from '../components/StudentList'
import allStudents from "../data/students";
import { useEffect, useState } from 'react';
import StudentSearchForm from '../components/StudentSearchForm';

export default function Home() {
    const [students, setStudents] = useState(allStudents);
    const [filteredStudents, setFilteredStudents] = useState(allStudents)
    const [inputSearch, setInputSearch] = useState('')
    useEffect(() => {
        const newStudents = students.filter((student) => student.firstName.toLowerCase().includes(inputSearch.toLowerCase()) || student.lastName.toLowerCase().includes(inputSearch.toLowerCase()));
        setFilteredStudents(newStudents)
    }, [inputSearch])
  return (
    <div>   
        <StudentSearchForm inputSearch={inputSearch} setInputSearch={setInputSearch}/>
        <StudentList students={filteredStudents} />
    </div>
  )
}