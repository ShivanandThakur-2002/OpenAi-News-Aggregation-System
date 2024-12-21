document.addEventListener('DOMContentLoaded', () => {
  document.getElementById("news-form").addEventListener("submit", async function (event) {
      event.preventDefault();

      const companyName = document.getElementById("company-name").value;
      const startDate = document.getElementById("start-date").value;
      const endDate = document.getElementById("end-date").value;
      const emailAddress = document.getElementById("email-address").value;
      const outputDiv = document.getElementById("output");
      const emailConfirmationDiv = document.getElementById("email-confirmation");

      // Clear previous output and show a loading message
      outputDiv.textContent = "Loading...";
      emailConfirmationDiv.textContent = "";

      try {
          const response = await fetch("/fetch-news", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ companyName, startDate, endDate }),
          });

          if (!response.ok) {
              throw new Error("Failed to fetch news");
          }

          const result = await response.json();
          const newsSummary = result.news || "No news found.";
          outputDiv.textContent = newsSummary;

          // Send email with the news summary
          const emailResponse = await fetch("/send-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ emailAddress, newsSummary }),
          });

          if (!emailResponse.ok) {
              throw new Error("Failed to send email");
          }

          emailConfirmationDiv.textContent = "Email sent successfully.";
      } catch (error) {
          emailConfirmationDiv.textContent = "Error: " + error.message;
      }
  });
});
