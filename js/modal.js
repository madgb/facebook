$(document).ready(function() {
    var preModal = $('.pre-survey');
    var modalWrapper = $('.pre-survey-wrapper');
    var valOne, valTwo, valThree, valFour, valFive, zipCode;
    preModal.on('submit', function(e){
        e.preventDefault();
        valOne = $('input[name=number-one]:checked').val();
        valTwo = $('input[name=number-two]:checked').val();
        valThree = $('input[name=number-three]:checked').val();
        valFour = $('input[name=number-four]:checked').val();
        valFive = $('input[name=number-five]').val();
        zipCode = $('input[name=number-six]').val();
        if(!valOne || !valTwo || !valThree || !valFour || !valFive || !zipCode || zipCode.length !== 5){
            alert('Please answer all questions')
        }else{
            console.log(valOne, valTwo, valThree, valFour, valFive, zipCode);
            modalWrapper.hide();
        }
    })
});