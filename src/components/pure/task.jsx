import React from 'react';
import { Task } from '../../models/task.class'

import PropTypes from 'prop-types';

const TaskComponent = ({ task }) => {

  return (
    <div>
      <h1>
        Name : { task.name }
      </h1>
      <h2>
        Description : { task.description }
      </h2>
      <h3>
        Level : { task.level }
      </h3>
      <h5>
         This task is: { task.complete ? 'COMPLETED' : 'PENDING'}
      </h5>
    </div>
  )
};

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
