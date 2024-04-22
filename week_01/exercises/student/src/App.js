import './App.css';
import Student from './components/Student';

function App() {
  const students = [
    {
      lastName: "Smith",
      firstName: "John",
      genderCode: 1,
      birthYear: 1985,
      courses: [
        {
          name: "JavaScript Basics",
          instructors: ["Alice Brown", "Bob Green"]
        },
        {
          name: "React Fundamentals",
          instructors: ["Charlie White"]
        }
      ]
    },
    {
      lastName: "Doe",
      firstName: "Jane",
      genderCode: 2,
      birthYear: 1990,
      courses: [
        {
          name: "Python for Beginners",
          instructors: ["David Black", "Eve Grey"]
        }
      ]
    }
  ];
  return (
    <div>
      <Student students={students} />
    </div>
  );
}

export default App;
