// // Set the date we're counting down to
// var countDownDate = new Date("Oct 21, 2023 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";

//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);


// var result = document.getElementById('random_String');   
//     function random_String_Generator() {   
//         result.innerHTML = Math.random().toString(36).slice(2); 
//     }

// hàm thời gian thứ 2 của voucher
function updateCountdown(targetDateId, daysId, hoursId, minutesId, secondsId) {
  const targetDate = new Date("2023-12-24 00:00:00").getTime();
  const countdownElement = document.getElementById(targetDateId);

  function calculateRemainingTime() {
      const currentDate = new Date().getTime();
      const timeRemaining = targetDate - currentDate;
      
      if (timeRemaining <= 0) {
          countdownElement.textContent = "0";
      } else {
          const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

          document.getElementById(daysId).textContent = days;
          document.getElementById(hoursId).textContent = hours;
          document.getElementById(minutesId).textContent = minutes;
          document.getElementById(secondsId).textContent = seconds;
      }
  }

  calculateRemainingTime();
  setInterval(calculateRemainingTime, 1000);
}

updateCountdown("countdown1", "days1", "hours1", "minutes1", "seconds1");
updateCountdown("countdown2", "days2", "hours2", "minutes2", "seconds2");
updateCountdown("countdown3", "days3", "hours3", "minutes3", "seconds3");
updateCountdown("countdown4", "days4", "hours4", "minutes4", "seconds4");
updateCountdown("countdown5", "days5", "hours5", "minutes5", "seconds5");
updateCountdown("countdown6", "days6", "hours6", "minutes6", "seconds6");

//hàm tạo voucher

 // Function to generate a random voucher code
 function generateRandomVoucher() {
  const characters = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let voucher = '';
  for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      voucher += characters.charAt(randomIndex);
  }
  return voucher;
}

// Update voucher elements with random voucher codes
for (let i = 1; i <= 7; i++) {
  const voucherElement = document.getElementById(`voucher${i}`);
  voucherElement.textContent = generateRandomVoucher();
}
// Function to redeem a voucher (you can customize this function)
function redeemVoucher(voucherNumber) {
  alert(`Đã lưu ${voucherNumber}`);
}