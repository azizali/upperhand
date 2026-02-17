const data = Array.from(document.querySelectorAll('h3')).map(h3 => {
  const mainContainer = h3.closest('div').closest('div').closest('div');
  const link = h3.querySelector('a');
  const desc = mainContainer.querySelector('p');
  const tags = Array.from(mainContainer.querySelectorAll('li')).map(li =>
    li.textContent.trim());
  const sideContainer = mainContainer.nextElementSibling;
  const countryEmoji = Array.from(sideContainer?.textContent ||
    '').filter(char => char.codePointAt(0) > 127462 && char.codePointAt(0) <
      127488).slice(0, 2).join('');
  const socialLink = sideContainer?.querySelector('a[ href*="twitter"],a[href *= "bsky"]');
       return {
    name: link.textContent.trim(),
    url: link.href,
    description: desc?.textContent.trim() || '',
    tags: tags.join(', '),
    country: countryEmoji,
    social: socialLink?.href || ''
  };
});

// Download as CSV
const escapeCsv = (val) => !val ? '' : (val.includes(',') ||
  val.includes('"') || val.includes('\n') ? '"' + val.replace(/"/g, '""') + '"'
  : val);
const csv = 'Name,URL,Description,Tags,Country,Social\n' +
  data.map(p => [escapeCsv(p.name), escapeCsv(p.url),
  escapeCsv(p.description), escapeCsv(p.tags), escapeCsv(p.country),
  escapeCsv(p.social)].join(',')).join('\n');
const blob = new Blob([csv], { type: 'text/csv' });
const url = URL.createObjectURL(blob);
const a = document.createElement('a');
a.href = url;
a.download = 'uses-tech-people.csv';
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

console.log(`✓ Downloaded CSV with ${data.length} people!`);