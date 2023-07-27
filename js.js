const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var curr__music;
var curr__DOM;
var img_main = $('.img__style');
var process = $('.process input');
var loop = false;
var ran_dom = false;
var DanhSachChiSoNhac;
var cur_index = 1;
function setTimeInput(thoigian){
    thoigian.video = this.video;
    
}
const btn = $('.icon__play i');

const arrList = [
    {
        id:1,
        img:'assest/img/123anhyeuem.png',
        author: 'FAY',
        name: 'Tinh Yeu Khung Long',
        video: 'assest/music/TinhYeuKhungLong-FAY.mp3'
    },
    {
        id:2,
        img:'assest/img/cherrylove.jpg',
        author: 'Híu',
        name: 'Cherry Love speed up',
        video: 'assest/music/cherrylove.mp3'
    },
    {
        id:3,
        img:'assest/img/cupid.png',
        author: 'FIFTY FIFTY',
        name: 'Cupid remix',
        video: 'assest/music/cupid.mp3'
    },
    {
        id:4,
        img:'assest/img/depnhatlaem.jpg',
        author: 'SOOBIN x JIYEON',
        name: 'Đẹp nhất là em remix',
        video: 'assest/music/depnhatlaem.mp3'
    },
    {
        id:5,
        img:'assest/img/dungmimcuoinhuthe.png',
        author: 'MIN',
        name: 'Tren Tinh Ban Duoi Tinh Yeu',
        video: 'assest/music/TrenTinhBanDuoiTinhYeu-MIN.mp3'
    },
    {
        id:6,
        img:'assest/img/ifwebrokeup.png',
        author: 'AnDree',
        name: 'Nhac Anh (Rap)',
        video: 'assest/music/NhacAnh-Andree.mp3'
    },
    {
        id:7,
        img:'assest/img/matmoc.png',
        author: 'Phạm Nguyên Ngọc',
        name: 'Mặt Mộc speed up',
        video: 'assest/music/matmoc.mp3'
    },
    {
        id:8,
        img:'assest/img/11gio11phut.png',
        author: ' MiiNa x RIN9 x DREAMeR',
        name: '11:11',
        video: 'assest/music/11gio11phut.mp3'
    },
    {
        id:9,
        img:'assest/img/bestmusicysuo.png',
        author: 'わからない笑',
        name: 'Phố đã lên đèn',
        video: 'assest/music/PhoDaLenDen.mp3'
    },
    {
        id:10,
        img:"assest/img/Nothin'OnMe.png",
        author: 'Dieu Kien',
        name: "Thuyen Quen",
        video: "assest/music/ThuyenQuyenAmRemix.mp3"
    },
    {
        id:11,
        img:"assest/img/QuyenDatTen.png",
        author: 'Phạm Nguyên Ngọc',
        name: "QUÊN ĐẶT TÊN",
        video: "assest/music/QuenDatTen.mp3"
    },
    {
        id:12,
        img:"assest/img/ngunglamban.png",
        author: 'Freaky',
        name: "Gu",
        video: "assest/music/Gu.mp3"
    },
    {
        id:13,
        img:"assest/img/tradang.png",
        author: 'NB Hoai Bao♪',
        name: "Trot Trao Duyen",
        video: "assest/music/TrotTraoDuyen.mp3"
    },
    {
        id:14,
        img:"assest/img/Sunroof.png",
        author: 'Ngo Lan Huong ♪',
        name: "Yeu Dung So Dau",
        video: "assest/music/YeuDungSoDau.mp3"
    },
    {
        id:15,
        img:"assest/img/Sunroof.png",
        author: 'Ahihi ♪',
        name: "Vuong Van",
        video: "assest/music/VuongVan.mp3"
    },
    {
        id:16,
        img:"assest/img/Sunroof.png",
        author: 'Huong Ly ♪',
        name: "Vui Lam Nha",
        video: "assest/music/VuiLamNha.mp3"
    },
    {
        id:17,
        img:"assest/img/Sunroof.png",
        author: 'VAnh♪',
        name: "Nhat Tren Doi",
        video: "assest/music/NhatTrenDoi.mp3"
    },
    {
        id:18,
        img:"assest/img/Sunroof.png",
        author: 'Huong Ly♪',
        name: "Mong Mot Ngay Anh Nho Den Em",
        video: "assest/music/MongMotNgayAnhNhoDenEm.mp3"
    },
    {
        id:19,
        img:"assest/img/Sunroof.png",
        author: 'Linh Huong♪',
        name: "Hoi Uc Ta Da Yeu",
        video: "assest/music/HoiUcTaDaYeu.mp3"
    },
    {
        id:20,
        img:"assest/img/Sunroof.png",
        author: 'ACV♪',
        name: "De Vuong",
        video: "assest/music/DeVuong.mp3"
    },
    {
        id:21,
        img:"assest/img/Sunroof.png",
        author: 'LAB♪',
        name: "Chay Khoi The Gioi Nay",
        video: "assest/music/ChayKhoiTheGioiNay.mp3"
    },
]
DanhSachChiSoNhac = arrList.map( (obj,i) => obj.id );

