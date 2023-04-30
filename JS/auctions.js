const div = document.getElementById("product");
const divtrend = document.getElementById("trending-content");
let productArray=[];




fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.map(data =>{
      div.innerHTML+= `
      <div class="thumb-wrapper">
      <div class="container-fluid d-flex justify-content-center">
            <div class="row mt-3">
              <div class="col-sm-4">
                <div class="card">
              <img src="${data.image}" class="card-img-top img-box" width="50%">
              <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                <div class="d-flex flex-column"><div class="d-flex flex-row"><img style="border-radius: 12px;" src="../Images/profile.png" width="25px" height="25px"><div class="d-flex flex-column ml-1 justify-content-center"><small class="ghj">Amro Alkhazaleh</small></div></div></div><span class="follow-icon"><i class="fa fa-user-plus"></i></span>
                <!-- <div class="d-flex flex-column"><small class="text-muted mb-2">HORSEPOWER</small><div class="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"><h6 class="ml-1">135 hp&ast;</h6></div></div> -->
              </div>
              <div class="d-flex justify-content-center">
                <p class=" mt-2"><b>${data.category}</b></p>
                </div>
              <div class="card-body pt-0 px-0">
                <div class="d-flex flex-row justify-content-between mb-0 px-3">
                  <small class="text-muted mt-1">CURRENT BID</small>
                  <h6>$${data.price}&ast;</h6>
                </div>
                <hr class="mt-2 mx-3">
                <div class="text-muted" style="height:5rem; overflow-y: hidden;"><small>${data.description}</small></div>
                <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-vie-details btn-block"><small>VIEW DETAILS</small></button></div>
                <hr class="mt-2 mx-3">
                <div class="d-flex justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg></i><small class=" ml-2">12d 5h 22m</small>
                </div>
              </div>
            </div>
        </div>
            </div>
          </div>
      
      `



      divtrend.innerHTML+= `
      
      <div class="container-fluid d-flex justify-content-center mt-5">
            <div class="row mt-3">
              <div class="col-sm-4">
                <div class="card">
              <img src="${data.image}" class="card-img-top img-box" width="50%">
              <span class="wish-icon"><i class="fa fa-heart-o"></i></span>
              <div class="d-flex flex-row justify-content-between p-3 mid">
                <div class="d-flex flex-column"><div class="d-flex flex-row"><img style="border-radius: 12px;" src="../Images/profile.png" width="25px" height="25px"><div class="d-flex flex-column ml-1 justify-content-center"><small class="ghj">Amro Alkhazaleh</small></div></div></div><span class="follow-icon"><i class="fa fa-user-plus"></i></span>
                <!-- <div class="d-flex flex-column"><small class="text-muted mb-2">HORSEPOWER</small><div class="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"><h6 class="ml-1">135 hp&ast;</h6></div></div> -->
              </div>
              <div class="d-flex justify-content-center">
                <p class=" mt-2"><b>${data.category}</b></p>
                </div>
              <div class="card-body pt-0 px-0">
                <div class="d-flex flex-row justify-content-between mb-0 px-3">
                  <small class="text-muted mt-1">CURRENT BID</small>
                  <h6>$${data.price}&ast;</h6>
                </div>
                <div class="mx-3 mt-3 mb-2"><button type="button" class="btn btn-vie-details btn-block"><small>VIEW DETAILS</small></button></div>
              </div>
            </div>
        </div>
            </div>
         
      
      `
    })

  })
  .catch(error => {
    console.error(error);
  });