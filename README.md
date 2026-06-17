# Poorbar
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PORBAR | باربری تهران به سراسر ایران</title>

<link rel="stylesheet" href="style.css">

<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700;800&display=swap" rel="stylesheet">
</head>

<body>

<div class="cursor-glow"></div>

<nav class="navbar glass">
<div class="logo">PORBAR</div>

<div class="menu">
<a href="#services">خدمات</a>
<a href="#trust">اعتماد</a>
<a href="#contact">تماس</a>
</div>
</nav>

<section class="hero">

<div class="hero-content glass">

<h1>باربری و حمل و نقل حرفه‌ای</h1>

<h2>
از تهران به سراسر ایران
</h2>

<p>
حمل انواع اثاثیه منزل، کالاهای تجاری، اداری و صنعتی
با امنیت کامل و تحویل سریع
</p>

<div class="buttons">
<a href="#contact" class="btn">ثبت سفارش</a>
<a href="tel:09122272869" class="btn secondary">تماس فوری</a>
</div>

</div>

</section>

<section id="trust" class="section">

<h2 class="title">چرا PORBAR ؟</h2>

<div class="cards">

<div class="glass card">
<h3>امنیت کامل بار</h3>
<p>بار شما با دقت و مسئولیت کامل جابجا می‌شود.</p>
</div>

<div class="glass card">
<h3>پشتیبانی 24 ساعته</h3>
<p>در تمام مراحل حمل در کنار شما هستیم.</p>
</div>

<div class="glass card">
<h3>تحویل سریع</h3>
<p>ارسال بار در کوتاه‌ترین زمان ممکن.</p>
</div>

<div class="glass card">
<h3>تجربه بالا</h3>
<p>سال‌ها فعالیت حرفه‌ای در صنعت باربری.</p>
</div>

</div>

</section>

<section class="stats">

<div class="glass stat">
<h3>10000+</h3>
<p>محموله جابجا شده</p>
</div>

<div class="glass stat">
<h3>98%</h3>
<p>رضایت مشتریان</p>
</div>

<div class="glass stat">
<h3>24/7</h3>
<p>پشتیبانی</p>
</div>

</section>

<section id="services" class="section">

<h2 class="title">خدمات ما</h2>

<div class="cards">

<div class="glass card">
<h3>باربری شهری</h3>
</div>

<div class="glass card">
<h3>باربری بین شهری</h3>
</div>

<div class="glass card">
<h3>حمل اثاثیه منزل</h3>
</div>

<div class="glass card">
<h3>حمل بار شرکتی</h3>
</div>

</div>

</section>

<section id="contact" class="section">

<div class="glass contact">

<h2>تماس با ما</h2>

<p>
📍 تهران، اتوبان ساوه، پایانه بار بزرگ تهران، پلاک ۲۵۸
</p>

<p>
📱 09122272869
</p>

<p>
📱 09127657740
</p>

<p>
☎️ 02155297795
</p>

</div>

</section>

<a class="whatsapp"
href="https://wa.me/989122272869"
target="_blank">
💬
</a>

<script src="script.js"></script>

</body>
</html>
*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Vazirmatn',sans-serif;
}

body{
background:#060816;
color:white;
overflow-x:hidden;
}

body::before{
content:'';
position:fixed;
width:500px;
height:500px;
background:#00d4ff;
filter:blur(250px);
opacity:.15;
top:-100px;
right:-100px;
z-index:-1;
}

body::after{
content:'';
position:fixed;
width:500px;
height:500px;
background:#7c3aed;
filter:blur(250px);
opacity:.15;
bottom:-100px;
left:-100px;
z-index:-1;
}

.glass{
background:rgba(255,255,255,.07);
backdrop-filter:blur(20px);
border:1px solid rgba(255,255,255,.1);
border-radius:24px;
}

.navbar{
position:fixed;
top:20px;
left:50%;
transform:translateX(-50%);
width:90%;
padding:15px 25px;
display:flex;
justify-content:space-between;
align-items:center;
z-index:999;
}

.logo{
font-size:28px;
font-weight:800;
}

.menu{
display:flex;
gap:25px;
}

.menu a{
color:white;
text-decoration:none;
}

.hero{
height:100vh;
display:flex;
align-items:center;
justify-content:center;
padding:20px;
}

.hero-content{
padding:60px;
max-width:900px;
text-align:center;
}

.hero h1{
font-size:60px;
margin-bottom:15px;
}

.hero h2{
font-size:32px;
color:#00d4ff;
}

.hero p{
margin-top:20px;
line-height:2;
}

.buttons{
margin-top:30px;
display:flex;
justify-content:center;
gap:15px;
flex-wrap:wrap;
}

.btn{
padding:15px 30px;
background:linear-gradient(90deg,#00d4ff,#7c3aed);
border-radius:14px;
text-decoration:none;
color:white;
}

.secondary{
background:rgba(255,255,255,.1);
}

.section{
padding:100px 20px;
max-width:1300px;
margin:auto;
}

.title{
text-align:center;
font-size:40px;
margin-bottom:50px;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
}

.card{
padding:30px;
}

.stats{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
padding:50px;
max-width:1200px;
margin:auto;
}

.stat{
padding:40px;
text-align:center;
}

.stat h3{
font-size:50px;
color:#00d4ff;
}

.contact{
padding:50px;
max-width:900px;
margin:auto;
text-align:center;
}

.contact p{
margin:15px 0;
}

.whatsapp{
position:fixed;
bottom:25px;
left:25px;
width:65px;
height:65px;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
background:#25D366;
font-size:30px;
text-decoration:none;
color:white;
box-shadow:0 0 30px #25D366;
}

.cursor-glow{
position:fixed;
width:300px;
height:300px;
background:#00d4ff;
filter:blur(120px);
opacity:.15;
pointer-events:none;
z-index:-1;
}

@media(max-width:768px){

.hero h1{
font-size:38px;
}

.hero h2{
font-size:22px;
}

.menu{
display:none;
}

}
const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove',(e)=>{

glow.style.left = e.clientX - 150 + 'px';
glow.style.top = e.clientY - 150 + 'px';

});
