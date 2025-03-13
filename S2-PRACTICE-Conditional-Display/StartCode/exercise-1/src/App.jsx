import Header from "./components/Header";
import Score from "./components/Score";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS } from "./data";
function App() {
  const courses = [
    { courseName: "Java", results: JAVA_RESULTS },
    { courseName: "Python", results: PYTHON_RESULTS },
    { courseName: "HTML", results: HTML_RESULTS },
    { courseName: "English", results: ENGLISH_RESULTS },
  ];

  return (
    <>
      
      <Header batchName="MEXT Scholars 2025" />

      <main className="scores-container">
        
        {courses.map((course, index) => (
        <div class="scores">
          <Score key={index} courseName={course.courseName} result={course.results} />
        </div>
        ))}
           
        
      </main>
    </>
  );
}

export default App;
