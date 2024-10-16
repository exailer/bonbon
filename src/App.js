import Header from "./components/Header/Header";
import './App.css'
import SectionOne from "./components/main/sectionOne/sectionOne";
import SectionStart from "./components/main/sectionStart/sectionStart";
import SectionTwo from "./components/main/sectionTwo/sectionTwo";
import SectionThree from "./components/main/sectionThree/sectionThree";



function App() {
  return (
    <div className="App">
        <Header/>
        <SectionStart/>
        <SectionOne/>
        <SectionTwo/>
        <SectionThree/>
    </div>
  );
}

export default App;
