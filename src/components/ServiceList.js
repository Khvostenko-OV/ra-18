import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { editService, deleteService } from '../actions/actions';

export default function ServiceList() {
  const services = useSelector(state => state.serviceList);
  const current = useSelector(state => state.serviceEdit);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const handleDelete = (id) => {
    if (id !== current.id) { dispatch(deleteService(id)); }
  }

  return (
    <div className='list'>
      <label>Filter:
        <input name='filter' value={filter} onChange={(e) => setFilter(e.target.value)}/>
      </label>
      <ol>
        {services.map(item => {
          if (item.name.toLowerCase().startsWith(filter.toLowerCase())) return (
            <li key={item.id} className={String(item.id === current.id)}>
              {item.name} {item.price}
              <button onClick={() => dispatch(editService(item))}>✎</button>
              <button onClick={() => handleDelete(item.id)}>✕</button>
            </li>
          );
          return null;
        })}
      </ol>
    </div>
  )
}
