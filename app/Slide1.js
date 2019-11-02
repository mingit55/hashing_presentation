class Slide1 extends Slide {
    constructor(){
        let content = `<div id="design-anime">
                            <div class="box right" data-active="active"></div>
                            <div class="box right" data-active="active"></div>
                            <div class="box right" data-active="active"></div>
                            <div class="box right" data-active="active"></div>
                            <div class="box right" data-active="active"></div>
                            <div class="box right" data-active="active"></div>
                        </div>
                        <div class="box-center text-center">
                            <h1 class="main-title">해싱에 관하여</h1>
                            <h3 class="sub-title">20903 김민재</h3>
                        </div>`;
        let initialAction = function(){
            return new Promise( res => {
                const boxes = document.querySelectorAll("#design-anime > .box");

                // 초기 설정
                boxes.forEach((x, i) => {
                    x.style.top = (200 * i + 10 * i) - 50 + "px";
                });

                // 반복 애니메이션 작동
                new Promise(res => {
                    boxes.forEach((x, i) => {
                        setTimeout(function(){
                            if(x.dataset.active === "active"){
                                x.classList.remove("left");
                                x.classList.add("right");
                                i === boxes.length - 1 && setTimeout(res, 500);
                            }
                        }, i * 200);
                    });
                }).then( () => new Promise(res => {
                    boxes.forEach((x, i) => {
                        setTimeout(function(){
                            if(x.dataset.active === "active"){
                                x.classList.remove("right");
                                x.classList.add("left");
                                i === boxes.length - 1 && setTimeout(res, 500);
                            }
                        }, i * 200);
                    });
                })).then(() => initialAction());     
                res();
            });
        };

        let action = [];
        let finalAction = function(){
            return new Promise( res => {
                const boxes = document.querySelectorAll("#design-anime > .box");
                new Promise(res => {
                    boxes.forEach((x, i) => {
                        x.dataset.active = "";
                        setTimeout(function(){
                            x.style.top = "calc(50% - 100px)";
                            x.style.left = "calc(50% - 100px)";
                            x.style.transform = "scale(1.5)";
                            i === boxes.length - 1 && setTimeout(res, 1000);
                        }, i * 200);
                    });
                }).then( () => {
                    boxes.forEach((x, i) => {
                        x.style.transform = "scale(0)";
                        setTimeout(() => res(), 1000);
                    });
                });
            });
        }        
        action.push(finalAction);


        super(1, content, initialAction, action);
    }
}