export function formatPrice(cents) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/g, '');
}

export function getFunName() {
  const adjectives = [
    'adorable',
    'beautiful',
    'fun',
    'silly'
  ];

  const nouns = [
    'green',
    'boy',
    'apple',
    'schmapple'
  ];

  return `${rando(adjectives)}-${rando(nouns)}`;
}
