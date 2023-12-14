document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/db/data.json")
      .then((response) => response.json())
      .then((data) => {
        const cardContainer = document.getElementById("cardContainer-1");
  
        data.cards.forEach((cardData) => {
          if (cardData.inventories) {
            const inventories = cardData.inventories;
  
            inventories.forEach((inventory) => {
              const cardDiv = document.createElement("div");
              cardDiv.classList.add("col-lg-3", "mb-4");
  
              const cardHtml = `
                  <div class="card shadow border-0 mb-4" style=" max-width:215px; min-height: 245px">
                  <div class="my-auto">
                      <div class="d-flex justify-content-center  ">
                          <div class="nav-link rounded-circle shadow-sm p-3" style="width: 75px; height: 75px;">
                              <img src="${inventory.icon}" class="card-img-top img-fluid text-danger" alt="${inventory.title} Icon">
                          </div>
                      </div>
                    <div class="card-body text-center">
                      <h5 class="card-title fw-bold fs-3">${inventory.title}</h5>
                      <p class="card-text" >Qty: ${inventory.qty}</p>
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
  