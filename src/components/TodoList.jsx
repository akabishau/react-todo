// import TodoListItem from './TodoListItem';
import styled from 'styled-components';

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(item => (
        <Item key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => console.log('remove')}>REMOVE</button>
        </Item>
      ))}
    </ul>
  );
}

export default TodoList;

const Item = styled.li`
  background-color: #3a3a3a;
  color: #ffffff;
  padding: 10px 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #555555;
  }
`;