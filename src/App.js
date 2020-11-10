import logo from './logo.svg';
import './App.css';

function App () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/**
 * 需求：
 * 1.发布评论页面： 用户名input 评论内容textarea 提交按钮
 * 2.评论页面：显示发布的言论 并有用户名 评论内容 和删除评论的功能
 */