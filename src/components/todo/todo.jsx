import useTodos from '../../hooks/useTodos';
import Item from '../item/item';

import { Container, ListContainer, Input, Button } from './todo.styles';



const Todo = () => {
  
  const { todos, addTodo, inputVal, setInputVal, toggleTodo } = useTodos();
  
  return (
    <Container>
      <ListContainer>
        {
          todos.map(
            ({ id, text, done }) =>
              <Item
                key={id}
                id={id}
                text={text}
                done={done}
                toggleTodo={toggleTodo}
              />
          )
        }
      </ListContainer>
      <div>
        <Input
          type="text"
          placeholder="add a new todo..."
          onChange={e => setInputVal(e.target.value)}
          value={inputVal}
        />
        <Button
          onClick={() => addTodo({ text: inputVal, done: false})}
        >
          Add
        </Button>
      </div>
    </Container>
  );
};

export default Todo;