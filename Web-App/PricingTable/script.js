 const billingButtons = document.querySelectorAll('.billing-button');

  billingButtons.forEach(button => {
    button.addEventListener('click', () => {
      billingButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const cycle = button.getAttribute('data-cycle');
      const priceElements = document.querySelectorAll('.price-cycle');
      priceElements.forEach(element => {
        element.textContent = '/' + (cycle === 'monthly' ? 'month' : 'year');
      });
    });
  });

  const nextButton = document.querySelector('.next-button');

  nextButton.addEventListener('click', () => {
    // Handle the "Next" button click event here
    // For example, you can navigate to the next step or page
    alert("Proceed to the next step!");
  });

