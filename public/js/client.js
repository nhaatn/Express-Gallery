// Asynchronous gallery fetch
fetch(`${window.location.origin}/api/v0/gallery`)
  .then((response) => {
    // JSON returned from server
    
    // Now convert into JS object
    return response.json();
  })
  .then((cars) => {
    // data Javascript object
    console.log(cars);
    let output = '';
    cars.forEach((car) => {
      output +=
      `
        <figure class="card">
          <img src=${car.path} alt="${car.title} JDM Car: ${car.description}">
          <figcaption>
            <h2>${car.description}</h2>
          </figcaption>
        </figure>
      `;
    });

    // Output to DOM
    document.querySelector('.gallery').innerHTML = output;
  })
  .catch((error) => {
    console.log('Uh oh! There is an error!');
  });