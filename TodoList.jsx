import { Droppable, Draggable } from "@hello-pangea/dnd";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, remoreTodo, updateTodo }) => {
    return (
        <Droppable droppableId="todos">
            {(droppableProvided) => (
                <div
                    ref={droppableProvided.innerRef}
                    {...droppableProvided.droppableProps}
                    className="mt-8 overflow-hidden rounded-t-md  bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
                >
                    {todos.map((todo, index) => (
                        <Draggable
                            key={todo.id}
                            index={index}
                            draggableId={`{todo.id}`}
                        >
                            {(draggableProvided) => (
                                <TodoItem
                                    todo={todo}
                                    remoreTodo={remoreTodo}
                                    updateTodo={updateTodo}
                                    ref={draggableProvided.innerRef}
                                    {...draggableProvided.dragHandleProps}
                                    {...draggableProvided.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}

                    {droppableProvided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TodoList;
