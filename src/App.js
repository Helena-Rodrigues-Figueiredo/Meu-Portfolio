import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/skills" component={ Skills } />
          <Route path="/projects" component={ Projects } />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
