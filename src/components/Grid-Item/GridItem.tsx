import { Level } from '../../helpers/imc';
import './GridItem.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';

type Props = {
     item: Level;
}
const GridItem = ({item}: Props) => {
    return (
        <div className='main' style={{backgroundColor: item.color}}>
            <div className='gridIcon'>
                {item.icon === 'up' && <img src={upImage} alt='' width={30} />}
                {item.icon === 'down' && <img src={downImage} alt="" width={30} />}

            </div>
            <div className='text-2xl mt-1 font-bold'>{item.title}</div>
            {item.yourImc && <div className='mt-1 text-lg'>Seu IMC é de {item.yourImc} kg/m²</div>}
            <div className='text-xs mt-3'>
                <>
                    IMC Está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}

export {GridItem};