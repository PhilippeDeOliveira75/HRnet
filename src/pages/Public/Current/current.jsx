import './current.scss';
import { useSelector } from 'react-redux';
import { Table } from '@components/import';

function Current() {

  const users = useSelector((state) => state.form.users);

  // Vérifie si `users` est un tableau
  if (!Array.isArray(users)) {
    return <p>Error: Users data is not available.</p>;
  }

  return (
    <div className="current-container">
      <Table users={users} />
    </div>
  )
}

export default Current
