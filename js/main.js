



window.addEventListener('DOMContentLoaded',function(){


    (function(){


        const leftBox = document.querySelector('.left_box');
        const rightBox = document.querySelector('.right_box');
        const chart_btn = document.querySelector('.right_box .btn_container');
        const bell = document.querySelector('#header .bell');
        const noticeBoard = document.querySelector('#header .notice');
        const sideBox = document.querySelectorAll('#side_box > ul > li');
        const detailCard = document.querySelector('#detail_card');





        leftBox.style.right = `${innerWidth*0.5 + 430}px`;
        rightBox.style.left = `${innerWidth*0.5 + 90}px`;





        function resizeFunc(){

            leftBox.style.right = `${innerWidth*0.5 + 430}px`;
            rightBox.style.left = `${innerWidth*0.5+ 90}px`;
        }










        function chartFunc(e){
            console.log(e.target.dataset);

            let elem = e.target;


            elem.classList.add('active');



            if( elem.dataset.name === 'chart01'){
                console.log('1번');

            }else if( elem.dataset.name === 'chart02'){
                console.log('2번');

            }else if( elem.dataset.name === 'chart03'){
                console.log('3번');
            }





        }


        function noticeFunc(){
            this.classList.toggle('on');

            if(this.classList.contains('on')){
                noticeBoard.style.display = 'block';
            }else{
                noticeBoard.style.display = 'none';
            }
        }




        //
        // function enterFunc(e){
        //     console.log(this.layerY);
        //
        //
        //     console.log(detailCard);
        //     detailCard.style.top = `${this.clientY}px`;
        //
        // }
        //
        //
        // for(let i = 0; i < sideBox.length; i++){
        //     sideBox[i].addEventListener('mouseenter',enterFunc);
        // }



        chart_btn.addEventListener('click',chartFunc);
        bell.addEventListener('click',noticeFunc);

        window.addEventListener('resize',resizeFunc);





    })();




});



