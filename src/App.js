
import './App.css';
import EditPost from './EditPost';
import PostList from './PostList';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddPost from './AddPost';


function App() {
  return (
    <div className="App">
      <h1>MERN STACK BLOG</h1>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<PostList/>} exact/>
          <Route path = '/addpost' element={<AddPost/>} exact/>
          <Route path = '/editpost' element={<EditPost/>} exact/>
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
