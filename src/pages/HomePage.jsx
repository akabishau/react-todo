import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import EmptyState from '../components/EmptyState';
import ListControls from '../components/ListControls';
import useTodoManager from '../hooks/useTodoManager';
import { EMPTY_LIST_MESSAGE } from '../constants/uiConfig';
import { TodoContext } from '../contexts/TodoContext';
import { useContext } from 'react';

function HomePage() {
  const { list, isListLoading, addTodo, removeTodo } = useContext(TodoContext);
  const { sortedList, titleAscOrder, setTitleAscOrder } = useTodoManager(list);

  return (
    <DefaultLayout>
      <H1>My List</H1>
      <AddTodoForm onAddTodo={addTodo} />
      {isListLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          {list.length === 0 ? (
            <EmptyState message={EMPTY_LIST_MESSAGE} />
          ) : (
            <>
              <ListControls
                titleAscOrder={titleAscOrder}
                setTitleAscOrder={setTitleAscOrder}
              />
              <TodoList todoList={sortedList} onRemoveTodo={removeTodo} />
            </>
          )}
        </>
      )}
    </DefaultLayout>
  );
}

export default HomePage;
