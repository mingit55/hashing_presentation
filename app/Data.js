class Data {
    /**
     * 
     * @param {number} data Data 안에 들어가는 내용물
     * @param {function} hash_function Key 값을 뽑아내는 해시 함수
     */
    static NON_CHECK = 0;
    static CHAIN = 1;
    static LINEAR = 2;
    static QUADRATIC = 3;
    static DOUBLE = 4;
    
    constructor(data, hash_function, type = 0, sub_function = null){
        this.key = null;
        this.data = data;
        this.hashFunc = hash_function;
        this.subFunc = type === Data.DOUBLE && typeof sub_function === "function" ? sub_function : null;
        this.type = type;

        let content = `<div class="data">${this.data}</div>`;
        let box = document.createElement("div");
        box.innerHTML = content;
        this.elem = box.firstChild;

        this.dataBox = document.querySelector("#data-box");
        this.dataBox.width = parseInt(window.getComputedStyle(this.dataBox).getPropertyValue("width"));
        
        const cur_cnt = this.dataBox.children.length;
        
        let style = this.elem.style;
        style.top = this.dataBox.offsetTop + 10 + "px";
        style.left = this.dataBox.offsetLeft + 20 + cur_cnt * 100 + 10 * (cur_cnt - 1) + "px";

        this.dataBox.append(this.elem);
    }

    doHashFunc(){
        return new Promise( res => {
            const funcBox = document.querySelector("#function-box");
            funcBox.width = parseInt(window.getComputedStyle(funcBox).getPropertyValue("width"));
            funcBox.height = parseInt(window.getComputedStyle(funcBox).getPropertyValue("height"));
            this.key = this.hashFunc(this.data);    
            this.elem.style.left =  this.dataBox.offsetLeft - 210 +"px";
            setTimeout(() => {
                this.elem.style.top = funcBox.offsetTop + funcBox.height - 150 +"px";
                setTimeout(() => {
                    this.elem.style.zIndex = -1;
                    this.elem.style.left = funcBox.offsetLeft + funcBox.width / 2 + "px";
                    
                    let keyElem = document.createElement("span");
                    keyElem.innerText = this.key;

                    let keyStyle = keyElem.style;
                    keyStyle.fontSize = "10em";
                    keyStyle.fontWeight = "900";
                    keyStyle.color = "rgb(1, 167, 117)";
                    keyStyle.position = "absolute";
                    keyStyle.top = "50%";
                    keyStyle.left = "50%";
                    keyStyle.transform = "translate(-50%, -50%) rotate(5deg)";

                    setTimeout(() => {
                        this.elem.style.top = funcBox.offsetTop + 30 + "px";
                        funcBox.append(keyElem)
                        Animation.fadeOut(keyElem, 1000, function(){
                            keyElem.remove();
                            res();
                        });
                    }, 800);
                }, 500);
            }, 500);
        });
    }

    setBucket(){
        return new Promise( res => {
            const hashTable = document.querySelector("#hash-table");
            const style = this.elem.style;
            style.left = hashTable.offsetLeft - 110 + "px";
            
            setTimeout(() => {
                style.zIndex = 1;
                this.elem.dataset.key = this.key;

                if(this.type === Data.NON_CHECK || this.type === Data.CHAIN){
                    const avail_bucket = document.querySelector(`#hash-table .table-bucket[data-key='${this.key}']`);
                    style.top = hashTable.offsetTop + avail_bucket.offsetTop + "px";
                    setTimeout(() => {  
                        if(this.type === Data.NON_CHECK) this.nonChecking(res);
                        else if(this.type === Data.CHAIN) this.checkByChaining(res);
                    }, 500);
                }
                else {
                    if(this.type === Data.LINEAR) this.checkByLinearProbing(res, this.key);
                    else if(this.type === Data.QUADRATIC) this.checkByQuadraticProbing(res, this.key);
                    else if(this.type === Data.DOUBLE) this.checkByDoubleHashing(res, this.key);
                }
            }, 500);
        });
    }

    nonChecking(res){
        const hashTable = document.querySelector("#hash-table");
        const style = this.elem.style;
        style.left = hashTable.offsetLeft + 120 + "px";
        setTimeout(res, 500);
    }

    checkByChaining(res, loopCnt = 0){
        const hashTable = document.querySelector("#hash-table");
        hashTable.width = parseInt(getComputedStyle(hashTable).getPropertyValue("width"));
        const style = this.elem.style;
        style.left = hashTable.offsetLeft + 10 + loopCnt * 110 + "px";
        setTimeout(()=>{
            // 동일한 키를 가지고 있으면서, 이미 배치되어 있는 데이터를 찾음!
            let sameKey = document.querySelector(`.data[data-key='${this.key}'][data-idx='${loopCnt}']`);

            let tableCursor = document.createElement("div");
            let tcs = tableCursor.style;
            tcs.position = "absolute";
            tcs.width = "100px";
            tcs.height = "100px";
            tcs.border = !sameKey ? "5px solid #2254FF"  : "5px solid #FF3D22";
            tcs.top = hashTable.offsetTop + document.querySelector(`.table-bucket[data-key='${this.key}']`).offsetTop + "px";
            tcs.left = hashTable.offsetLeft + 120 + loopCnt * 110 + "px";
            tcs.zIndex = 2;
            hashTable.parentElement.append(tableCursor);
            
            setTimeout(() => {
                tableCursor.remove();
                // 해시 테이블의 크기 확장
                let willTableWidth = 120 + (loopCnt  + 1) * 110; // 테이블이 이정도 크기는 되어야 함!
                hashTable.style.width = hashTable.width < willTableWidth ? willTableWidth + "px" : hashTable.width + "px";
                
                setTimeout(() => {
                    if(!sameKey) {
                        style.left = hashTable.offsetLeft + 120 + loopCnt * 110 + "px";
                        this.elem.dataset.idx = loopCnt;
                        res();
                    }
                    else {
                        this.checkByChaining(res, ++loopCnt);
                    }
                }, ( hashTable.width < willTableWidth ? 500 : 0 ));
                
            }, 500);
        }, 1000);
    }

    checkByLinearProbing(res, idx){
        const hashTable = document.querySelector("#hash-table");
        this.elem.style.top = hashTable.offsetTop + document.querySelector(`.table-bucket[data-key='${idx}']`).offsetTop + "px";

        setTimeout(() => {
            // 동일한 키를 가지고 있으면서, 이미 배치되어 있는 데이터를 찾음!
            let sameKey = document.querySelector(`.data[data-idx='${idx}']`);

            let tableCursor = document.createElement("div");
            let tcs = tableCursor.style;
            tcs.position = "absolute";
            tcs.width = "100px";
            tcs.height = "100px";
            tcs.border = !sameKey ? "5px solid #2254FF"  : "5px solid #FF3D22";
            tcs.top = hashTable.offsetTop + document.querySelector(`.table-bucket[data-key='${idx}']`).offsetTop + "px";
            tcs.left = hashTable.offsetLeft + 120 + "px";
            tcs.zIndex = 2;
            hashTable.parentElement.append(tableCursor);

            setTimeout(() => {
                tableCursor.remove();
                setTimeout(() => {
                    if(!sameKey) {
                        this.elem.dataset.idx = idx;
                        this.elem.style.left = hashTable.offsetLeft + 120 + "px";
                        res();
                    }
                    else {
                        this.checkByLinearProbing(res, (idx + 1) % 6);
                    }
                }, 250);
            }, 800);
        }, 500);
    }

    checkByQuadraticProbing(res, idx, loopCnt = 1){
        const hashTable = document.querySelector("#hash-table");
        this.elem.style.top = hashTable.offsetTop + document.querySelector(`.table-bucket[data-key='${idx}']`).offsetTop + "px";

        setTimeout(() => {
            // 동일한 키를 가지고 있으면서, 이미 배치되어 있는 데이터를 찾음!
            let sameKey = document.querySelector(`.data[data-idx='${idx}']`);

            let tableCursor = document.createElement("div");
            let tcs = tableCursor.style;
            tcs.position = "absolute";
            tcs.width = "100px";
            tcs.height = "100px";
            tcs.border = !sameKey ? "5px solid #2254FF"  : "5px solid #FF3D22";
            tcs.top = hashTable.offsetTop + document.querySelector(`.table-bucket[data-key='${idx}']`).offsetTop + "px";
            tcs.left = hashTable.offsetLeft + 120 + "px";
            tcs.zIndex = 2;
            hashTable.parentElement.append(tableCursor);

            setTimeout(() => {
                tableCursor.remove();
                setTimeout(() => {
                    if(!sameKey) {
                        this.elem.dataset.idx = idx;
                        this.elem.style.left = hashTable.offsetLeft + 120 + "px";
                        res();
                    }
                    else {
                        this.checkByQuadraticProbing(res, (idx + loopCnt * loopCnt) % 6, loopCnt + 1);
                    }
                }, 250);
            }, 800);
        }, 500);
    }

    checkByDoubleHashing(res, idx, loopCnt = 1){
        const style = this.elem.style;

        const subFuncBox = document.querySelector("#sub-function-box");
        subFuncBox.width = parseInt(getComputedStyle(subFuncBox).getPropertyValue("width"));
        subFuncBox.height = parseInt(getComputedStyle(subFuncBox).getPropertyValue("height"));

        const hashTable = document.querySelector("#hash-table");
        style.top = hashTable.offsetTop + document.querySelector(`.table-bucket[data-key='${idx}']`).offsetTop + "px";

        setTimeout(() => {
            // 동일한 키를 가지고 있으면서, 이미 배치되어 있는 데이터를 찾음!
            let sameKey = document.querySelector(`.data[data-idx='${idx}']`);

            let tableCursor = document.createElement("div");
            let tcs = tableCursor.style;
            tcs.position = "absolute";
            tcs.width = "100px";
            tcs.height = "100px";
            tcs.border = !sameKey ? "5px solid #2254FF"  : "5px solid #FF3D22";
            tcs.top = hashTable.offsetTop + document.querySelector(`.table-bucket[data-key='${idx}']`).offsetTop + "px";
            tcs.left = hashTable.offsetLeft + 120 + "px";
            tcs.zIndex = 2;
            hashTable.parentElement.append(tableCursor);

            setTimeout(() => {
                tableCursor.remove();
                setTimeout(() => {
                    if(!sameKey) {
                        this.elem.dataset.idx = idx;
                        style.left = hashTable.offsetLeft + 120 + "px";
                        res();
                    }
                    else {
                        style.zIndex = -1;
                        style.top = subFuncBox.offsetTop + 30 + "px";
                        setTimeout(() => {
                            style.left = subFuncBox.offsetLeft + subFuncBox.width / 2 + "px";

                            let keyElem = document.createElement("span");
                            keyElem.innerText = `${this.subFunc(this.data)} × ${loopCnt}`;

                            let keyStyle = keyElem.style;
                            keyStyle.fontSize = "10em";
                            keyStyle.fontWeight = "900";
                            keyStyle.color = "rgb(1, 167, 117)";
                            keyStyle.position = "absolute";
                            keyStyle.whiteSpace = "nowrap";
                            keyStyle.top = "50%";
                            keyStyle.left = "50%";
                            keyStyle.transform = "translate(-50%, -50%) rotate(5deg)";

                            setTimeout(() => {
                                style.top = subFuncBox.offsetTop + subFuncBox.height - 120 + "px";
                                subFuncBox.append(keyElem)
                                Animation.fadeOut(keyElem, 1000, () => {
                                    style.left = hashTable.offsetLeft - 110 + "px";
                                    setTimeout(() => {
                                        style.zIndex = 1;
                                        this.checkByDoubleHashing(res, (this.key + loopCnt * this.subFunc(this.data)) % 6, loopCnt + 1);
                                    }, 500);
                                });
                            }, 750);
                        }, 500);
                    }
                }, 250);
            }, 800);
        }, 500);
    }
}

