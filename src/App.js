import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import LoadingMessage from './components/LoadingMessage';
import { fetchCharacters } from './services/api';
import './App.css';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    (async () => {
      const charactersData = await fetchCharacters();
      setCharacters(charactersData);
    })();
  }, []);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  const filterCharacters = characters.filter(({ name }) =>
    name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
  );

  if (!characters.length) {
    return <LoadingMessage />;
  }

  return (
    <div className="container">
      <h1 className="header">ULTIMATE SUPERHERO INDEX</h1>
      <SearchBox searchChange={onSearchChange} />
      <div className="stats">HOVER OVER A HERO FOR MORE INFO.</div>
      <Scroll>
        <CardList characters={filterCharacters} />
      </Scroll>


      <footer className="f3">api provided by akabab</footer>
    </div>
  );
}
