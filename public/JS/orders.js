const orders = document.querySelectorAll('.orderContainer');

for (let i = 0; i < orders.length; i++) {
  const currOrder = orders[i];
  if (Number(currOrder.dataset.client) !== 0) {
    const acceptButton = currOrder.querySelector('.accept');
    acceptButton.remove();
    const acceptForm = currOrder.querySelector('.order');
    acceptForm.innerHTML = '<h3>Уже скоро привезем!</h3>';
  }
}
