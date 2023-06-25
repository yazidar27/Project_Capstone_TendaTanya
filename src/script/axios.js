const postWeb = document.getElementById("webinar-card");

const sendData = () => {
  axios.post("https://jsonplaceholder.typicode.com/posts").then((response) => {
    console.log(response);
  });
};
