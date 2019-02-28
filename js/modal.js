$(document).ready(function () {
    var preModal = $('.pre-survey');
    var modalWrapper = $('.pre-survey-wrapper');

    modalWrapper.hide();

    var valOne, valTwo, valThree, valFour, valFive, zipCode;
    preModal.on('submit', function (e) {
        e.preventDefault();
        valOne = $('input[name=number-one]:checked').val();
        valTwo = $('input[name=number-two]:checked').val();
        valThree = $('input[name=number-three]:checked').val();
        valFour = $('input[name=number-four]:checked').val();
        valFive = $('input[name=number-five]').val();
        zipCode = $('input[name=number-six]').val();
        if (!valOne || !valTwo || !valThree || !valFour || !valFive || !zipCode || zipCode.length !== 5) {
            alert('Please answer all questions')
        } else {
            console.log(valOne, valTwo, valThree, valFour, valFive, zipCode);
            modalWrapper.hide();
        }
    })


    let target = $('.click-ad');

    target.on('click', (e) => {
        e.preventDefault();
        let maxlen = selectedIconObjArr.length - 1;
        let theNum = Math.floor(Math.random() * (maxlen - 0 + 1)) + 0;
        let map = selectedIconObjArr[theNum].map;
        let icon = selectedIconObjArr[theNum].icon;
        let id = selectedIconObjArr[theNum].id;
        let width = selectedIconObjArr[theNum].width;
        let content = selectedIconObjArr[theNum].contents;
        let delay = selectedIconObjArr[theNum].delay || 30;

        if (map) {
            $('.ad-content').addClass('yes-map');
            lonlat(icon, id, width);
        }
        adPend(content);
        timer(delay);
        setTimeout(function(){
            $('.ad-close').show();
            $('.ad-close').on('click', (e) => {
                e.preventDefault();
                $('.ad-container').hide();
                theNum = null;
                map = null;
                icon = null;
                id = null;
                width = null;
                content = null;
                delay = null;
                $('.ad-close').hide();
                relocation();
            })
        }, delay*1000);
    })

    const lonlat = (icon, id, width) => {

        var xhr = $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`);

        // var xhr = $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=AIzaSyCCMB2aWEBVeQjjPEm2ZJBsx9M8ic6QJP0`);

        let lat, lng = null;

        xhr.done((data) => {
            console.log(data.status === "ZERO_RESULTS");
            if (data.status === "ZERO_RESULTS") {
                alert("Invalid zip code");
            }

            let plusOrMinusforlat = Math.random() < 0.5 ? -1 : 1;
            let plusOrMinusforlng = Math.random() < 0.5 ? -1 : 1;

            let latDiffFloor = Math.random() * (0.007 - 0.003) + 0.003;
            let lngDiffFloor = Math.random() * (0.007 - 0.003) + 0.003;

            let latDiff = plusOrMinusforlat * latDiffFloor;
            let lngDiff = plusOrMinusforlng * lngDiffFloor;

            lat = data.results[0].geometry.location.lat + latDiff;
            lng = data.results[0].geometry.location.lng + lngDiff;
            // lonlat.innerHTML = 'Latitude = ' + lat + ' ' + '<br>Longitude = ' + lng;

            initMap(lat, lng, icon, id, width);
        });
    }

    const initMap = (lat, lng, icon, id, width) => {
        console.log(lat, lng, id);
        let position = {
            lat,
            lng
        };

        let map = new google.maps.Map(
            document.getElementById('map'), {
                zoom: 15,
                center: position
            }
        );

        let image = new google.maps.MarkerImage(icon, null, null, null, new google.maps.Size(width, 50));

        let marker = new google.maps.Marker({
            position: position,
            icon: image,
            map: map
        });
    }

    const adPend = (content) => {
        let wrapper = $('.ad-container');
        let canvas = $('.ad-content');

        wrapper.show();
        canvas.html(content);
    }
    const timer = (time) => {
        let timer = $('.timer');
        timer.show();
        timer.text(time);
        var intrv = setInterval(function(){
            time--;
            if(time > 0){
                timer.text(time);
            } else {
                timer.hide();
                clearInterval(intrv);
            }
        }, 1000)
    }
    const relocation = () => {
        window.location.replace("https://madgb.github.io/facebook/huff.html");
    }

    $('.wrong-ad').on('click', function(){
        alert('You have chosen a wrong one! Please find a correct article!');
    })
});