
import AddPost from './AddPost';
import './App.css';
import EditPost from './EditPost';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
      <h1>MERN STACK BLOG</h1>
      <PostList/>
      <AddPost/>
      <EditPost/>
    </div>
  );
}

export default App;
