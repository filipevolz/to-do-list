import { PlusCircle} from '@phosphor-icons/react';
import styles from './Form.module.css';

import clipboard from '../assets/clipboard.svg';

export function Form() {

    return (
            <form className={styles.taskForm}>
                <div className={styles.input}>
                    <input 
                        type="text"
                        name="task"
                        placeholder="Adicione uma nova tarefa"
                        required
                    />

                    <button type='submit'>
                        Criar 
                    <PlusCircle size={16} />
                    </button>
                </div>
        

            <div className={styles.task}>
                    <div className={styles.test}>
                        <p>Tarefas criadas</p>
                        <p>Concluídas</p>
                    </div>

                <div className={styles.newTask}>
                    <img src={clipboard} />
                        <p>
                            <strong>Você ainda não tem tarefas cadastradas</strong><br />
                            Crie tarefas e organize seus itens a fazer
                        </p>
                </div>
            </div>
        </form>
    );
}