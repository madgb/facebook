// Select map false no video
let selectedIconObjArr = [];

const iconObjArrSelector = () => {
    for(let i = 0; i < iconObjArr.length; i++){
        let isMap = iconObjArr[i].map;
        let isVid = iconObjArr[i].id.split(' ').includes('video');
        if(!isMap && !isVid){
            selectedIconObjArr.push(iconObjArr[i])
        }
    }
}

iconObjArrSelector();
console.log(selectedIconObjArr);