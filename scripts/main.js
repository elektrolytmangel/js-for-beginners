const quote = {
  id: "c56aeca0-cb0f-4821-b9f7-8e69e97b1187",
  content: "It is what it is.",
  author: "Tj",
  additionalInformation: "Hoi An",
  type: "FAVORITE",
};

const quote2 = {
  id: "c56aeca0-cb0f-4821-b9f7-8e69e97b1189",
  content: "Lars ist super",
  author: "Lars",
  additionalInformation: "JS For Beginners",
  type: "FAVORITE",
};

const myDefaultQuotes = [quote, quote2];

async function showRandomQuote() {
  const response = await fetch(
    "https://quotesservice.whitebay-9c60bf5f.westeurope.azurecontainerapps.io/2"
  );

  const myRandomQuotes = await response.json();
  const randomQuotesContainer = document.getElementById(
    "random-quotes-container"
  );

  if (randomQuotesContainer.children.length > 0) {
    randomQuotesContainer.innerHTML = "";
  }

  if (myRandomQuotes.length === 0) {
    const noQuotesMessage = document.createElement("p");
    noQuotesMessage.textContent = "No quotes available";
    noQuotesMessage.className = "alert alert-danger";
    randomQuotesContainer.appendChild(noQuotesMessage);
  }

  const allQuotes = [...myDefaultQuotes, ...myRandomQuotes];
  for (const randomQuote of allQuotes) {
    const quoteContent = document.createElement("p");
    quoteContent.textContent = JSON.stringify(randomQuote);

    randomQuotesContainer.appendChild(quoteContent);
  }
}

const randomQuotesButton = document.getElementById("random-quotes-button");
randomQuotesButton.onclick = showRandomQuote;
