export type Level = {
    title: string,
    color: string,
    icon: 'down' | 'up',
    imc: number[],
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, parseFloat(18.59.toFixed(1))] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 999] }
]

export const CalculateImc = (height: number, weight: number) => {
    const imc = weight / (Math.pow(height, 2))
    for(let i in levels){{
        if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]){
            let newLevel: Level = {...levels[i]};
            newLevel.yourImc = parseFloat(imc.toFixed(2));
            newLevel.imc = [parseFloat(newLevel.imc[0].toFixed(1)), parseFloat(newLevel.imc[1].toFixed(1))];
            return newLevel;
        }
    }}

    return null;
}