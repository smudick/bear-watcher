import { bearCard, buttonClicks } from './river.js';

const bears = [];

const createForm = () => {
  $("#form-container").append(`
    <input id="bearNameInput" class="form-control form-control-lg m-1" type="text" placeholder="Input Bear Name">
    <input id="bearImageInput" class="form-control form-control-lg m-1" type="text" placeholder="Input Bear Image URL">
    <button type="button" id="submit" class="btn btn-primary btn-lg m-1 submit">Submit</button>
    `);
};

const clearForm = () => {
  $("#bearNameInput").val("");
  $("#bearImageInput").val("");
};

const getValues = () => {
  $("#submit").click(() => {
    
    let bear = {};
    bear.bearName = $("#bearNameInput").val();
    bear.bearImage = $("#bearImageInput").val();

    bears.push(bear);
    bearCard(bears);
    buttonClicks(bears);
    clearForm();
  });
};


export { createForm, getValues };
