import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import './CharacterSelect.css';  

interface Character {
  id: string;
  name: string;
  image: string;
  episode: {
    id: string;
  }[];
}

interface CharacterSelectProps {
  characters: Character[];
  selectedCharacters: Character[];
  onCharacterSelect: (characters: Character[]) => void;
}


const CharacterSelect: React.FC<CharacterSelectProps> = ({
  characters,
  selectedCharacters,
  onCharacterSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCharacterSelect = (
    _: React.ChangeEvent<{}>,
    value: Character[]
  ) => {
    onCharacterSelect(value);
  };

  const handleInputChange = (
    _: React.ChangeEvent<{}>,
    newInputValue: string
  ) => {
    setSearchTerm(newInputValue);
  };

  const filteredCharacters: Character[] = characters.filter((character: Character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Autocomplete
      className="character-select"
      multiple
      id="tags-standard"
      options={filteredCharacters}
      getOptionLabel={(character) => character.name}
      value={selectedCharacters}
      onChange={handleCharacterSelect}
      disableCloseOnSelect
      inputValue={searchTerm}
      onInputChange={handleInputChange}
      
      renderOption={(props, character, { inputValue, selected }) => {
        const parts = character.name.split(new RegExp(`(${inputValue})`, 'gi'));
        return (
          <li {...props}>
            <Checkbox
              sx={{ marginRight: 1 }}
              checked={selected}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={character.image}
                alt={character.name}
                style={{ borderRadius: '50%', width: '30px', marginRight: '8px' }}
              />
              <ListItemText
                primary={
                  parts.map((part, index) => (
                    part.toLowerCase() === inputValue.toLowerCase() ? (
                      <strong key={index} style={{ fontWeight: 'bold' }}>
                        {part}
                      </strong>
                    ) : (
                      <span key={index}>
                        {part}
                      </span>
                    )
                  ))
                }
                secondary={`${character.episode.length} episodes`}
              />
            </div>
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Select Characters"
        />
      )}
    />
  );
};

export default CharacterSelect;
