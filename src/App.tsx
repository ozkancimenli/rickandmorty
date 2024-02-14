//App.tsx
import React, { useState } from 'react';
import CharacterSelect from './components/CharacterSelect';
import { useQuery } from '@apollo/client';
import { getAllCharacters } from './components/Queries';

import './App.css';

const App: React.FC = () => {
  const { loading, error, data } = useQuery(getAllCharacters);
  const [selectedCharacters, setSelectedCharacters] = useState<any[]>([]);

  // Loading durumu kontrolü
  if (loading) return <p>Loading...</p>;

  // Hata durumu kontrolü
  if (error) return <p>Error: {error.message}</p>;

  // API'den alınan karakter verileri
  const characters = data.characters.results;

  // Karakter seçimini yöneten fonksiyon
  const handleCharacterSelect = (characters: any[]) => {
    setSelectedCharacters(characters);
  };

  return (
    <div className="App">
      {/* Karakter seçim komponenti */}
      <CharacterSelect
        characters={characters}
        selectedCharacters={selectedCharacters}
        onCharacterSelect={handleCharacterSelect}
      />
    </div>
  );
};

export default App;