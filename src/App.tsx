import { useState } from 'react';
import image from './assets/imc.jpg'
import leftArrow from './assets/leftarrow.png'
import { GridItem } from './components/Grid-Item';
import { levels, CalculateImc, Level } from './helpers/imc'
import { DarkMode } from './components/DarkMode';

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
    <div className='pb-10 dark:bg-[#041C32]'>
      <header className='px-5 lg:p-0'>
        <div className='max-w-4xl mx-auto my-5 flex justify-between'>
          <img src={image} alt="" width={70} />
          <DarkMode />
        </div>
      </header>
      <div className='max-w-4xl mx-auto my-10 flex flex-col md:flex-row px-5 lg:px-0'>
        <div className='flex-1 md:mr-10 m-0'>
          <h1 className='m-0 text-4xl dark:text-[#ECB365] text-[#3A4B5C]'>Calcule o seu IMC.</h1>
          <p className='mb-10 text-base dark:text-[#ecb46584] text-[#6A7D8B]'>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          
          <input
            type='number'
            placeholder='Digite sua altura. Ex: 1.5 (Em metros)'
            value={heightField > 0 ? heightField : ''} // Como a state começa com 0 o input começará com value 0, Para deixar vazio
            onChange={e => setHeightField(+e.target.value)}
            disabled={toShow ? true : false}
            className='textField'
          />
          <input
            type='number'
            placeholder='Digite seu peso. Ex: 55 (Em kg)'
            value={weightField > 0 ? weightField : ''} // Como a state começa com 0 o input começará com value 0, Para deixar vazio
            onChange={e => setWeightFild(+e.target.value)}
            disabled={toShow ? true : false}
            className='textField'
          />
          <button className='botao' onClick={handleCalculate} disabled={toShow ? true : false}>Calcular</button>
        </div>

        <div className='flex flex-1 md:ml-10 md:m-0 mt-7'>
          {!toShow &&
            <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5'>
              {levels.map((item, key) => (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }

          {toShow &&
            <div className='flex flex-1'>
              <div className='rightArrow' onClick={handleBackButton}>
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
