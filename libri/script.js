const Librouno = 'https://striveschool-api.herokuapp.com/books';

fetch(Librouno)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayBooks(data);
  })
  .catch(error => console.error('Errore durante il recupero dei dati:', error));

// Funzione per visualizzare i libri sulla pagina
function displayBooks(books) {
  const bookListContainer = document.getElementById('bookList');

  books.forEach(book => {
    const card = document.createElement('div');
    card.classList.add('col-md-3', 'mb-4');

    card.innerHTML = `
      <div class="card">
        <img src="${book.img}" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Prezzo: ${book.price} €</p>
          <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
        </div>
      </div>
    `;

    bookListContainer.appendChild(card);
  });
}

// Funzione per rimuovere una card quando viene premuto il pulsante "Scarta"
function removeCard(button) {
  const card = button.closest('.card');
  card.remove();
}