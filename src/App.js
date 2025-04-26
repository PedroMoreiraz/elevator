import './App.css';

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="scene">
        <div className="room">
          <div className="wall back">
            <div className="elevator-screen">1</div>
            <div className="elevator">
              <div className="doors"></div>
            </div>  
            <div className="panel">
              <div className="screen">1</div>
              <div className="buttons">
                <button className="btn btn-sm btn-light">0</button>
                <button className="btn btn-sm btn-light">1</button>
                <button className="btn btn-sm btn-light">2</button>
                <button className="btn btn-sm btn-light">3</button>
              </div>
            </div>
          </div>
          <div className="wall left"></div>
          <div className="wall right"></div>
          <div className="wall floor"></div>
          <div className="wall roof"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
