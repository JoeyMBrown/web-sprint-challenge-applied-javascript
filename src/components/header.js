const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const div = document.createElement('div');
  const spanDate = document.createElement('span');
  const h1 = document.createElement('h1');
  const spanTemp = document.createElement('span');

  div.classList.add('header');
  spanDate.classList.add('date');
  spanDate.textContent = date;
  h1.textContent = title;
  spanTemp.classList.add('temp');
  spanTemp.textContent = temp;

  const divElements = [spanDate, h1, spanTemp];

  divElements.forEach((item) => {
    div.appendChild(item);
  });

  return div;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const placeToAppendHeader = document.querySelector(selector);
  placeToAppendHeader.appendChild(Header('Joey Codes', '7/9/21', 'TEMP!'))
}

export { Header, headerAppender }
