function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

function tes(b){
	ReactDOM.render(
  element,
  document.getElementById('JumbotronContent')
);
}
