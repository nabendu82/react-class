import './App.css';
import Greet from './components/Greet';
// import { Greeting, GreetingJavaScript } from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="React" />
      <Greet name="Golang" />
      <Greet name="JavaScript">Language of the web</Greet>
      {/* <Greeting />
      <GreetingJavaScript /> */}
      <hr />
      <Welcome lang="Swift">Language of iOS Apps</Welcome>
      <Welcome lang="Kotlin" />
      <Welcome lang="Python">Language of AI</Welcome>
    </div>
  );
}

export default App;
