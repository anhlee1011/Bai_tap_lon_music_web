document.getElementById('service').addEventListener('change', function() {
  var service = this.value;
  var priceInput = document.getElementById('price');
  
  if (service === 'haircut') {
    priceInput.value = '100,000 VND';
  } else if (service === 'hairstyling') {
    priceInput.value = '150,000 VND';
  } else if (service === 'haircoloring') {
    priceInput.value = '200,000 VND';
  } else {
    priceInput.value = '';
  }
});