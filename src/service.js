import 'whatwg-fetch';

const get = url => fetch(url).then(res => res.json());

export const fetchArtist = name => {
  const serializedName = encodeURIComponent(name).replace(/(%20)/g, '+');
  return get(
    `https://itunes.apple.com/search?term=${serializedName}&entity=album`
  ).then(res => (res.results ? res.results : []));
};
