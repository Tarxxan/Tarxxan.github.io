import Header from './Components/Header'
import AboutMe from './Components/AboutMe'; 
import Projects from './Components/Projects';
import Intro from './Components/Intro';
function App() {
  return (
    <div style={{background:"#343a40"}}>
     <Header />
     {/* <Intro /> */}
     <AboutMe />
     <Projects/>
     </div>
  );
}

export default App;
