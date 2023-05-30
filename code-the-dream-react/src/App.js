// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import * as React from 'react';

// const array1 = [1, 2, 3, 4, 5];
// const map1 = array1.map(x => x * 2);

// console.log(map1);

// function getTitle(title) {
//   return title;
// }

// function App() {

//   return (
//     <div>
//       <h1>Hello {getTitle('React')}. This is the array I have chosen: {map1}</h1>

//       <label htmlFor="search">Search: </label>
//       <input id="search" type="text" />

//     </div> 
//   );
// }

// export default App;

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, 
{
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }, 
];

console.log(list);

function App() {
  return (
    <div>
      <h1>My Code the Dream React App</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      
    <hr />

      <ul>
      {list.map(function (item) {
        return (
          <li key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
          </li> );
        })}
      </ul>
    </div> 
  );
}

export default App;