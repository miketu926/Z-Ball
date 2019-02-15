import $ from 'jquery';

export const fetchScores = () => {
  return $.ajax({
    method: 'GET',
    url: 'https://zball-7e179.firebaseio.com/.json',
  });
};

export const postScore = (name, score) => {
  return $.ajax({
    method: 'POST',
    url: 'https://zball-7e179.firebaseio.com/.json',
    data: JSON.stringify({
      "name": `${name}`,
      "score": score
    })
  });
};