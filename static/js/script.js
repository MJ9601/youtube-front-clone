const images = [
    'static/images/1.jpg',
    'static/images/2.jpg',
    'static/images/3.jpg',
    'static/images/4.jpg',
    'static/images/5.jpg',
    'static/images/6.jpg',
    'static/images/7.jpg',
    'static/images/8.jpg',
    'static/images/9.jpg',
    'static/images/10.jpg',
    'static/images/11.jpg'
];

for (let index = 0; index < 20; index++) {
    document.querySelector('.main-content')
    .innerHTML += `<div class="content-wrapper">
    <div class="img-wrapper">
        <a href="videopage.html"><img class="img-files" src="${images[Math.floor(Math.random() * images.length)]}" alt=""></a>
    </div>
    <div class="content-name">
        <div class="img-profile img-content">
            <img src="static/images/person_4.jpg" alt="">
        </div>
        <div class="content-title">
            <h1>Lorem ipsum dolor sit amet consectetu.</h1>

        </div>
    </div>
    <div class="content-details">
        <span>Channel's name</span>
        <span><h4>${Math.ceil(Math.random()* 100)}k Views . ${Math.ceil(Math.random()* 31)} days ago</h4></span>
    </div>
</div>`
    
}

document.querySelector('.sidebar-icon').addEventListener('click', () =>
    document.querySelector('.container').classList.toggle('change')
)

