const marked = require('marked');
const markdownView = document.querySelector('#markdown');
const htmlView = document.querySelector('#html');

const renderToMarkdown = (markdown) => {
	htmlView.innerHTML = marked(markdown, { sanitize: true});
}

markdownView.addEventListener('keyup', e => {
	const currentContent = e.target.value;
	renderToMarkdown(currentContent);
})