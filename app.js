navigator.getUserMedia = navigator.getUserMedia

//select everything in html
const video = document.querySelector('#video');
const audio = document.querySelector('#audio');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;

handTrack.startVideo(video).then(status => {
    if(status){
        navigator.getUserMedia({video: {}}, stream =>{
            video.srcObject = stream;
        },
        err => console.log(err))
    }
})

//load up model
handTrack.load().then(lmodel =>{
    model = lmodel
})