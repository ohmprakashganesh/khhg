import { useState } from 'react';
import Select from 'react-select';


const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' }
];

// Define your custom styles
const customStyles = {
  // The main search box/container
  control: (provided, state) => ({
    ...provided,
    backgroundColor: '#f0f0f0',
    borderColor: state.isFocused ? '#4A90E2' : '#ccc',
    borderRadius: '8px',
    padding: '2px',
    boxShadow: state.isFocused ? '0 0 0 1px #4A90E2' : 'none',
    '&:hover': { borderColor: '#4A90E2' }
  }),

  // The dropdown menu container
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    marginTop: '5px'
  }),

  // Individual items in the dropdown
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected 
      ? '#4A90E2' 
      : state.isFocused ? '#e1f0ff' : 'white',
    color: state.isSelected ? 'white' : '#333',
    padding: '10px 20px',
    cursor: 'pointer'
  }),

  // The "tags" for selected items (Multi-select specific)
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#4A90E2',
    borderRadius: '4px',
    color: 'white',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: 'white',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: 'white',
    '&:hover': { backgroundColor: '#357ABD', color: 'white' },
  }),
};

const LibrarySelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions);
   
  return (
    <div style={{ width: '400px', margin: '20px' }}>
      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '8px' }}>
        Custom Styled Select:
      </label>
      <Select
        options={options}
        onChange={setSelectedOptions}
        styles={customStyles} // Apply styles here
        isMulti={true}        // Set to true for multiple selection
        closeMenuOnSelect={false}
        placeholder="Search frameworks..."
      />
    </div>
  );
};
export default LibrarySelect;