// $(document).ready(function(){})
$(function(){
    let left_text = ['HOME','PORTFOLIO','CONTECT']
    $('.main_full').fullpage({
        anchors:['f01','f02','f03'],
        css3: false,
        scrollOverflow: false,
        responsiveWidth : 1000,
        // Github 에서 afterLoad 검색
        afterLoad: function(origin, destination, direction, trigger){
            let idx = destination.index;
            // console.log(idx)
            const video = $('.home-box').find('video');
            if(idx==0){
                video.get(0).play();
            }
            // 활성화된 on을 제외하고 나머지 지운다
            $('.section').eq(idx).addClass('on').siblings().removeClass('on');
            $('nav li').eq(idx).addClass('on').siblings().removeClass('on');
            $('.footer .left span').text(left_text[idx])
            $('.footer .left strong').text('0' +(idx +1))
        },
    })

    //우측상단햄버거
    $('.cover_btn').click(function(){
        $('#cover').animate({
            'right': '0'
        }, 500)
    })
    // nav 안 ul 복제하고 cover 메뉴 추가하기
    let cloneMenu = $('nav>ul').clone();
    console.log(cloneMenu)
    $('#cover').append(cloneMenu);
    $('#cover a').on('click',function(){
        $('#cover').animate({
            'right': '-50%'
        }, 500)
    })

    $('#cover').click(function(){
        $('#cover').animate({
            'right': '-50%'
        }, 500)
    })
    $('.section').click(function(){
        $('#cover').animate({
            'right': '-50%'
        }, 500)
    })

})




// javascript
    const spanEl = document.querySelector('.main_full .f01 .home-text h2 span')
    const txtArr = ['Hye joon','Motion grapher', 'Director', 'Producer'];
    // console.log(txtArr)
    // console.log(spanEl)
    index = 0;
    let currentTxt = txtArr[index].split('') //화면에 표시할 문장 배열에서 요소를 하나 가져온뒤 배열로 만들기 => 단어를 하나하나 추출함

    function writeTxt(){
        spanEl.textContent += currentTxt.shift();
        // 배열 요소를 앞에서부터 하나씩 출력 shift : 배열 맨 앞요소를 가져와서 원본 배열에서 삭제

        // = 대입 (우측의 값을 지정변수에 넣는다느낌) , ==같다, !==아니다, a += 1 (a = a+1 )

        if(currentTxt.length !== 0){
        // correntTxt의 길이가 (배열이) 0 이 아니라면 == 출력해야할 단어가 남았다
        // setInterval() 반복문, clearInterval() 반복 끝낸다, setTimeout() 딜레이
        
        setTimeout(writeTxt, Math.floor(Math.random()*200))
        }else{
        // correntTxt 길이가 0이다 == 배열 안에 있는 모든 텍스트가 전부 출력이 되었다.

        currentTxt = spanEl.textContent.split('');
        // 텍스트를 지우기 위해서 화면에 표시된 텍스트를 가져와서 단어단어를 분리

        setTimeout(deleteTxt,1000);
        //3초 후 텍스트 지우기
        }
    }
    function deleteTxt(){
        currentTxt.pop() //배열에 있는 요소를 끝에서부터 하나씩 삭제
        spanEl.textContent = currentTxt.join('') //현재 배열에 있는 요소를 하나의 문자열로 합쳐서 삭제된것 처럼 보임

        if(currentTxt.length !==0){
            setTimeout(deleteTxt, Math.floor(Math.random()*100))
            //만약에 값이 남아 있으면 deleteTxt() 함수를 호출하고 호출시간은 0~100랜덤으로 돌리겠다.
        }else{
            // 모든 배열이 pop에 의해서 삭제되면 실행
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split('');
            writeTxt();
        }
    }
    writeTxt()


