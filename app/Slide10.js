class Slide10 extends Slide {
    constructor(){
        let content = `<div class="container box-center">
                        <h2 class="slide-title">충돌를 피하는 방법</h2>
                        <p class="description">어떤 해시 함수도 충돌은 피해갈 수 없다. 그럼 충돌이 일어났을 때 어떻게 대처해야 하는가?</p>
                        <div class="row around">
                            <div class="fade-no-1 column">
                                <div class="icon">
                                    <img src="./images/Chaining.png" alt="Chaining" width="150" height="150">
                                    <span class="title">연쇄법(Chaining)</span>
                                </div>
                            </div>
                            <div class="fade-no-2 column">
                                <div class="icon">
                                    <img src="./images/OpenAddress.png" alt="OpenAddress" width="200" height="200">
                                    <span class="title">개방 주소법(Open addressing)</span>
                                    <span id="sub-title1" class="fade-no-3 sub-title">- 선형 탐사법</span>
                                    <span id="sub-title2" class="fade-no-4 sub-title">- 이차형 탐사</span>
                                    <span id="sub-title3" class="fade-no-5 sub-title">- 이중해싱</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
        
        let init = function(){
              
        };
        let action = [];
        action.push(() => new Promise(res => {
            let target = document.querySelector(".fade-no-1");
            Animation.showUp(target, 1000, res);
        }));
        action.push(() => new Promise(res => {
            let target = document.querySelector(".fade-no-2");
            Animation.showUp(target, 1000, res);
        }));
        action.push(() => new Promise(res => {
            let target = document.querySelector(".fade-no-2 .icon");

            let top = 0;
            let move = setInterval(() => {
                top += 1;
                target.style.top = "-" + top + "px";
                if(top === 100){
                    clearInterval(move);
                    res();
                }
            }, 10);
        }));
        action.push(() => new Promise(res => {
            let target = document.querySelector(".fade-no-3");
            Animation.fadeIn(target, 1000, res);
        }));
        action.push(() => new Promise(res => {
            let target = document.querySelector(".fade-no-4");
            Animation.fadeIn(target, 1000, res);
        }));
        action.push(() => new Promise(res => {
            let target = document.querySelector(".fade-no-5");
            Animation.fadeIn(target, 1000, res);
        }));

        super(10, content, init, action);
    }
}