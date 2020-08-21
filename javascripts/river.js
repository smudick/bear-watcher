const bearCard = (array) => {
    $('#card-container').html('');
    array.forEach((item) => {
        $('#card-container').append(`
        <div class="card" style="width: 18rem;">
      <img src="${item.bearImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.bearName}</h5>
      </div>
    </div>`)
    });
}

export { bearCard }