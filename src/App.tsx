import { useState } from 'react';
import styles from './App.module.css';
import image from './assets/imc.jpg'
import leftArrow from './assets/leftarrow.png'
import { GridItem } from './components/Grid-Item';

import { levels, CalculateImc, Level } from './helpers/imc'

function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightFild] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalculate = () => {
    if (heightField && weightField) {
      setToShow(CalculateImc(heightField, weightField));
    } else {
      alert("Preencha os campos")
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightFild(0);
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={image} alt="" width={70} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>

          <input
            type='number'
            placeholder='Digite sua altura. Ex: 1.5 (Em metros)'
            value={heightField > 0 ? heightField : ''} // Como a state começa com 0 o input começará com value 0, Para deixar vazio
            onChange={e => setHeightField(+e.target.value)}
            disabled={toShow ? true : false}
          />
          <input
            type='number'
            placeholder='Digite seu peso. Ex: 55 (Em kg)'
            value={weightField > 0 ? weightField : ''} // Como a state começa com 0 o input começará com value 0, Para deixar vazio
            onChange={e => setWeightFild(+e.target.value)}
            disabled={toShow ? true : false}
          />
          <button onClick={handleCalculate} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className={styles.rightside}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }

          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App
