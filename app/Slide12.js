class Slide12 extends Slide {
    constructor(){
        let content =   `<div class="container box-center">
                            <h2 class="slide-title">개방 주소법(Open Addressing) - 선형 탐사법</h2>
                            <p class="description">충돌이 일어나면 다음 버킷에 데이터를 삽입한다.</p>
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
        
        super(12, content, init, action);
        this.dataIdx = 0;
    }

    loadDataList(){
        const hash_function = function(n){
            return parseInt(n / 100) % 6;
        };
        this.data_list = [];
        this.data_list.push(new Data(212, hash_function, Data.LINEAR));
        this.data_list.push(new Data(257, hash_function, Data.LINEAR));
        this.data_list.push(new Data(23, hash_function, Data.LINEAR));
        this.data_list.push(new Data(72, hash_function, Data.LINEAR));
        this.data_list.push(new Data(584, hash_function, Data.LINEAR));
    }   
}