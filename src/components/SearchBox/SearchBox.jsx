import css from './SearchBox.module.css';

export default function SearchBox ({filter, onFilterChange}){
    return (
    <div className={css.searchBox}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className={css.inputFilter}
      />
    </div>
  );    
}