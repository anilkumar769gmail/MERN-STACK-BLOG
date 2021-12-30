
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import EditPost from './EditPost';
import PostList from './PostList';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import AddPost from './AddPost';


function App() {
  return (
    <div className="App">
      <h2 style={{backgroundColor:'black', color:'white',padding:'10px'}}>MERN STACK BLOG</h2>
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<PostList/>} exact/>
          <Route path = '/addpost' element={<AddPost/>} exact/>
          <Route path = '/editpost/:postid' element={<EditPost/>} exact/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
