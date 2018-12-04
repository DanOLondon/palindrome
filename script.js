const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(isPalendrome(input.value));
});

function isPalendrome(string) {
  if (!string) return false;
  string = string.toLowerCase();
  const start = string.slice(0, string.length / 2);
  const end = Array.from(start).reverse().join('');
  return string.slice(-end.length) === end;
}