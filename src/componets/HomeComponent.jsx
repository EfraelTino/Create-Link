import React from "react";
import { useState } from "react";

function HomeComponent() {

    const [errors, setErrors] = useState(null);

    const [generarteHtml, setGenerarteHml] = useState('');
    const [list, setList] = useState([]);
    const [task, setTask] = useState('')


    const handleChange = (event) => {
        setTask(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!task.trim()) {
            setErrors('Debe ingresar al menos un caracter');
        } else {
            setList([...list, task]);
            setTask('');
            setErrors(''); // Limpiar errores si todo está bien
        }

    }

    const generateHtml = () => {
        if (list.length <= 0) {
            setErrors('No se puede generar ningun html si no tiene ninguna tarea');
        } else {
            const listContainer = document.querySelector(".task").outerHTML;
            setGenerarteHml(listContainer);
        }
    }
    return (
        <div>
            <div className="wrap-content">
                <div className="todo-list">
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Enter your task"
                            value={task}
                            onChange={handleChange}
                        />
                        <button type="submit">
                            Submit
                        </button>
                    </form>

                    <div className="task">
                        {
                            errors ? <p>Ingresa al menos una tarea</p> :
                                list.map((task, idenx) => (
                                    <p key={idenx}>
                                        {task}
                                    </p>
                                ))

                        }
                    </div>
                </div>
                <button
                    onClick={generateHtml}
                >Generate HTML</button>
                <div className="mostrar-html">
                    {generarteHtml}
                </div>
            </div>
            <div className="wrap-results">

            </div>
        </div>

    );
}
export default HomeComponent;