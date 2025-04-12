async function changeQuote() {
    let data = await getQuotes();
    const advice = document.querySelector('.quote');
    const adviceId = document.querySelector('#advice-id');
    if (data.advice && data.id) {
        advice.textContent = data.advice;
        adviceId.textContent = `#${data.id}`
    } else {
        advice.textContent = "something went wrong!";
        adviceId.textContent = `#error`
    }
}

async function getQuotes() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let res = await response.json();
    return res.slip || {};
}

changeQuote()