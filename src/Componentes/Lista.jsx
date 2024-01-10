import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const List = props => {
  const [sortedList, setSortedList] = useState([...props.list]);
  const [ascending, setAscending] = useState(false);

  useEffect(() => {
    setSortedList([...props.list]);
  }, [props.list]);

  const sortByTitle = () => {
    let sorted;
    if (ascending) {
      sorted = [...sortedList].sort((a, b) => a.title.localeCompare(b.title));
    }
    else{
      sorted = [...sortedList].sort((a, b) => b.title.localeCompare(a.title));
    }
    setSortedList(sorted);
    
    setAscending(!ascending);
  };
  const sortByPoints = () => {
    let sorted;
    if (ascending) {
      sorted = [...props.list].sort((a,b)=> a.points - b.points);
    }
    else{
      sorted = [...props.list].sort((a,b)=> b.points - a.points);
    }
    setSortedList(sorted);
    setAscending(!ascending);
    
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th style={{textAlign: "center"}}><button onClick={sortByTitle}>Titulo</button></th>
            <th style={{textAlign: "center"}}>Author</th>
            <th style={{textAlign: "center"}}>Comments</th>
            <th style={{textAlign: "center"}}><button onClick={sortByPoints}>Puntos</button></th>
          </tr>
        </thead>
        <tbody>
          <TransitionGroup component={null}>
          {sortedList.map(item => (
            <CSSTransition key={item.objectID} timeout={500} classNames="item">
            <tr key={item.objectID}>
              <td style={{textAlign: "center"}}>
                <a href={item.url}>{item.title}</a>
              </td>
              <td style={{textAlign: "center"}}>{item.author}</td>
              <td style={{textAlign: "center"}}>{item.num_comments}</td>
              <td style={{textAlign: "center"}}>{item.points}</td>
            </tr>
            </CSSTransition>
          ))}
          </TransitionGroup>
        </tbody>
      </table>
    </div>
  )};

export default List;