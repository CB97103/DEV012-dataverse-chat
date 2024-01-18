import dataset from '../data/dataset.js';

// TRAE EL ID
export function getElementById(id) {
  const result = dataset.find(function (element) {
    return element.id === id;
  });
  return result;
}
