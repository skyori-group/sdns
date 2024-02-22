$(document).ready(function(){
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


    $('html').niceScroll({cursorborder:"none"});

    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
    });
    $('#answersItems').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
    });

    $('.hrefs > a').on('click',function(e){
        e.preventDefault();
        var el = $(this).attr('atrpos');
        var pos = $('#'+el).offset().top;
        $('html').getNiceScroll(0).doScrollTop(pos,500);
    })
    $('.review.visible').fancybox();
    $('.answer.visible').fancybox();
    $(".fancybox").fancybox();
})
