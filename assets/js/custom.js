var aobjs = [
  {
    question:'А как мы можем быть уверены, что голосует именно депутат?',
    answer:'Авторизация в приложении СДЭГ проходит по персональному логину и паролю. Учетными записями депутатов управляет администратор системы. Дополнительно можно настроить подтверждение по смс. Кроме того, по окончании заседания участники могут распечатать сводную информацию о своих результатах голосования, заверить их и передать в аппарат.'
  },
  {
    question:'Смогут ли депутаты сами сориентироваться в интерфейсе и принципе работы приложения или потребуется обучение?',
    answer:'Интерфейс приложения максимально упрощен. Дополнительного обучения не требуется. Подробные инструкции мы предоставим. Кроме того, мы будем сопровождать первое заседание (или тестовое заседание по вашему выбору)'
  },
  {
    question:'А как мы поймем, что есть кворум, если заседание проводится удаленно?',
    answer:'В ходе проведения заседания в СДЭГ отображается список депутатов, которые находятся в системе в данный момент, и информация об их количестве от общего числа депутатов. Если кворума пропадает, на экраны участников выводится уведомление. <br> Сейчас кворум фиксируется при наличии онлайн двух третей от общего числа депутатов. При необходимости можно настроить другие параметры определения кворума.'
  },
  {
    question:'Можно ли изменять условия принятия решения (варианты подсчета результатов голосования)?',
    answer:'Да, можно. Для каждого голосования оператор определяет вариант принятия решения из представленных в СДЭГ. Доступны формулы подсчета: большинство (50%+1) или 2/3 голосов от общего числа депутатов или от количества присутствующих. При необходимости можно настроить другие формулы подсчета голосов.'
  },
];

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    var scrollTop = $(hash).offset().top - 74;
    $('html, body').animate({
      scrollTop: scrollTop
    }, 800);
  }
});

$(document).ready(function() {
  $(".navbar-toggler").click(function() {
    var navbar = $(".navbar-collapse");
    if (navbar.hasClass("opened")) {
      navbar.removeClass("opened");
      $("body").removeClass("navOpened");
      $(".navbar-toggler").removeClass("toggle-clicked");
    } else {
      navbar.addClass("opened");
      $("body").addClass("navOpened");
      $(".navbar-toggler").addClass("toggle-clicked");
    }
  });
  
  $(".nav-link").click(function() {
    $(".navbar-toggler").click();
  })

  var rootReviews = document.getElementById('answersItems');
  var rootABoxes = document.createElement('div');
  rootABoxes.style.display = 'none';
  aobjs.forEach(function(item,index){
    var r = document.createElement('div');
    r.setAttribute('class','answer visible');
    r.setAttribute('href',`#answerData${index}`)
    var z = document.createElement('div');
    z.setAttribute('class','answer');
    z.setAttribute('id',`answerData${index}`);
    var h = document.createElement('div');
    h.setAttribute('class', 'header');
    h.innerText = item.question;
    var c = document.createElement('div');
    c.setAttribute('class', 'content');
    c.innerHTML = item.answer.slice(0,item.answer.indexOf(' ',250)) + '...';
    var cf = document.createElement('div');
    cf.setAttribute('class', 'content');
    cf.innerHTML = item.answer;
    r.append(h,c);
    z.append(h.cloneNode(true),cf);
    rootReviews.append(r);
    rootABoxes.append(z);
  })
  document.body.append(rootABoxes);

  $('#answersItems').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

  $('.review.visible').fancybox();
  $('.answer.visible').fancybox();
  $(".fancybox").fancybox();
})
