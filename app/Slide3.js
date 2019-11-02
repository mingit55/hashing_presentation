class Slide3 extends Slide {
    constructor(){
        let content =   `<div class="container box-center">
                            <h2 class="slide-title">해싱의 기본적인 움직임</h2>
                            <p class="description">가장 빠르게 탐색할 수 있는 해싱의 원리를 파악해 보자</p>
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
        
        super(3, content, init, action);
        this.dataIdx = 0;
    }

    loadDataList(){
        const hash_function = function(n){
            return parseInt(n / 100) % 6;
        };
        this.data_list = [];
        this.data_list.push(new Data(102, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(523, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(322, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(421, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(292, hash_function, Data.NON_CHECK));
    }   
}