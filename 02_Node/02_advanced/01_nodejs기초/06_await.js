async function init() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users[0]);
  } catch {
    console.error(err);
  }
}

init();
