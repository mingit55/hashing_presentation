class Slide2 extends Slide {
    constructor(){
        let content =   `<div>
                            <div class="box-center text-center">
                                <h3>해싱(Hashing)</h3>
                                <p>
                                    해싱이란 자료 구조에서 어떠한 데이터를 저장할 때 '해시 함수(Hash Function)'를 통해<br>
                                    데이터의 특징이나 성격에 따라 ‘키(Key)’을 만들어 내서 해당 키 값의 장소(Bucket)에 저장하는 방식 
                                </p>
                            </div>
                        </div>`;
        let init = function(){

        };
        let action = [];

        super(2, content, init, action);
    }
}