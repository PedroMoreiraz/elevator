import { useState } from 'react';
import './App.css';

function App() {
  const [andar, setAndar] = useState(0);
  const [emMovimento, setEmMovimento] = useState(false);
  const [portaAberta, setPortaAberta] = useState(false); // começa com a porta fechada

  const irParaAndar = async (destino) => {
    if (emMovimento || destino === andar) return;

    setEmMovimento(true);
    setPortaAberta(false); // Fecha a porta ao iniciar movimento

    const passo = destino > andar ? 1 : -1;

    for (let i = andar + passo; passo > 0 ? i <= destino : i >= destino; i += passo) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      setAndar(i);
    }

    setPortaAberta(true); // Abre a porta ao chegar
    setEmMovimento(false);
  };

  const chamarElevador = () => {
    if (emMovimento) return; // Evita abrir a porta se o elevador estiver em movimento
    setPortaAberta(true); // Abre a porta ao chamar o elevador
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="roomContainer">
        <div className="room">
          <div className="wall back">
            {/* Painel de chamada */}
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

            {/* Tela do elevador */}
            <div className="elevator-screen">{andar}</div>

            {/* Elevador */}
            <div className="elevator">
              <div className={`doors ${portaAberta ? 'open' : ''}`}></div>
            </div>

            {/* Painel de controle do elevador */}
            <div className="panel">
              <div className="screen">{andar}</div>
              <div className="buttons">
                {[0, 1, 2, 3].map((num) => (
                  <button
                    key={num}
                    className="btn btn-sm btn-light"
                    onClick={() => irParaAndar(num)}
                    disabled={emMovimento || num === andar}
                  >
                    {num}
                  </button>
                ))}
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
