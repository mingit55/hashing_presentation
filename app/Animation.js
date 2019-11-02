class Animation {
    static fadeIn(target, timeMs = 500, callBack = null){
        if(!target){
            console.error("대상이 존재하지 않습니다 : ", target);
            typeof callBack === "function" && callBack();
            return;
        }

        target.style.opacity = "0";
        let opacity = 0;
        let fade =  setInterval(() => {
            opacity += 10 / timeMs;
            target.style.opacity = opacity;    
            if(opacity >= 1){
                clearInterval(fade);
                typeof callBack === "function" && callBack();
            }
        }, 10);
    }

    static fadeOut(target, timeMs = 500, callBack = null){
        if(!target){
            console.error("대상이 존재하지 않습니다 : ", target);
            typeof callBack === "function" && callBack();
            return;
        }

        let opacity = 1;
        target.style.opacity = "1";
        let fade =  setInterval(() => {
            opacity -= 10 / timeMs;
            target.style.opacity = opacity;    
            if(opacity <= 0){
                target.style.display = "none";
                clearInterval(fade);
                typeof callBack === "function" && callBack();
            }
        }, 10);
    }

    static showUp(target, timeMs = 500, callBack = null){
        if(!target){
            console.error("대상이 존재하지 않습니다 : ", target);
            typeof callBack === "function" && callBack();
            return;
        }
        
        let opacity = 0;
        let bottom = -50;
        target.style.position = "relative";
        target.style.opacity = opacity;
        target.style.bottom = "-50px";
        
        let move = setInterval(() => {
            opacity += 10 / timeMs;
            bottom += 500 / timeMs;
            target.style.opacity = opacity;
            target.style.bottom = bottom + "px";
            if(opacity >= 1 || bottom >= 1){
                clearInterval(move);
                callBack();
            }
        }, 10);
    }
}