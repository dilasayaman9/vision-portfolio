import { useEffect } from 'react';

const defaultTitle = 'Dilasa Yaman | Web Designer & Developer';
const defaultDescription =
  'Portfolio of Dilasa Yaman, a web designer and developer studying Web Design and Development at UA Little Rock.';

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

export default function PageMeta({ title = defaultTitle, description = defaultDescription }) {
  useEffect(() => {
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
  }, [title, description]);

  return null;
}
