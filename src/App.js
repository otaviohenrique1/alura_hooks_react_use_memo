import { useMemo, useState } from 'react';
import './App.css';

function calculaValorDoImposto(valorBruto) {
  console.log("Calculando o valor do imposto");
  if (!valorBruto) {
    return 0;
  }
  return parseFloat(valorBruto) * 0.75;
}

function App() {
  const [nomeDoImposto, setNomeDoImposto] = useState();
  const [valorBruto, setValorBruto] = useState();

  // const valorDoImposto = calculaValorDoImposto(valorBruto);

  const valorDoImposto = useMemo(() => calculaValorDoImposto(valorBruto), [valorBruto]);

  return (
    <div className="App">
      <input
        placeholder="Nome do imposto"
        value={nomeDoImposto}
        onChange={(evento) => setNomeDoImposto(evento.target.value)}
        type="text"
      />
      <input
        placeholder="Valor bruto"
        value={valorBruto}
        onChange={(evento) => setValorBruto(evento.target.value)}
        type="number"
      />
      <ul>
        <li>Nome do imposto: <strong>{nomeDoImposto}</strong></li>
        <li>Valor do imposto: <strong>R$ {valorDoImposto}</strong></li>
      </ul>
    </div>
  );
}

export default App;
