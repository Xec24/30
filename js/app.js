var titleText = 'Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!';

var promoTitle = document.getElementById('promoTitle'); 
promoTitle.innerText = titleText;                      

var button = document.getElementById('showAllFeedbacks');
showFindMessage1();
button.addEventListener('click', showFindMessage1);

function showFindMessage1() {
    var hiddenFeedbacks = document.getElementById('hiddenFeedbacks');

    if (hiddenFeedbacks.style.display === 'none') {
        
        hiddenFeedbacks.style.display = 'block';
        setTimeout(function () {
            hiddenFeedbacks.style.opacity = '1';
        }, 10);
        
        document.getElementById("showAllFeedbacks").style.display = 'none';
    } else {
        
        hiddenFeedbacks.style.opacity = '0';
        setTimeout(function () {
            hiddenFeedbacks.style.display = 'none';
        }, 500); 

        document.getElementById("showAllFeedbacks").style.display = 'block';
    }
}




    