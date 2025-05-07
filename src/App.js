import './App.css';
import emojipedia from "./components/emoji"
import Emoji from './components/emojiRender';


function createCard(emojipedia){
  return (
    <Emoji
      key = {emojipedia.id}
      emoji = {emojipedia.emoji}
      name = {emojipedia.name}
      meaning = {emojipedia.meaning}
     />
  )
}

function App() {
  return (
    <div>
      {emojipedia.map(createCard)}
    </div>
  );
}

export default App;
