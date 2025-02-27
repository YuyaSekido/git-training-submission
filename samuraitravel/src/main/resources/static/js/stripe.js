const stripe = Stripe('pk_test_51QwwMSDHMOkIgiDFnaQegzDCHj0zsE7dVrQdBjD1CTEiDm63bmXGEjdZfjjaYuFreQXZWzxBD0IqGpCritAxTwUY00AyMEPOAQ');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});