import "./App.css";
import { NavigationBar } from "./components/NavigationBar";
import { FooterBar } from "./components/FooterBar";
import Judul from './components/JudulBerita';
import Penulis from './components/Penulis';
import ContentArticle from './components/ContentArticle';
import AddComment from './components/AddComment';


function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <NavigationBar></NavigationBar>
      <Judul></Judul>
      <Penulis></Penulis>
      <ContentArticle></ContentArticle>
      <AddComment></AddComment>
      <FooterBar></FooterBar>
    </div>
  );
}

export default App;
