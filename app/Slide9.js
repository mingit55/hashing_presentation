class Slide9 extends Slide {
    constructor(){
        let content =  `<div class="container box-center">
                            <h1 class="slide-title">폴딩(Folding Method)</h1>
                            <p class="description">데이터를 2진수화 하여, 절반으로 나누고 이를 XOR로 연산한다.</p>
                            <div class="row pt-5">
                                <div class="column">
                                    <h3 class="title mb-2">데이터(Data)</h3>
                                    <div id="data-box" class="mb-4"></div>
                                    <h3 class="title mt-3">해시 함수(Hash Function)</h3>
                                    <div id="function-box">
                                        <p class="font-1-8">
                                            function hash( no ){<br>
                                                &nbsp;&nbsp;&nbsp;&nbsp;let mp = parseInt(\`$\{n\}\`.length / 2);<br>
                                                &nbsp;&nbsp;&nbsp;&nbsp;let a = \`$\{n\}\`.substr(0, mp + 1);<br>
                                                &nbsp;&nbsp;&nbsp;&nbsp;let b = \`$\{n\}\`.substr(mp + 1);<br>
                                                &nbsp;&nbsp;&nbsp;&nbsp;return (parseInt(a) ^ parseInt(b)) % 6;<br>
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
        
        super(9, content, init, action);
        this.dataIdx = 0;
    }
    
    loadDataList(){
        const hash_function = function(n){
            let mp = parseInt(`${n}`.length / 2);
            let a = `${n}`.substr(0, mp + 1);
            let b = `${n}`.substr(mp + 1);
            return (parseInt(a) ^ parseInt(b)) % 6;
        };
        this.data_list = [];
        this.data_list.push(new Data(102, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(62, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(25, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(123, hash_function, Data.QUADRATIC));
        this.data_list.push(new Data(14, hash_function, Data.QUADRATIC));
        // this.data_list.push(new Data(102, hash_function, Data.NON_CHECK));
        // this.data_list.push(new Data(152, hash_function, Data.NON_CHECK));
        // this.data_list.push(new Data(242, hash_function, Data.NON_CHECK));
        // this.data_list.push(new Data(245, hash_function, Data.NON_CHECK));
        // this.data_list.push(new Data(274, hash_function, Data.NON_CHECK));
    }   
}