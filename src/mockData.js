import {v4 as uuidv4} from 'uuid' 
const mockData = [
    {
        id: uuidv4(),
        title: '👨‍💻Por hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Estudiar JS'
            },
            {
                id: uuidv4(),
                title: 'Estudiar Python'
            },
            {
                id: uuidv4(),
                title: 'Terminar CCNA7'
            }           
        ]
    },
    {
        id: uuidv4(),
        title: '🕒 En progreso...',
        tasks:[
                {
                    id: uuidv4(),
                    title: 'CCNA modulo 1'
                },
                {
                    id: uuidv4(),
                    title: 'CCNA7 modulo 2'
                }           
            ]
    },
    {
        id: uuidv4(),
        title: '✔️Completado',
        tasks: [
            {
                id: uuidv4(),
                title: 'React'
            }          
        ]
    }
]

export {mockData}