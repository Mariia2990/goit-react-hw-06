import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div>
      <label className={css.labelFilter}>
        Find contacts by name:
        <input
          className={css.inputFilter}
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Filter;
