import React,{Component} from 'react'
import Add from  './components/add/Add'
import List from './components/list/List'
import './App.css'

function App() {
  return (
    
        <div>
          <header className="site-header jumbotron">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>请发表对React的评论</h1>
                </div>
              </div>
            </div>
          </header>
          <div className="container">
            <Add />
            <List />
          </div>
        </div>
      
  );
}

export default App;
