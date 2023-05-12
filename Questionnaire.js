/*create a constant that calls element with id email*/
const email = document.getElementById('email');


/*create a function that checks wether email address format is valid or not*/
email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity('Please enter a valid email address');
        email.reportValidity();
    } else {
        email.setCustomValidity('');
    }

})
/*create a function that validates radio buttons */
function radioValidation() {

    /*calling radio buttons ny name*/
    const reccomend = document.getElementsByName('reccomend');

    /*initializing value to false to be used in the loop*/
    const reccomendValue = false;

    /*looping through buttons to find out wether or not atleast one radio button is checked */
    for (var i = 0; i < reccomend.length; i++) {
        if (reccomend[i].checked == true) {
            reccomendValue = true;
        }
    }
    /*if no radio button is checked an error alert is displayed */
    if (!reccomendValue) {
        alert('please choose a reccomendation');
        return false;
    }
}

