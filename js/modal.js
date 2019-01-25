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
    const iconObjArr = [{
            contents: 'Dunkin Donuts',
            icon: 'https://foodbanksj.org/wp-content/uploads/2018/03/Color-Dunkin-Donuts-Logo.jpg'
        },
        {
            contents: 'Starbucks',
            icon: 'https://illuminatisymbols.info/wp-content/uploads/illuminati-symbols-Starbucks-Coffee-Logo.gif'
        },
        {
            contents: 'Taco Bell',
            icon: 'http://photos1.blogger.com/blogger/2398/1277/1600/tacobell.png'
        }
    ]

    target.on('click', (e) => {
        e.preventDefault();
        let maxlen = iconObjArr.length - 1;
        let theNum = Math.floor(Math.random() * (maxlen - 0 + 1)) + 0;

        let icon = iconObjArr[theNum].icon;
        let content = iconObjArr[theNum].contents;

        lonlat(icon);
        adPend(content);
    })

    const lonlat = (icon) => {
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

            initMap(lat, lng, icon);
        });
    }

    const initMap = (lat, lng, icon) => {

        console.log(lat, lng);
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

        let image = new google.maps.MarkerImage(icon, null, null, null, new google.maps.Size(50, 50));

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
        canvas.text(content);
    }

});