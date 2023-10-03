import { Header } from './components/Header';
import { Form } from './components/Form';
import { v4 as uuidv4 } from 'uuid';
 
import './global.css'

const tasks = [
    {
        id: uuidv4(),
        title: 'Terminar o desafio',
        isComplete: true
    },
    {
        id: uuidv4(),
        title: 'Estudar TypeScript',
        isComplete: false
    },
    {
        id: uuidv4(),
        title: 'Estudar TypeScript',
        isComplete: false
    },
]

export function App() {
    return (
        <div>
            <Header />

            <Form />
        </div>
    )
}