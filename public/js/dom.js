const querySelectors = (selectorsName, typeofQuerySelector) => {
  if (selectorsName.length !== typeofQuerySelector.length) return 'Error';
  const elements = {};
  typeofQuerySelector.map(
    (e, i) => {
      elements[selectorsName[i]] = document.querySelector(e);
    },
  );
  return elements;
};
const makeNodes = (nodesName, nodesType) => {
  if (nodesName.length !== nodesType.length) return 'Error';
  const nodes = {};
  nodesName.forEach((name, index) => {
    nodes[name] = document.createElement(nodesType[index]);
    return nodes;
  });
  return nodes;
};
const selectorsName = ['submitButton',
  'inputText',
  'contaner',
  'popUp',
];
const typeofQuerySelector = ['.submitButton',
  '.inputText',
  '.contaner',
  '.popUp',
];

const {
  submitButton,
  inputText,
  contaner,
   popUp,
} = querySelectors(selectorsName, typeofQuerySelector);
const render = (error, res) => {
  const arrayFood = res.recipes;
  if (arrayFood.length === 0) {
    contaner.appendChild(document.createTextNode('Enter Valid Value'));
  }
  arrayFood.forEach((element) => {
    const nodesName = ['foodContaner', 'title', 'img', 'link'];
    const nodesType = ['div', 'h3', 'img', 'a'];
    const {
      foodContaner, title, img, link,
    } = makeNodes(nodesName, nodesType);
    title.textContent = element.title;
    img.src = element.image_url;
    link.textContent = 'For Description';
    link.href = element.source_url;
    foodContaner.classList.add('card');
    img.classList.add('image');
    title.classList.add('image');
    foodContaner.appendChild(title);
    foodContaner.appendChild(img);
    foodContaner.appendChild(link);
    contaner.appendChild(foodContaner);
  });
};
submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  contaner.innerHTML = '';
  const textValue = inputText.value.trim();
  if (textValue) {
    fetch('POST', '/food', textValue, render);
    inputText.value = '';
  } else {
    contaner.appendChild(document.createTextNode('Enter Valid Value'));
    inputText.value = '';
  }
});
