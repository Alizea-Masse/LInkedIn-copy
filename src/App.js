

import './App.css';
import Header from './components/Header/header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* AppBody */}
      <div className="app__body">
      {/* SideBar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
