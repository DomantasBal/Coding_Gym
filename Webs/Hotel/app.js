const bookingForm = document.querySelector("#booking-form");

function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(bookingForm);
  createPost(formData);
}

const createPost = (data) => {
  return fetch("https://testapi.io/api/Domantas/resource/bookings", {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.log(error));
};

bookingForm.addEventListener("submit", handleSubmit);
