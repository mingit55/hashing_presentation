class Slide6 extends Slide {
    constructor(){
        let content = `<div class="container box-center">
                        <h2 class="slide-title">대표적인 해시 함수들</h2>
                        <div class="row around">
                            <div class="fade-no-1 column">
                                <div class="icon">
                                    <span>÷</span>
                                </div>
                                <span class="title">제산법(Division Method)</span>
                            </div>
                            <div class="fade-no-2 column">
                                <div class="icon">
                                    <span>×</span>
                                </div>
                                <span class="title">제곱법(Mid-square Method)</span>
                            </div>
                            <div class="fade-no-3 column">
                                <div class="icon">
                                    <span>＋</span>    
                                </div>
                                <span class="title">폴딩(Folding Method)</span>
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
            let target = document.querySelector(".fade-no-3");
            Animation.showUp(target, 1000, res);
        }));

        super(6, content, init, action);
    }
}