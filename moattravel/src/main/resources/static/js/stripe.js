const stripe = Stripe('pk_test_51QwwMSDHMOkIgiDFnaQegzDCHj0zsE7dVrQdBjD1CTEiDm63bmXGEjdZfjjaYuFreQXZWzxBD0IqGpCritAxTwUY00AyMEPOA');
const paymentButton = document.querySelictor('#paymentButton');

peymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});