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
            id: 0,
            width: 120,
            contents: `<div class="vitafusion">
            <div class="header">
                <img src="img/vitafusion.png" alt="vitafusion">
            </div>
            <div class="main">
                <div class="text">
                    <div class="title">
                        Gummy Vitamins for <b>Adults</b>
                    </div>
                    <div class="content">
                        <p><b>Enjoy</b> being healthy</p>
                        <p><b>Enjoy</b> taste</p>
                        <p><b>Enjoy</b> the Experience</p>
                    </div>
                </div>
                <div class="img">
                    <img src="img/vitafusion_sub.png" alt="vitafusion">
                </div>
                <div class="bottom">
                    <p>
                        Now you can enjoy your vitamins with vitafusion! <br>
                        First gummy vitamins for adults! <br>
                        Available in the vitamin section at Target and other fine retailers. <br>
                        www.nwnaturalproducts.com
                    </p>
                </div>
            </div>
        </div>`,
            icon: 'img/vitafusion.png'
        },
        {
            id: 1,
            width: 120,
            contents: `<div class="yepme">
            <div class="header">
                <img src="img/yepme.png" alt="yepme">
            </div>
            <div class="main">
                <div class="left">
                    <div class="pack">
                        <div class="title">
                            High performance running shoes
                        </div>
                        <div class="text"></div>
                    </div>
                    <div class="pack">
                        <div class="title">
                            Blade sole
                        </div>
                        <div class="text r">
                            For energetic and efficient run
                        </div>
                    </div>
                    <div class="pack">
                        <div class="title">
                            SYNTHETIC UPPER
                        </div>
                        <div class="text r">
                            Comfortable and durable
                        </div>
                    </div>
                    <div class="pack">
                        <div class="title">
                            LIGHT WEIGHT TUBE SOLE
                        </div>
                        <div class="text y">
                            Air cushioning for high performance
                        </div>
                    </div>
                    <div class="pack">
                        <div class="title">
                            BREATHABILITY & SUPPORT
                        </div>
                        <div class="text y">
                            Slip resistant and excellent fit
                        </div>
                    </div>
                    <div class="pack">
                        <div class="title">
                            FLEXIBLE CUSHIONING
        
                        </div>
                        <div class="text y">
                            Fore muscle protection and comfort
                        </div>
                    </div>
                    <div class="pack">
                        <div class="title">
                            RUBBER OUTSOLE
                        </div>
                        <div class="text r">
                            For superior traction
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="upper">
                        <img src="img/yepme_sub.png" alt="">
                    </div>
                    <div class="bottom">
                        <p>
                            Now you can enjoy your running with YEPME! 
                            High performance running shoes! 
                            Available in the sports section at Target 
                            and other fine retailers.
                            www.yepme.com                        
                        </p>
                    </div>
                </div>
            </div>
        </div>`,
        icon: 'img/yepme.png'
        },
        {
            id: 2,
            width: 70,
            contents: `<div class="dufresne">
            <div class="header a">
                <img src="img/dufresne.png" alt="dufresne">
            </div>
            <div class="text t1 gr a">
                verona bedroom suite
            </div>
            <div class="text t2 bl a">
                Hidden felt-lined jewelry drawer
            </div>
            <div class="text t3 bl a">
                Soft slow close drawers
            </div>
            <div class="text t4 bl a">
                Under bed storage with 4 large full extension drawers
            </div>
            <div class="text t5 gr a">
                Now you can enjoy your life with Dufresne! <br>
                Verona Bedroom Suite! <br>
                Available in the furniture section at Target <br>
                and other fine retailers.
                www.durfresne.com
            </div>
        </div>`,
        icon: 'img/dufresne.png'
        }
    ]

    target.on('click', (e) => {
        e.preventDefault();
        let maxlen = iconObjArr.length - 1;
        let theNum = Math.floor(Math.random() * (maxlen - 0 + 1)) + 0;
        // let theNum = 2;

        let icon = iconObjArr[theNum].icon;
        let id = iconObjArr[theNum].id;
        let width = iconObjArr[theNum].width;
        let content = iconObjArr[theNum].contents;

        lonlat(icon, id, width);
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