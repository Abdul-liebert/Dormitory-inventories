document.addEventListener("DOMContentLoaded", function () {
  fetch("/db/data.json")
    .then((response) => response.json())
    .then((data) => {
      const cardContainer = document.getElementById("cardContainer");

      data.cards.forEach((cardData) => {
        if (cardData.inventories) {
          const inventories = cardData.inventories;

          inventories.forEach((inventory) => {
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("col-lg-3", "mb-4");

            const cardHtml = `
              <div class="card shadow border-0 mx-auto mb-4" style="max-width:215px; min-height: 245px">
                <div class="my-auto">
                  <div class="d-flex justify-content-center ">
                    <div class="nav-link rounded-circle shadow-sm p-3" style="width: 75px; height: 75px;">
                      <img src="${inventory.icon}" class="card-img-top img-fluid text-danger" alt="${inventory.title} Icon">
                    </div>
                  </div>
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold fs-3">${inventory.title}</h5>
                    <p class="card-text">Qty: ${inventory.qty}</p>
                  </div>    
                </div>
              </div>
            `;

            cardDiv.innerHTML = cardHtml;
            cardContainer.appendChild(cardDiv);
          });

          function filter(katakunci) {
            var filteredItems = [];
            for (let a = 0; a < inventories.length; a++) {
              var items = inventories[a];
              var nameItems = items.title;
              var matching = nameItems.toLowerCase().includes(katakunci.toLowerCase());

              if (matching === true) {
                filteredItems.push(items);
              }
            }
            return filteredItems;
          }

          var search = document.getElementById("searchForm");
          search.addEventListener("submit", function (event) {
            event.preventDefault();
            var searching = document.getElementById("searchBar").value;

            var filtered = filter(searching);

            cardContainer.innerHTML = "";

            filtered.forEach((inventory) => {
              const cardDiv = document.createElement("div");
              cardDiv.classList.add("col-lg-3", "mb-4");

            const cardHtml = `
              <div class="card shadow border-0 mx-auto mb-4" style="max-width:215px; min-height: 245px">
                <div class="my-auto">
                  <div class="d-flex justify-content-center ">
                    <div class="nav-link rounded-circle shadow-sm p-3" style="width: 75px; height: 75px;">
                      <img src="${inventory.icon}" class="card-img-top img-fluid text-danger" alt="${inventory.title} Icon">
                    </div>
                  </div>
                  <div class="card-body text-center">
                    <h5 class="card-title fw-bold fs-3">${inventory.title}</h5>
                    <p class="card-text">Qty: ${inventory.qty}</p>
                  </div>    
                </div>
              </div>
            `;

            cardDiv.innerHTML = cardHtml;
            cardContainer.appendChild(cardDiv);
            });
          });
        }


        if (cardData.description) {
            const description = cardData.description;
  
            description.forEach((description) => {
              const cardDiv = document.createElement("div");
              cardDiv.classList.add("col-lg-4", "mb-4");
  
              const cardHtml = `
                  <div class="card shadow border-0 mx-auto mb-4" style=" max-width:300px; min-height: 245px >
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
              cardDescription.appendChild(cardDiv);
            });
          }
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
