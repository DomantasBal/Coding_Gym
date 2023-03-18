const getData = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

let apiGet = getData("https://testapi.io/api/Domantas/resource/bookings");

window.onload = async () => {
  const posts = await getData(
    "https://testapi.io/api/Domantas/resource/bookings"
  );

  console.log(posts.data);
  for (booking of posts.data) {
    let posting = `
        <div class="order">
          <h1> Apartamentai: ${booking.room} </h1>
          <p>Vardas: ${booking.name} </p>
          <p>Pavarde: ${booking.last} </p>
          <p>Butas: ${booking.room} </p>
          <p>Atvyksta: ${booking.date} </p>
        </div>
      `;
    document.body.innerHTML += posting;
  }
};
