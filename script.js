function filterMenu(category) {
  const items = document.querySelectorAll('.menu-item');
  items.forEach(item => {
    if (category === 'all' || item.dataset.category === category) {
      item.style.display = 'inline-block';
    } else {
      item.style.display = 'none';
    }
  });
}

function searchMenu() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const items = document.querySelectorAll('.menu-item');

  items.forEach(item => {
    const title = item.querySelector('h3').textContent.toLowerCase();
    item.style.display = title.includes(input) ? 'inline-block' : 'none';
  });
}
