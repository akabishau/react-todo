import { H1 } from '../styles/TextStyles';
import DefaultLayout from '../layouts/DefaultLayout';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';
import EmptyListMessage from '../components/EmptyListMessage';
import LoadingSpinner from '../components/LoadingSpinner';
import useTodoManager from '../hooks/useTodoManager';

function HomePage() {
  const [todoList, addTodo, removeTodo, isLoading] = useTodoManager();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const isEmpty = !todoList || todoList.length === 0;

  return (
    <DefaultLayout>
      <H1>My List</H1>
      <AddTodoForm onAddTodo={addTodo} />
      {isEmpty ? (
        <EmptyListMessage />
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
    </DefaultLayout>
  );
}

export default HomePage;
