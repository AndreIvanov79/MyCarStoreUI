import logo from './logo.svg';
import './App.css';
import WelcomePage from "./component/welcome-page-component/welcome-page";
import Navigation from "./component/navigation-component/navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <WelcomePage/>
      </header>
    </div>
  );
}

export default App;
