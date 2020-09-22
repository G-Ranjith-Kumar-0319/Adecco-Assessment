var grid = $('#container');

var numbers = [];

// var colors = ['#6f98a8','#2b8ead','#2f454e','#2b8ead','#2f454e','#bfbfbf','#bfbfbf','#6f98a8','#2f454e'];

for (var i = 1; i <= 9; i++) {
 
  grid.append(`<div class="card Card${i}">${i}</div>`);
  numbers.push(i);
}


$(".btn_shu").click(function(temp) {
  var theLength = numbers.length - 1;
  var toSwap;
  var temp;

  
  
  for (var i = theLength; i > 0; i--) {
    toSwap = Math.floor(Math.random() * (i + 1));
    temp = numbers[i];
    numbers[i] = numbers[toSwap];
    numbers[toSwap] = temp;
  }
  
  i = 0;
  
  $('.card').each(function() {
    this.innerHTML = numbers[i]; 
    // $(".card").addClass(`}`);
    i++;
  });
  
});

$(".btn_sort").click(function() {
  numbers.sort();  
  i = 0;
  
  $('.card').each(function() {
    this.innerHTML = numbers[i];
    i++;
  });
});