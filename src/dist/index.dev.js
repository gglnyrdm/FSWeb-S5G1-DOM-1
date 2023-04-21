"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim"
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın"
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr"
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022"
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png"
  }
};
console.log('Proje açıldı!');
/* Kodlar Buradan aşağıya */

var navDom = document.querySelectorAll("nav a");
navDom.forEach(function (item, index) {
  item.textContent = siteContent.nav["nav-item-".concat(index + 1)];
  item.classList.add("italic");
});
var footer = document.querySelector("footer a");
footer.textContent = siteContent.footer.copyright;
footer.classList.add("bold");
var icerik = document.querySelectorAll(".text-content");
var index = 0;

for (var i = 0; i < icerik.length; i++) {
  icerik[i].children[0].textContent = Object.values(siteContent["ana-içerik"])[index];
  index += 1;
  icerik[i].children[1].textContent = Object.values(siteContent["ana-içerik"])[index];
  index += 1;
}

var resimler = document.querySelectorAll("img");
resimler.forEach(function (img, index) {
  img.src = Object.values(siteContent.images)[index];
});
var iletisim = document.querySelector(".contact");
var iletisimData = Object.values(siteContent.iletisim);

_toConsumableArray(iletisim.children).map(function (eleman, index) {
  iletisim.children[index].textContent = iletisimData[index];
});

document.getElementsByTagName("h1")[0].textContent = "Bu DOM Mükemmel";
document.getElementsByTagName("button")[0].textContent = "Başlayın";