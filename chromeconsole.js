function expandAlContents(){
  
  var contentlist=document.getElementsByClassName('classroom-toc-chapter__toggle-title t-14 t-bold t-white');

  for(i=0;i<contentlist.length;i++)
  {
    contentlist[i].click();
    //await sleep(1500);
  }

  return contentlist.length
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUrls(){

var  len=document.getElementsByClassName('course-toc__item-content t-14 t-black t-normal').length;
if(len!=0){
for (i=0; i < len;i++ ) {

console.log("Fetching url of video ",i+1);
console.log(document.getElementsByTagName('video')[0].getAttribute('src'));
document.getElementsByClassName('vjs-control vjs-button vjs-next-button')[0].click();
await sleep(5000);


}
}
else{
  

contentlength=expandAlContents();
var noofvideos=document.getElementsByClassName('classroom-toc-item-layout__title t-14 t-white ember-view').length;
console.log("Reached else- video length is ",noofvideos);

for (i=0; i < noofvideos;i++ ) {

//console.log("Fetching url of video ",i+1);
console.log(document.getElementsByTagName('video')[0].getAttribute('src'));
document.getElementsByClassName('vjs-control vjs-button vjs-next-button')[0].click();
await sleep(2000);


}
}

}

console.log('starting');
getUrls();
