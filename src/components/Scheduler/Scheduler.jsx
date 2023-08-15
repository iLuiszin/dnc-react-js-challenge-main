import './index.scss'
import editButton from '../../assets/edit.svg'
import deleteButton from '../../assets/delete.svg'
import addButton from '../../assets/add.svg'
import { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';

const Scheduler = ({ tasks }) => {

    const [task, setTask] = useState(tasks);
    const [showModal, setShowModal] = useState(false);
    const [modalData, setModalData] = useState({});
    const [newTaskTitle, setNewTaskTitle] = useState('');

    useEffect(() => {
        setTask(tasks);
    }, [tasks]);

    const handleCheckboxChange = (index) => {
        const updatedTasks = [...task];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTask(updatedTasks);
    };

    const handleActionClick = (index, action) => {
        if (action === 'delete') {
            setModalData({
                item: tasks[index],
                message: 'Deseja excluir esse item?',
            });
        } else if (action === 'edit') {
            setModalData({
                item: tasks[index],
                message: 'Deseja editar esse item?',
            });
        }
        setShowModal(true);
    };


    const handleModalClose = () => {
        setShowModal(false);
        setModalData({});
    };

    return (
        <section className="scheduler">
            <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

            <table>
                <thead>
                    <tr>
                        <th>Tarefa</th>
                        <th>Status</th>
                        <th>Opções</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.title}</td>
                                <td>
                                    {
                                        <input type="checkbox" checked={task.completed} onChange={() => handleCheckboxChange(index)} />
                                    }
                                </td>
                                <td className='scheduler__icons'>
                                    <button onClick={() => handleActionClick(index, 'edit')}>
                                        <img src={editButton} alt="edit" />
                                    </button>

                                    <button onClick={() => handleActionClick(index, 'delete')}>
                                        <img src={deleteButton} alt="delete" />
                                    </button>

                                </td>
                            </tr>
                        ))
                    }
                    <tr>
                        <td><input
                            type="text"
                            placeholder="Nova tarefa..."
                        />
                        </td>
                        <td></td>
                        <td className='scheduler__icons'>
                            <button><img src={addButton} alt="" /></button>
                        </td>
                    </tr>
                </tbody>
            </table>


            {showModal && (
                <Modal
                    message={modalData.message}
                    onCloseModal={handleModalClose}
                    item={modalData.item}
                />
            )}
        </section>
    )
}

export default Scheduler