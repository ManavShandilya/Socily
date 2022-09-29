const storyEl1 = document.getElementById('story1');
const storyEl2 = document.getElementById('story2');
const storyEl3 = document.getElementById('story3');
const storyEl4 = document.getElementById('story4');
const storyEl5 = document.getElementById('story5');
const storyEl6 = document.getElementById('story6');

const story1 = document.getElementById('1');
const story2 = document.getElementById('2');
const story3 = document.getElementById('3');
const story4 = document.getElementById('4');
const story5 = document.getElementById('5');
const story6 = document.getElementById('6');

const overlay = document.getElementById('overlay');

var root = document.querySelector(':root');


const Posts = [
  {
    profileImg: "images/profie-13.jpg",
    placeTime: "Dubai, 15 minutes ago",
    postImg: "images/feed-1.jpg",
    incart: 0
  },
  {
    profileImg: "images/profie-14.jpg",
    placeTime: "London, 25 minutes ago",
    postImg: "images/feed-2.jpg",
    incart: 0
  },
  {
    profileImg: "images/profie-15.jpg",
    placeTime: "Australia, 1 hour ago",
    postImg: "images/feed-3.jpg",
    incart: 0
  },
  {
    profileImg: "images/profie-16.jpg",
    placeTime: "Texas, 1 hour ago",
    postImg: "images/feed-4.jpg",
    incart: 0
  },
  {
    profileImg: "images/profie-17.jpg",
    placeTime: "Delhi, 2 hours ago",
    postImg: "images/feed-5.jpg",
    incart: 0
  },
  {
    profileImg: "images/profie-18.jpg",
    placeTime: "NYC, 2 hours ago",
    postImg: "images/feed-6.jpg",
    incart: 0
  },
  {
    profileImg: "images/profie-19.jpg",
    placeTime: "Madrid, 3 hours ago",
    postImg: "images/feed-7.jpg",
    incart: 0
  }
];

let numofClicks1 = 0;
console.log(numofClicks1);


 story1.addEventListener('click', ()=> {
  numofClicks1 += 1;
  console.log(numofClicks1);
  if(numofClicks1>1){
   $('#story1').show();
   overlay.classList.add('active');
   setTimeout(function() {
    $('#story1').fadeOut('medium');
    overlay.classList.remove('active');
    }, 3000);
  }
  else{
   storyEl1.classList.add('active');
   overlay.classList.add('active');
   setTimeout(function() {
    $('#story1').fadeOut('medium');
    overlay.classList.remove('active');
    }, 3000);
  }

 })

 let numofClicks2 = 0;


