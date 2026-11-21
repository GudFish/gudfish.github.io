(() => {
  const search = document.getElementById('blog-search');
  const buttons = [...document.querySelectorAll('.filter-button')];
  const posts = [...document.querySelectorAll('.blog-list-item')];
  const empty = document.getElementById('no-posts');
  let activeTag = '';
  const filter = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    posts.forEach(post => {
      const tags = JSON.parse(post.dataset.tags);
      const matches = (!activeTag || tags.includes(activeTag)) && post.textContent.toLocaleLowerCase().includes(query);
      post.hidden = !matches;
      if (matches) visible++;
    });
    empty.hidden = visible !== 0;
  };
  buttons.forEach(button => button.addEventListener('click', () => {
    activeTag = button.dataset.tag;
    buttons.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    filter();
  }));
  search.addEventListener('input', filter);
})();
