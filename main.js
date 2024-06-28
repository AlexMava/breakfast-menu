document.addEventListener("DOMContentLoaded", function() {
    const theForm = document.getElementById('js-breakfast-form'),
        daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let breakfastMenu = {};

    theForm.addEventListener("submit", (e) => {
        e.preventDefault()
        
        let formContent = e.target.content.value,
            formDay = e.target.day.value,
            formPrice = e.target.price.value,
            formObject = {},
            output = '';

        if (formContent && formDay && formPrice) {
            formObject = {
                dish: formContent,
                price: +formPrice,
            }

            if (!breakfastMenu.hasOwnProperty(formDay)) {
                breakfastMenu[formDay] = [formObject];
            } else {
                breakfastMenu[formDay] = [...breakfastMenu[formDay], formObject]
            }

            theForm.reset();
            document.getElementById('js-form-status').innerText = '';

        } else {
            document.getElementById('js-form-status').innerText = 'All fieds are requared!';
        }

        daysOfWeek.map((oneDay) => {
            if (breakfastMenu[oneDay]) {
                output += `<h2>${oneDay}</h2><ul>`;

                breakfastMenu[oneDay].forEach((item) => {
                    output += `<li><b>${item.dish}: </b><span>$${item.price}</span></li>`;
                });
                output += '</ul>';
            }
        });

        document.getElementById('js-breakfast-menu').innerHTML = output;
        // console.log(breakfastMenu);
    });
  });