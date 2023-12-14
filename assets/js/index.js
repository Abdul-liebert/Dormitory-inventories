document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/db/data.json")
      .then((response) => response.json())
      .then((data) => {
        const cardContainer = document.getElementById("cardContainer");
  
        data.cards.forEach((cardData) => {
          
  
          if (cardData.description) {
              const description = cardData.description;
    
              description.forEach((description) => {
                const cardDiv = document.createElement("div");
                cardDiv.classList.add("col-lg-4", "mb-4");
    
                const cardHtml = `
                    <div class="card shadow border-0 mx-auto mt-5" style=" max-width:300px; min-height: 245px >
                    <div class="my-auto">
                        <div class="d-flex justify-content-center  ">
                            <div class="rounded-circle shadow-sm p-3 mt-3" style="width: 75px; height: 75px;">
                                <img src="${description.icon}" class="card-img-top img-fluid text-danger" alt="${description.title} Icon">
                            </div>
                        </div>
                      <div class="card-body text-center">
                        <h5 class="card-title fw-bold fs-3">${description.title}</h5>
                        <p class="card-text px-4 mb-3 " style="text-align:justify; font-size:12px;">${description.description}</p>
                      </div>    
                      </div>  
                    </div>
                  `;
    
                cardDiv.innerHTML = cardHtml;
                cardContainer.appendChild(cardDiv);
              });
            }
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
  