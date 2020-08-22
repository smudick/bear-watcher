const bearCard = (array) => {
  $("#card-container").html("");
  array.forEach((item, index) => {
    $("#card-container").append(`
      <div class="card m-3 bear-card" style="width: 18rem;">
        <img src="${item.bearImage}" class="card-img-top bear-pic" alt="photo of bear named ${item.bearName}">
        <div class="card-body">
        <h3 class="card-title text-center">${item.bearName}</h3>
        <h5 class="text-center">Fishing Stats</h5>
        <div class="buttons d-flex justify-content-around">
          <button type="button" id="attempt-button-${index}" class="btn btn-primary">Attempt</button>
          <button type="button" id="caught-button-${index}" class="btn btn-success">Caught</button>
        </div>
        <div class="d-flex">
          <div id="attempt-timestamp-${index}" class="timestamp-attempt p-1"></div>
          <div id="caught-timestamp-${index}" class="timestamp-caught p-1"></div>
        </div>
      </div>
    </div>`);
  });
};

let attempts = [];

const attemptButtonClick = (array) => {
  array.forEach((item, index) => {
    $(`#attempt-button-${index}`).click(() => {
      let attempt = {};
      attempt.timeStamp = Date();
      attempt.index = index;
      attempts.push(attempt);
      console.log(attempts);
      $(`#attempt-timestamp-${index}`).append(
        `<div>Attempt!: at ${attempt.timeStamp}</div>`
      );
    });
  });
};

const caughtButtonClick = (array) => {
  array.forEach((item, index) => {
    $(`#caught-button-${index}`).click(() => {
      let caught = {};
      caught.timeStamp = Date();
      caught.index = index;
      attempts.push(caught);
      console.log(attempts);
      $(`#caught-timestamp-${index}`).append(
        `<div>Success!: at ${caught.timeStamp}</div>`
      );
    });
  });
};


const buttonClicks = (array) => {
  attemptButtonClick(array);
  caughtButtonClick(array);
};

export { bearCard, buttonClicks };
