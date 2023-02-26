const appDiv = document.getElementById('app');

const render = (name) => {
  appDiv.innerHTML = `
    <h1>Hello, ${name}!</h1>
    <button id="button">Click me</button>
  `;
  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    render('Jane');
  });
};

render('John');
