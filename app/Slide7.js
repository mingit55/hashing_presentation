class Slide7 extends Slide {
    constructor(){
        let content =  `<div class="container box-center">
                            <h1 class="slide-title">제산법(Division Method)</h1>
                            <p class="description">데이터를 버킷(Bucket)의 개수만큼 나눈 나머지를 키로 반환한다.<br>버킷의 수를 소수로 맞추는 것이 효율적이다.</p>
                            <div class="row pt-5">
                                <div class="column">
                                    <h3 class="title mb-2">데이터(Data)</h3>
                                    <div id="data-box" class="mb-4"></div>
                                    <h3 class="title mt-3">해시 함수(Hash Function)</h3>
                                    <div id="function-box">
                                        <p>
                                            function hash( no ){<br>
                                                &nbsp;&nbsp;&nbsp;&nbsp;return no % 6;<br>
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
        
        super(7, content, init, action);
        this.dataIdx = 0;
    }
    
    loadDataList(){
        const hash_function = function(n){
            return parseInt(n) % 6;
        };
        this.data_list = [];
        this.data_list.push(new Data(102, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(152, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(242, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(245, hash_function, Data.NON_CHECK));
        this.data_list.push(new Data(274, hash_function, Data.NON_CHECK));
    }   
}