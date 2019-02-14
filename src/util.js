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

export const checkIfScoreIsgood = (score, scores) => {
  let arr = [];
  Object.values(scores).forEach(el => {
    arr.push(el.score);
  });
  arr = arr.sort(function (a, b) { return a - b }).reverse()
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < score) {
      return i;
    } else if (i > 4) {
      return -1;
    }
  }
  return arr.length;
}

export const produceUl = (scoresArray, rank, score) => {
  const ul = document.getElementById('high-score-name');
  const sul = document.getElementById('high-score-score');
  let placed = false;

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  while (sul.firstChild) {
    sul.removeChild(sul.firstChild);
  }

  scoresArray.forEach((el, i) => {
    let li = document.createElement("li");
    let sli = document.createElement("li");

    if (i === rank) {
      createForm(ul, score);
      let newli = document.createElement("li");
      newli.appendChild(document.createTextNode(score));
      sul.appendChild(newli);
      placed = true;
    }
      li.appendChild(document.createTextNode(`${el.name}`));
      ul.appendChild(li);
      sli.appendChild(document.createTextNode(`${el.score}`));
      sul.appendChild(sli);
      if (i === scoresArray.length - 1 && !placed && rank) {
        createForm(ul, score);
        let newli = document.createElement("li");
        newli.appendChild(document.createTextNode(score));
        sul.appendChild(newli);
    }
  });
};

export const generateHighScoreForm = (score) => {
  fetchScores().then(scores => {
    let rank = checkIfScoreIsgood(score, scores);
    let arr = Object.values(scores);
    if (rank > -1) {
      produceUl(arr.sort(function (a, b) { return a.score - b.score; }).reverse().slice(0, 4), rank, score);
      return true;
    } else {
      arr = Object.values(scores);
      produceUl(arr.sort(function (a, b) { return a.score - b.score; }).reverse().slice(0, 5), false, score);
      return false;
    }
  });
};

export const createForm = (ul, score) => {
  let my_form = document.createElement('FORM');
  my_form.name = 'myForm';
  my_form.method = 'POST';
  my_form.onsubmit = (e) => {
    e.preventDefault();
    postScore(document.getElementById('name').value, score);
  };

  let inputEl = document.createElement('INPUT');
  inputEl.type = 'TEXT';
  inputEl.name = 'name';
  inputEl.value = '';
  inputEl.id = 'name';
  inputEl.style = 'width: 120px;height:38px;font-size:36px;background-color:#c9cacc;border: 1px solid #c9cacc;';
  inputEl.maxLength = "5";
  my_form.appendChild(inputEl);


  let formLi = document.createElement("li");
  formLi.appendChild(my_form);
  ul.appendChild(formLi);
};

export const clearForm = () => {
  const ul = document.getElementById('high-score-name');
  const sul = document.getElementById('high-score-score');

  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  while (sul.firstChild) {
    sul.removeChild(sul.firstChild);
  }
};