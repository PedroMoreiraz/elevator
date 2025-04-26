import { useState } from 'react';
import './App.css';

function App() {
  const [andar, setAndar] = useState(0);
  const [emMovimento, setEmMovimento] = useState(false);
  const [portaAberta, setPortaAberta] = useState(false);
  const [elevadorChamado, setElevadorChamado] = useState(false);

  const cenarios = [
    { nome: "Andar 0", objeto: "mesa" },
    { nome: "Andar 1", objeto: "sofa" },
    { nome: "Andar 2", objeto: "cadeira" },
    { nome: "Andar 3", objeto: "tapete" },
  ];

  const irParaAndar = async (destino) => {
    if (emMovimento || destino === andar || !elevadorChamado) return;

    setEmMovimento(true);
    setPortaAberta(false);

    const passo = destino > andar ? 1 : -1;

    for (let i = andar + passo; passo > 0 ? i <= destino : i >= destino; i += passo) {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setAndar(i);
    }

    setPortaAberta(true);
    setEmMovimento(false);
  };

  const chamarElevador = () => {
    if (emMovimento) return;
    setPortaAberta(true);
    setElevadorChamado(true);
  };

  const renderObjeto = (objeto) => {
    switch (objeto) {
      case "mesa":
        return (
          <div className="objeto mesa">
          </div>
        );
      case "sofa":
        return (
          <div className="objeto sofa">
          </div>
        );
      case "cadeira":
        return (
          <div className="objeto cadeira">
          </div>
        );
      case "tapete":
        return <div className="objeto tapete"></div>;
      default:
        return null;
    }
  };

  const { fundo, objeto } = cenarios[andar];

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="roomContainer">
        <div className="room">
          <div className="wall back">
            <div className="panelCall">
              <div className="buttonsCall">
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => chamarElevador()}
                >
                  ↑
                </button>
                <button
                  className="btn btn-sm btn-light"
                  onClick={() => chamarElevador()}
                >
                  ↓
                </button>
              </div>
            </div>

            <div className="elevator-screen">{andar}</div>

            <div className="elevator">
              <div className={`doors ${portaAberta ? 'open' : 'closed'}`}></div>
            </div>

            <div className="panel">
              <div className="screen">{andar}</div>
              <div className="buttons">
                {[0, 1, 2, 3].map((num) => (
                  <button
                    key={num}
                    className="btn btn-sm btn-light"
                    onClick={() => irParaAndar(num)}
                    disabled={emMovimento || num === andar || !elevadorChamado}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="wall left"></div>
          <div className="wall right"></div>
          <div className="wall floor"><div className="objeto-container">{renderObjeto(objeto)}</div></div>
          <div className="wall roof"></div>
        </div>
      </div>
    </div> 
  );
}

export default App;
