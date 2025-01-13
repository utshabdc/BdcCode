const card = document.querySelector('.card');
const title = document.getElementById('card-title');
const content = document.getElementById('card-content');

card.addEventListener('mouseover', () => {
    title.textContent = 'HELLO';
    content.textContent = 'HELLO BD';
});

card.addEventListener('mouseout', () => {
    title.textContent = 'AFTERSUN RECOVERY';
    content.textContent = 'With only the purest compounds to penetrate and restore the natural barrier of the skin. Free of harsh perfumes or chemicals, our aftersun product is gentle enough to use on both, body and face.';
});