function display(){
    const box_list = $('.box__list');
    var item = arrList.map( (obj,index) =>
    `
        <div class="box__item index${obj.id}" onclick="play_music(${obj.id}) ">
            <img src="${obj.img}" alt="" srcset="" class="img__item${obj.id}">
            <div class="box__item--des">
                <span class="text__bold">${obj.name}  ♫♫</span>
                <span class="text__blur"><i>${obj.author}</i></span>
            </div>
            <i class="fas fa-ellipsis-h"></i>
            <audio class="video${obj.id}">
                <source src="${obj.video}" type="audio/mp3">
            </audio>
        </div>
        `
    )
    
    // console.log(item);
    box_list.innerHTML = item.join('');
}
display();
function play_music(id){
    cur_index = id;
    if(curr__music != null && curr__music.play() && curr__DOM != null) {
        curr__music.pause();
        curr__music == null;
        curr__DOM.style.backgroundColor = '#ffffff6a';
    }
    img_main.src = $('.index'+id+' img').src;
    img_main.style.animation = 'xoay linear infinite 20s';
    curr__music = $('.video'+id);
    setTime_end_label(curr__music,id)
    curr__DOM = $('.index'+id);
    curr__DOM.style.backgroundColor = '#ffffff18';
    if(!btn.classList.contains('fa-pause')){
        btn.classList.remove('fa-play');
        btn.classList.add('fa-pause');
    }
    curr__music.play();
    load_timemusic(); 
     
}
function perius(id){
    console.log(id)
    if(id <= 1){
        cur_index = DanhSachChiSoNhac.length;
        play_music(cur_index);
    }else{
        cur_index -= 1; 
        play_music(cur_index);
    }
}
function next(id){
    if(id >= DanhSachChiSoNhac.length){
        cur_index = 1;
        play_music(cur_index);
    }else{
        cur_index += 1; 
        play_music(cur_index);
    }
}
function setTime_end_label(curr__music,id){
    process.setAttribute('max',curr__music.duration);
    setTime(curr__music)
    curr__music.ontimeupdate = ()=>{
        var a = Math.floor(curr__music.currentTime / 60);
        var b = Math.floor(curr__music.currentTime % 60);
        var ch = `0${a}:0${b}`;
        if(b > 9){
            ch = `0${a}:${b}`;
        }
        $('.process span:first-child').innerText = ch;
        process.value = curr__music.currentTime;
    }
    curr__music.onended = (e) => {
        e.target.pause();
        if(loop){
            play_music(id);
        }else if(ran_dom){
            play_music(DanhSachChiSoNhac[Math.floor( Math.random() * DanhSachChiSoNhac.length )  ]);
        }else{
            next(id);
        }
        
    }  
}
function setTime(audio){
    var a = Math.floor(audio.duration / 60);
    var b = Math.floor(audio.duration % 60);
    var ch = `0${a}:0${b}`;
        if(b > 9){
            ch = `0${a}:${b}`;
        }
    $('.process span:last-child').innerText = ch;
}
function load_timemusic(){
        if( curr__music.play() ){
            process.oninput = (e) => {
                curr__music.currentTime = e.target.value;
            }
        }
}
function changeiconBtn(){
    if(curr__music != null && curr__music.play() && btn.classList.contains('fa-pause')){
        btn.classList.remove('fa-pause');
        btn.classList.add('fa-play');
        img_main.style.animation = "none";
        curr__music.pause();
    }else{
        btn.classList.remove('fa-play');
        btn.classList.add('fa-pause');
        img_main.style.animation = 'xoay linear infinite 20s';
        curr__music.play();
    }
}

btn.onclick = function(){
    if(curr__music == null){
        play_music(1)
        return;
    }
    changeiconBtn();
};

$('.controll i:nth-child(2)').onclick = () =>{
    perius(cur_index);
}
$('.controll i:nth-child(4)').onclick = () =>{
    next(cur_index);
}
$('.controll i:first-child').onclick = (e) => {
    if(loop){
        loop = false;
        e.target.classList.remove('active');
    }else{
        loop = true;
        e.target.classList.add('active');
    }
}
$('.controll i:nth-child(5)').onclick = (e) => {
    if(ran_dom){
        ran_dom = false;
        e.target.classList.remove('active');
    }else{
        ran_dom = true;
        e.target.classList.add('active');
    }
}
