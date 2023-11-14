import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [tree, setTree] = useState({
    label: 'Beverages',
    children: [
        {label: 'Water'},
        {label: 'Coffee'},
        {label: 'Tea',
         children: [
                {label: 'Black Tea'},
                {label: 'White Tea',
                children: [
                  {label: 'Sencha'},
                  {label: 'Gyokuro'},
                  {label: 'Matcha'},
                  {label: 'Pi Lo Chun'}
              ] },
                {label: 'Green Tea',
                 children: [
                        {label: 'Sencha'},
                        {label: 'Gyokuro'},
                        {label: 'Matcha'},
                        {label: 'Pi Lo Chun'}
                    ]
                }
            ]
        }
    ]
})

const [date2, setDate2] = useState({
  root: [
    {children: 'children'}
  ]
})


 const buildTree = node => `<li onClick={console.log(event.target.outerText)}> ${node.children  ? `

  <span className="box" onClick={console.log(event.target.outerText)}>${node.label}</span>
  <ul onClick={console.log(event.target.outerText)} className="nested">${node.children.map(buildTree).join('')}</ul>
  
` : node.label}</li> `;

useEffect(() => {
},[document.body])

const createEl = (tag, opts) => {
  const el = document.createElement(tag)
  for (const key in opts) {
    el[key] = opts[key]
  }
  return el
}

const addChild = (el) => {
  const node = el.parentNode
  const addButton = createEl('button', {
    onclick: (event) => {
      addChild(event.target.parentNode)
    }
  })
  const removeButton = createEl('button', {
    onclick: () => {
      child.remove()
    }
  })
  addButton.textContent = '+'
  removeButton.textContent = 'Удалить'
  const child = createEl('li', {
    textContent: `Menu`,
  })
  const ul = createEl('ul', {
  })
  child.appendChild(addButton)
  child.appendChild(removeButton)
  child.onClick = (event) => {addChild(event.target.parentNode)}
  ul.appendChild(child)
  node.appendChild(ul)
}

const deleteElement = (node) => {
  node.remove()
}

const showJson = () => {
  var element = document.getElementById('mainMenu');
  console.log(element)

var html = element.outerHTML;  

console.log(html)

var data = { html: html }; 
console.log(data)
var json = JSON.stringify(data);
  console.log(json)
}

  return (
    <div className="App">
      <button onClick={event => {addChild(event.target)}}>Добавить Menu</button>
      <button onClick={showJson}>Json</button>
      <ul id='mainMenu'>
        <li>Menu1<button onClick={event => {addChild(event.target)}}>добавить</button ><button onClick={event =>{ deleteElement(event.target)}}>Удалить</button></li>
      </ul>
    </div>
  );
}

export default App;
