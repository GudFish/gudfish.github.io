(() => {
  const dialog = document.getElementById('citation-dialog');
  if (!dialog) return;
  const text = document.getElementById('citation-text');
  const copy = document.getElementById('copy-citation');
  const status = document.getElementById('citation-status');

  const formats = [...dialog.querySelectorAll('[data-format]')];
  let citations = {};
  const displayFormat = format => {
    text.textContent = citations[format];
    text.classList.toggle('bibtex', format === 'bibtex');
    status.textContent = '';
    formats.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.format === format)));
  };
  formats.forEach(button => button.addEventListener('click', () => displayFormat(button.dataset.format)));

  document.querySelectorAll('.cite-button').forEach(button => {
    button.addEventListener('click', () => {
      citations = {normal: button.dataset.citation, bibtex: button.dataset.bibtex};
      displayFormat('normal');
      dialog.showModal();
    });
  });

  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(text.textContent);
      status.textContent = 'Copied to clipboard.';
    } catch (_) {
      // Leave the citation selected for manual copying if clipboard access is unavailable.
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Please copy the selected citation with Ctrl+C or ⌘C.';
    }
  });

  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
})();
