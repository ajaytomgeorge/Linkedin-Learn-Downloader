function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUrls(){
var  len=document.getElementsByClassName('course-toc__item-content t-14 t-black t-normal').length;
for (i=0; i < len;i++ ) {

//console.log("Fetching url of video ",i+1);
console.log(document.getElementsByClassName('vjs-tech')[0].getAttribute('src'));
document.getElementsByClassName('vjs-control vjs-button vjs-next-button')[0].click();
await sleep(5000);


}

}

getUrls();
