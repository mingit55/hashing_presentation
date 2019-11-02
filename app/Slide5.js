class Slide5 extends Slide {
    constructor(){
        let content =   `<div class="container box-center">
                            <h2 class="slide-title">좋은 해시함수의 조건(Simple Uniform Hash)</h2>
                            <div class="column">
                                <h3 class="fade-no-1 mt-5">1. 해시 함수의 키 값의 분포가 일정해야 한다.</h3>
                                <p class="fade-no-2 mt-3 text-center">
                                    반환되는 해시 키의 분포가 골고루 나타나야만,<br>
                                    충돌(Collision)이 일어날 가능성이 적어지기 때문이다.
                                </p>
                                <h3 class="fade-no-3 mt-5">2. 연관성을 가지지 않는 독립적인 키를 만들어야 한다.</h3>
                                <p class="fade-no-4 mt-3 text-center">
                                    키 값들이 서로 연관성을 가지면, 해시 키를 반환할 때<br>
                                    일정한 패턴이나 순서가 존재할 수 있어 충돌을 일으킬 확률이 높기 때문이다.
                                </p>
                                <h3 class="fade-no-5 mt-5">3. 반환 키가 할당된 용량의 범위를 넘어서면 안된다.</h3>
                                <p class="fade-no-6 mt-3 text-center">
                                    키 값이 용량을 넘어서게 되면 데이터를 저장할 수 없기 때문이다.
                                </p>
                            </div>
                         </div>`;
        let init = function(){

        };
        let action = [];
        action.push(() => new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-1"), 500, res)));
        action.push(() => new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-2"), 500, res)));
        action.push(() => new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-3"), 500, res)));
        action.push(() => new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-4"), 500, res)));
        action.push(() => new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-5"), 500, res)));
        action.push(() => new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-6"), 500, res)));


        super(5, content, init, action);
    }
}