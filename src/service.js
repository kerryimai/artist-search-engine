import 'whatwg-fetch';

const get = url =>
  fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));

export const fetchArtist = name => {
  const serializedName = name.replace(/\s/g, '+');
  return get(
    `https://itunes.apple.com/search?term=${serializedName}&entity=album`
  )
    .then(res => (res.results ? res.results : []))
    .catch(err => err);
};
