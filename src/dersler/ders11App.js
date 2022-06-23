import {useState} from "react";
import Header from "./header";
import Footer from "./Footer";
 
function App() {

  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('tr')
    return (
      <div className="App">
        <Header theme={theme} setTheme={setTheme}  language={language} setLanguage={setLanguage}  />
        App
        <Footer theme={theme} setTheme={setTheme}  language={language} setLanguage={setLanguage} />
      </div>
    ); 
}

export default App;
