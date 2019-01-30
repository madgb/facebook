$(document).ready(function () {
    var preModal = $('.pre-survey');
    var modalWrapper = $('.pre-survey-wrapper');
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


    let target = $('.newpostheader');
    
    target.on('click', (e) => {
        e.preventDefault();
        let maxlen = iconObjArr.length - 1;
        let theNum = Math.floor(Math.random() * (maxlen - 0 + 1)) + 0;
        console.log('Ad is', theNum);
        let map = iconObjArr[theNum].map;
        let icon = iconObjArr[theNum].icon;
        let id = iconObjArr[theNum].id;
        let width = iconObjArr[theNum].width;
        let content = iconObjArr[theNum].contents;

        if(map){
            $('.ad-content').addClass('yes-map');
            lonlat(icon, id, width);
        }
        adPend(content);
    })

    const lonlat = (icon, id, width) => {
        // icon = icon;
        // var input = document.getElementById('zip');
        // var lonlat = document.getElementById('lonlat');
        // if (input.value.length < 5 || input.value.length > 5) {
        //     alert('Invalid zip code');
        // }
        // if (input.value.length === 5) {

        // var zipCode = input.value;

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

});