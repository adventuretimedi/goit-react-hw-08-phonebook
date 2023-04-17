import { setFilter } from 'redux/filterSlice';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const filter = e.currentTarget.value;
    dispatch(setFilter(filter));
  };

  return (
    <TextField
      name="filter"
      label="Find contacts by name"
      onChange={handleChange}
    />
  );
};

export default Filter;
