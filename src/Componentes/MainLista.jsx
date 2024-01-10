import './App.css';
import React from 'react';
import List from './Componentes/Lista';
import Search from './Componentes/Search';


const MainLista = () => {
  const stories = [
    { title: 'Story 1', author: 'Author 1', num_comments: 10, points: 100, objectID: '1', url: 'http://example.com/1' },
    { title: 'Abedul', author: 'Author 2', num_comments: 20, points: 200, objectID: '2', url: 'http://example.com/2' },
    { title: 'Tristan', author: 'Author 3', num_comments: 30, points: 300, objectID: '3', url: 'http://example.com/3' },
    { title: 'Coñac', author: 'Author 4', num_comments: 40, points: 400, objectID: '4', url: 'http://example.com/4' },
    { title: 'Bulbasaur', author: 'Author 5', num_comments: 50, points: 500, objectID: '5', url: 'http://example.com/5' },
    // Add more stories as needed
  ];
  const [searchTerm, setSearchTerm] = React.useState('');
  const searchedStories = stories.filter(story => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <Search search={searchTerm} onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

export default MainLista;