story2.addEventListener('click', ()=>{
 numofClicks2 += 1;
 console.log(numofClicks2);
 if(numofClicks2>1){
  $('#story2').show();
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story2').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
 else{
  storyEl2.classList.add('active');
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story2').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
})

let numofClicks3 = 0;

story3.addEventListener('click', ()=>{
 numofClicks3 += 1;
 console.log(numofClicks3);
 if(numofClicks3>1){
  $('#story3').show();
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story3').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
 else{
  storyEl3.classList.add('active');
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story3').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
})

let numofClicks4 = 0;

story4.addEventListener('click', ()=>{
 numofClicks4 += 1;
 console.log(numofClicks4);
 if(numofClicks4>1){
  $('#story4').show();
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story4').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
 else{
  storyEl4.classList.add('active');
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story4').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
})

let numofClicks5 = 0;

story5.addEventListener('click', ()=>{
 numofClicks5 += 1;
 console.log(numofClicks5);
 if(numofClicks5>1){
  $('#story5').show();
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story5').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
 else{
  storyEl5.classList.add('active');
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story5').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
})

let numofClicks6 = 0;

story6.addEventListener('click', ()=>{
 numofClicks6 += 1;
 console.log(numofClicks6);
 if(numofClicks6>1){
  $('#story6').show();
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story6').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
 else{
  storyEl6.classList.add('active');
  overlay.classList.add('active');
  setTimeout(function() {
   $('#story6').fadeOut('medium');
   overlay.classList.remove('active');
   }, 3000);
 }
})


/////////////////////////////////New Post Handler/////////////////////////////////////

const createPost = document.getElementById('createPost');

const createPotsection = document.getElementById('create-post');

const closeBtn = document.getElementById('close-btn');

createPost.addEventListener('click', ()=>{
  createPotsection.classList.add('active');
  overlay.classList.add('active');
});

closeBtn.addEventListener('click', ()=>{
  createPotsection.classList.remove('active');
  overlay.classList.remove('active');
})

const createPostBtn = document.getElementById('create-post-handler');

createPostBtn.addEventListener('click', ()=>{
  const imageUrlInput = document.getElementById('fname').value;
  const captionInput = document.getElementById('lname').value;

  console.log(imageUrlInput);
  console.log(captionInput);

  createPotsection.classList.remove('active');
  overlay.classList.remove('active');

  const feeds = document.getElementById('feeds');
  const feed = document.createElement('div');
  feed.className = "feed";
  feed.innerHTML = `
   <div class="head">
   <div class="user">
     <div class="profile-photo">
      <img src="images/profile-8.jpg" alt="">
     </div>
     <div class="info">
      <h3>Lana Rose</h3>
      <small>California, Now</small>
     </div>
   </div>
    <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
   </div>
<div class="photo">
  <img src="${imageUrlInput}" alt="">
</div>
<div class="action-button">
  <div class="interaction-buttons">
    <span><i class="fa-regular fa-heart heartIcon active"></i></span>
    <span><i class="fa-regular fa-comment"></i></span>
    <span><i class="uil uil-share-alt"></i></span>
  </div>
  <div class="bookmark">
   <span><i class="fa-regular fa-bookmark bookmarks"></i></span>
  </div>
</div>

<div class="caption">
  <p>${captionInput}</p>
</div>
<div class="text-muted comments">

</div>
  `;
  feeds.prepend(feed);
});

///////////////////////////Like Btns//////////////////////////

const feed = Array.from(document.getElementsByClassName('photo'));
const heartIcons = Array.from(document.getElementsByClassName('heartIcon'));

for(let i = 0; i<feed.length; i++){
  feed[i].addEventListener('dblclick', ()=>{
    heartIcons[i].className = "fa-solid fa-heart";
  })
}

let num  = 0;
console.log(num);

heartIcons.forEach((el)=>{
  el.addEventListener('click', ()=>{
    num += 1;
    console.log(num);
    if(el.className === 'fa-solid fa-heart'){
      el.className = "fa-regular fa-heart"
      
    }
    else{
      el.className = 'fa-solid fa-heart';
    }
  })
})

const bookmarks = Array.from(document.getElementsByClassName('bookmarks'));

let num2  =0;


///////////////////////////For Bookmark///////////////////////////

bookmarks.forEach((el)=>{
  el.addEventListener('click', (e)=>{
    num2 += 1;
    // console.log(num2);
    if(num2%2===0){
      el.className = "fa-regular fa-bookmark";
      
    }
    else{
      el.className = 'fa-solid fa-bookmark';
    }

    const index = e.target.id;
    // console.log(index);

    postNumbers(Posts[index]);

  })
})

function postNumbers(prod){
  // console.log("The product cliked is", prod);
  let PostNumbers = localStorage.getItem('postNumbers');
  PostNumbers = parseInt(PostNumbers);

  if(PostNumbers){
    localStorage.setItem('postNumbers', PostNumbers+1);
  }
  else{
    localStorage.setItem('postNumbers', 1);
  }

  setItems(prod);
}

function setItems(prod){
  let postItems = localStorage.getItem("productsInCart");
  postItems = JSON.parse(postItems);
  if(postItems!=null){
    if(postItems[prod.postImg] == undefined){
      postItems = {
        ...postItems,
        [prod.postImg]: prod,
        [prod.profileImg]: prod,
        [prod.placeTime]: prod
      }
    }
    postItems[prod.postImg].incart += 1;
  }
  else{
    products.incart = 1;
    cartItems = {
      [prod.postImg]: prod,
      [prod.profileImg]: prod,
      [prod.placeTime]: prod
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(postItems))
}

function displayBookmark(){
  let postItems = localStorage.getItem('productsInCart');
  postItems = JSON.parse(postItems);

  const feedBookmark = document.getElementById('feed-bookmark');
  feedBookmark.className = 'feeds';

  if(postItems && feedBookmark){
    feedBookmark.innerHTML = "";
    Object.values(postItems).map(item =>{
      feedBookmark.innerHTML += `
        <div class="feed">
        <div class="head">
        <div class="user">
          <div class="profile-photo">
           <img src="${item.profileImg}" alt="">
          </div>
          <div class="info">
           <h3>Lana Rose</h3>
           <small>${item.placeTime}</small>
          </div>
        </div>
         <span class="edit"><i class="uil uil-ellipsis-h"></i></span>
        </div>
     <div class="photo">
       <img src="${item.postImg}" alt="">
     </div>
     <div class="action-button">
       <div class="interaction-buttons">
         <span><i class="fa-regular fa-heart heartIcon active"></i></span>
         <span><i class="fa-regular fa-comment"></i></span>
         <span><i class="uil uil-share-alt"></i></span>
       </div>
       <div class="bookmark">
        <span><i class="fa-solid fa-bookmark bookmarks"></i></span>
       </div>
     </div>
     
     <div class="caption">
       <p>An extraordinary life full of honour, glory and adventure.</p>
     </div>
     <div class="text-muted comments">
     
     </div>
        </div>
      `;
    })
  }
}

displayBookmark();

//////////////////////////////Menu-item////////////////////////

const menuItems = document.querySelectorAll('.menu-item');

const changeActiveItem = ()=>{
  menuItems.forEach((item)=>{
    item.classList.remove('active');
  })
}

menuItems.forEach((item)=>{
  item.addEventListener('click', ()=>{
    changeActiveItem();
    item.classList.add('active');
    console.log(item.id);

      const notificationPopup = document.querySelector('.notification-popup');
      console.log(notificationPopup);
    if(item.id != 'notifications'){
      notificationPopup.style.display = 'none';
    }
    else{
      notificationPopup.style.display = 'block';
      document.querySelector('.notifications-count').style.display = 'none';
    }
  
  })
})

const messageNotifications = document.querySelector('#messages-notifications');

const messages = document.querySelector('.messages');

const message = document.querySelectorAll('.message'); // done

const msgpopup = document.querySelector('#messages');
const msgSearch = document.getElementById('message-search'); //done

const searchMsg = ()=>{
  const val = msgSearch.value.toLowerCase();
  console.log(val);
  message.forEach(chat=>{
    let name = chat.querySelector('h5').textContent.toLowerCase();
    if(name.indexOf(val) != -1){
      chat.style.display = 'flex';
    }
    else{
      chat.style.display = 'none';
    }
  })
}

msgSearch.addEventListener('keyup', searchMsg);

messageNotifications.addEventListener('click', ()=>{

   messageNotifications.querySelector('.notifications-count').style.display = 'none';
  //  message.style.display = 'block';
   messages.style.boxShadow = '0 0 1rem var(--color-primary)';
   console.log(msgpopup);
   msgpopup.style.display = 'block';
   setTimeout(()=>{
     messages.style.boxShadow = 'none';
   }, 2000)
})

const themeModel = document.querySelector('.customize-theme');

const theme = document.getElementById('theme');

const openThemeModel = ()=>{
  themeModel.style.display = 'grid';
}

theme.addEventListener('click', openThemeModel);

themeModel.addEventListener('click', (e)=>{
  if(e.target.classList.contains('customize-theme')){
    themeModel.style.display = 'none';
  }
})

const fontSizes = document.querySelectorAll('.choose-size span');

const removeSizeSelector = ()=>{
  fontSizes.forEach(size =>{
    size.classList.remove('active');
  })
}



fontSizes.forEach(size =>{
  
  size.addEventListener('click', ()=>{
    let fontSize;
    removeSizeSelector();
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1')){
      fontSize = '10px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
      fontSize = '13px';
      root.style.setProperty('----sticky-top-left', '5.4rem');
      root.style.setProperty('----sticky-top-right', '-7rem');
    }
    else if(size.classList.contains('font-size-3')){
      fontSize = '16px';
      root.style.setProperty('----sticky-top-left', '-2rem');
      root.style.setProperty('----sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
      fontSize = '19px';
      root.style.setProperty('----sticky-top-left', '-5rem');
      root.style.setProperty('----sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
      fontSize = '22px';
      root.style.setProperty('----sticky-top-left', '-12rem');
      root.style.setProperty('----sticky-top-right', '-35rem');
    }
  
    document.querySelector('html').style.fontSize = fontSize;
  })
})

const colorPalette = document.querySelectorAll('.choose-color span');

const coloractivechange = ()=>{
  colorPalette.forEach(colorPicker=>{
    colorPicker.classList.remove('active');
  })
}

colorPalette.forEach(color =>{
  color.addEventListener('click', ()=>{
    let primary;
    coloractivechange();
    if(color.classList.contains('color-1')){
      primary = 252;
    }
    else if(color.classList.contains('color-2')){
      primary = 52;
    }
    else if(color.classList.contains('color-3')){
      primary = 352;
    }
    else if(color.classList.contains('color-4')){
      primary = 152;
    }
    else if(color.classList.contains('color-5')){
      primary = 202;
    }

    color.classList.add('active');

    root.style.setProperty('--primary-color-hue', primary);
  })
})

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = ()=>{
  root.style.setProperty('--light-color-lightness', lightColorLightness);
  root.style.setProperty('--white-color-lightness', whiteColorLightness);
  root.style.setProperty(' --dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', ()=>{
  Bg1.classList.add('active');

  Bg2.classList.remove('active');
  Bg3.classList.remove('active');

  window.location.reload();
})

Bg2.addEventListener('click', ()=>{
  darkColorLightness = '95%';
  whiteColorLightness = '20%'
  lightColorLightness = '15%';

  Bg2.classList.add('active');

  Bg1.classList.remove('active');
  Bg3.classList.remove('active');
  changeBg();
  document.querySelector('h2').style.color = 'white';
  document.querySelector('.handle h4').style.color = 'white';
  document.querySelectorAll('.menu-item h4').style.color = 'white';
  document.querySelectorAll('i').style.color = 'white';
})
Bg3.addEventListener('click', ()=>{
  darkColorLightness = '95%';
  whiteColorLightness = '10%'
  lightColorLightness = '0%';

  Bg3.classList.add('active');

  Bg1.classList.remove('active');
  Bg2.classList.remove('active');
  changeBg();
})










