function buyNow(productName) {
  const phoneNumber = "9310885176";
  const message = `Hello! I want to buy: ${productName}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}


