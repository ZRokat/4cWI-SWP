import logo from './logo.svg';
import './App.css';
import SuperButton from './Components/superbutton';
import ButtonRow from './Components/ButtonRow';
import List from './Components/List';
import UserCard from './Components/userCard';
import  Vote  from './Components/Vote';

function App() {
  return (
    <div className="App">
      <h1>Huen</h1>
        <SuperButton/>
        <ButtonRow/>
        <List/>
        <UserCard/>
        <Vote candidate="sepp" nickname="S"/>
        <Vote candidate="paul" nickname="Po"/>
        <Vote candidate="Hans" nickname="Flammenwerfer"/>
    </div>
  );
}

export default App;
