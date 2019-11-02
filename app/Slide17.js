class Slide17 extends Slide {
    constructor(){
        let content =   `<div class="container box-center">
                            <div class="column text-center">
                                <h2 class="font-5 mb-3">마무리</h2>
                                <p class="fade-no-1 font-2 mt-5"><span class="point-1 font-2">체이닝 방식</span>은 연결 리스트를 이용하여<br>비교적 <span class="point-2 font-2">간단하게 구현</span>이 가능하고, <span class="point-2 font-2">오버 플로우 현상을 해결</span>할 수 있다.</p>
                                <p class="fade-no-2 font-2 mt-5" style="line-height: 70px;">
                                    <span class="point-1 font-2">개방주소 방식</span>은 <span class="point-2 font-2">추가적인 공간을 사용하지 않으며</span>, 저장할 <span class="point-2 font-2">데이터가 적다면 효율적인 메모리 사용이 가능</span>하다.<br>
                                    하지만, 데이터가 가득 찰 수록 효율이 떨어지기 때문에 일정량이 되면 용량을 확장시키는 것이 현명하다.
                                </p>
                                <p class="fade-no-3 font-2 mt-5 point-1">해싱은 검색 방식 중에 가장 빠르지만, 많은 기억 공간을 요구한다.</p>
                            </div>
                        </div>`;
        let init = () => {};
        let action = [];
        action.push(()=>new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-1"), 500, res)));
        action.push(()=>new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-2"), 500, res)));
        action.push(()=>new Promise(res => Animation.fadeIn(document.querySelector(".fade-no-3"), 500, res)));
        
        
        super(17, content, init, action);
    }
}