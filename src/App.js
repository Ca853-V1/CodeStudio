import Editor from './Components/Editor';
import './App.css';

function App()
{
  return (
    <div style = {{ minHeight: "100vh", width: "100%", overflowX: "hidden" }}>
      <Editor/>
    </div>
  );
}

export default App;
