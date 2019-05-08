// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from 'constants';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <Todo
                handleToggleComplete={props.handleToggleComplete}
                key={todo.id}
                todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;