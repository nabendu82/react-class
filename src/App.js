import './App.css';
// import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import UserList from './components/UserList';
// import Counter from './components/Counter';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Greet name="React" />
      <Greet name="Golang" />
      <Greet name="JavaScript">Language of the web</Greet>
      <hr />
      <Welcome lang="Swift">Language of iOS Apps</Welcome>
      <Welcome lang="Kotlin" />
      <Welcome lang="Python">Language of AI</Welcome> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      <UserList />
    </div>
  );
}

export default App;
