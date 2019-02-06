const querySelectors = (selectorsName, typeofQuerySelector) => {
    if (selectorsName.length !== typeofQuerySelector.length) return "Error";
    let elements = {};
    typeofQuerySelector.map(
        (e, i) => (elements[selectorsName[i]] = document.querySelector(e))
    );
    return elements;
}
const makeNodes = (nodesName, nodesType) => {
    if (nodesName.length !== nodesType.length) return 'Error';
    const nodes = {}
    nodesName.forEach((name, index) => nodes[name] = document.createElement(nodesType[index]));
    return nodes;
}
selectorsName = ['submitButton',
    'inputText',
    'contaner'
];
typeofQuerySelector = ['.submitButton',
    '.inputText',
    '.contaner'
]
const { submitButton,
    inputText,
    contaner
} = querySelectors(selectorsName, typeofQuerySelector)
const render = (res) => {
    const arrayFood = res.recipes;
    arrayFood.forEach(element => {
        nodesName = ['foodContaner', 'title', 'img', 'link'];
        nodesType = ['div', 'h1', 'img', 'a']
        const { foodContaner, title, img, link } = makeNodes(nodesName, nodesType);
        title.textContent = element.title;
        img.src = element.image_url;
        link.textContent = 'For Description';
        link.href = element.source_url;
        foodContaner.appendChild(title);
        foodContaner.appendChild(img);
        foodContaner.appendChild(link);
        contaner.appendChild(foodContaner);
    });
}
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    textValue = inputText.value;
    fetch('POST', '/food', textValue, render)
})
