class Slide {
    /**
     * 
     * @param {number} idx 
     * @param {string} content 
     * @param {function} init 
     * @param {array} action 
     * 
     * @see {주의} init과 action 파라메터는 각각 슬라이드마다 행해질 함수들이 삽입되어 있어야 한다.
     */
    constructor(idx, content, init = null, action = []){
        this.idx = idx;
        this.init = init;
        this.action = action;
        this.actionIdx = 0;
        this.possibleAction = true;

        const box = document.createElement("div");
        box.innerHTML = content;
        this.content = box;
    }

    async show(){
        let wrap = document.querySelector("#wrap");
        wrap.classList.remove("swrap"+(this.idx + 1));
        wrap.classList.remove("swrap"+(this.idx - 1));
        wrap.classList.add("swrap"+this.idx);
        this.content.style.opacity = "0";
        wrap.append(this.content);
        typeof this.init === "function" && await this.init();
        Animation.fadeIn(this.content, 500);
    }

    close(callback){
        if(typeof callback !== "function") return;
        Animation.fadeOut(this.content, 500, callback);
    }


    animation(){
        if(!this.possibleAction) return "stop";
        if(typeof this.action[this.actionIdx] === "function"){
            this.possibleAction = false;
            this.action[this.actionIdx++]().then(() => {
                this.possibleAction = true;
            });
            return true;
        }
        else return false;
    }
}