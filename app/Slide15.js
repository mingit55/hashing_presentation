class Slide15 extends Slide {
    constructor(){
        let content =   `<div class="container box-center">
                            <h2 class="slide-title">이차형 탐사에서도 해결되지 않는 2차 군집화 현상</h2>
                            <p class="description">다수의 키가 동일한 경우, 동일한 순서로 밀려나기 때문에 군집화 현상은 피해갈 수 없다.</p>
                            <div class="row pt-5">
                                <div class="column">
                                    <h3 class="title mb-2">데이터(Data)</h3>
                                    <div id="data-box" class="mb-4"></div>
                                    <h3 class="title mt-3">해시 함수(Hash Function)</h3>
                                    <div id="function-box">
                                        <p>
                                            function hash( no ){<br>
                                                &nbsp;&nbsp;&nbsp;&nbsp;return parseInt(no / 100) % 6;<br>
                                            }
                                        </p>
                                    </div>
                                </div>
                                <div id="hash-table">  
                                    <h3 class="title mb-2">해시 테이블(Hash Table)</h3>
                                    <div class="table-bucket" data-key="0">0</div>
                                    <div class="table-bucket" data-key="1">1</div>
                                    <div class="table-bucket" data-key="2">2</div>
                                    <div class="table-bucket" data-key="3">3</div>
                                    <div class="table-bucket" data-key="4">4</div>
                                    <div class="table-bucket" data-key="5">5</div>
                                </div>
                            </div>
                        </div>`;
        let init = () => this.loadDataList();
        let action = [];
        
        /**
         * 총 5회에 걸쳐서 데이터 이동을 보여줌
         */
        action.push(() => this.data_list[this.dataIdx].doHashFunc());
        action.push(() => this.data_list[this.dataIdx++].setBucket());
        action.push(() => this.data_list[this.dataIdx].doHashFunc());
        action.push(() => this.data_list[this.dataIdx++].setBucket());
        action.push(() => this.data_list[this.dataIdx].doHashFunc());
        action.push(() => this.data_list[this.dataIdx++].setBucket());
        action.push(() => this.data_list[this.dataIdx].doHashFunc());
        action.push(() => this.data_list[this.dataIdx++].setBucket());
        action.push(() => this.data_list[this.dataIdx].doHashFunc());
        action.push(() => this.data_list[this.dataIdx++].setBucket());
        
        super(15, content, init, action);
        this.dataIdx = 0;
    }

    loadDataList(){
        const hash_function = function(n){
            return parseInt(n / 100) % 6;
        };
        this.data_list = [];
        this.data_list.push(new Data(42, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(53, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(52, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(68, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(74, hash_function, Data.QUADRATIC));
    }   
}