const bearCard = (array) => {
  $("#card-container").html("");
  array.forEach((item) => {
    $("#card-container").append(`
        <div class="card m-3 bear-card" style="width: 18rem;">
      <img src="${item.bearImage}" class="card-img-top bear-pic" alt="photo of bear named ${item.bearName}">
      <div class="card-body">
        <h5 class="card-title text-center">${item.bearName}</h5>
      </div>
    </div>`);
  });
};

export { bearCard };
