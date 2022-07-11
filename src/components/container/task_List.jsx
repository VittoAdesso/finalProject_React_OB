import React from 'react';
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'

const TaskListComponent = () => {
    const defaultTask = new Task( ' Example', 'Default description', false, LEVELS.NORMAL);

    const changeState = (id) => {
        console.log('Change state of task')
    }
    
    return (
        <div>
            <div>
                <h1>Your Tasks : </h1>
            {/*paso la prop */}
                <TaskListComponent task={defaultTask}></TaskListComponent>
            </div>
        </div>
    );
};

export default TaskListComponent;
