// add reservation code, not finished

// $(() => {

//   const $reservationForm = $(`
//   <form id="reservation-form">
//         <p>Complete your reservation</p>

//         <div>
//           <input type="text" name="start-date" placeholder="Start Date">
//         </div>
//         <div>
//           <input type="text" name="end-date" placeholder="End Date">
//         </div>
//         <div>
//           <button>Reserve</button>
//           <a id="sign-up-form__cancel" href="#">Cancel</a>
//         </div>
//       </form>
//   `);
//   window.$reservationForm = $reservationForm;

//   $reservationForm.on('submit', function(event) {
//     event.preventDefault();

//     const data = $(this).serialize();
//     signUp(data)
//       .then(reserve)
//       .then((json) => {
//         header.update(json.user);
//         views_manager.show('listings');
//       });
//   });

//   $('body').on('click', '#sign-up-form__cancel', function() {
//     views_manager.show('listings');
//     return false;
//   });
      
// });