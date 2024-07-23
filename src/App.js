import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './component/Loading';

const News = lazy(() => import('./component/News'));

const App= () => (

  <Router>
          <nav className="navbar navbar-expand-lg bg-dark fixed-top">
  <div className="container-fluid">
    <h4 className="navbar-brand text-white">Worldnews</h4>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-white"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="d-flex gap-4 navbar-nav  me-auto mb-2 mb-lg-0">
   
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/Entertainment">Entertainment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/World">World</a>
        </li>
         <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/Business">Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/Sport">Sport</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/Science">Science</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="/Technology">Technology</a>
        </li>        
      </ul>
       
    </div>
  </div>

</nav>


    <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route path="/" element={<News text="Latest" />} />
        <Route path="/Entertainment" element={<News text="Entertainment" />} />
        <Route path="/World" element={<News text="World" />} />
        <Route path="/Business" element={<News text="Business" />} />
        <Route path="/Sport" element={<News text="Sport" />} />
        <Route path="/Science" element={<News text="Science" />} />
        <Route path="/Technology" element={<News text="Technology" />} />
      </Routes>
    </Suspense>
  </Router>
);
export default App; 