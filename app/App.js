class App {
    constructor(){
        this.slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11, Slide12, Slide13, Slide14, Slide15, Slide16, Slide17];
        this.wrap = document.querySelector("#wrap");
        this.wrap || console.error("#wrap을 찾을 수 없습니다.");

        this.slideIdx = localStorage.getItem("slideIdx") ? parseInt(localStorage.getItem("slideIdx")) : 0;;
        document.querySelector("#now-slide").innerText = this.slideIdx + 1;

        this.currentSlide = new this.slides[this.slideIdx]();
        this.fullScreen = false;
        this.wrap.addEventListener("click", () => this.touchScreen.call(this));
        window.addEventListener("keydown", e => {
            (e.keyCode === 13  || e.keyCode === 32)  && this.touchScreen.call(this);
            e.keyCode === 37 &&  document.querySelector("#prev-slide").click();
            e.keyCode === 39 && document.querySelector("#next-slide").click();
        });
        this.wrap.onfullscreenchange = () => {
            this.fullScreen = !this.fullScreen;
        }

        document.querySelector("#next-slide").addEventListener("click", e => {
            e.stopPropagation();
            this.currentSlide.content.remove();
            this.slideIdx = this.slideIdx + 1 >= this.slides.length ? this.slides.length - 1 : this.slideIdx + 1;
            this.currentSlide = new this.slides[this.slideIdx]();
            this.currentSlide.show();

            localStorage.setItem("slideIdx", this.slideIdx);
            document.querySelector("#now-slide").innerText = this.slideIdx + 1;
        });

        document.querySelector("#prev-slide").addEventListener("click", e => {
            e.stopPropagation();
            this.currentSlide.content.remove();
            this.slideIdx = this.slideIdx - 1 < 0 ? 0 : this.slideIdx - 1;
            this.currentSlide = new this.slides[this.slideIdx]();
            this.currentSlide.show();

            localStorage.setItem("slideIdx", this.slideIdx);
            document.querySelector("#now-slide").innerText = this.slideIdx + 1;
        });
    }

    touchScreen(){
        if(!this.fullScreen) {
            const wrap = document.querySelector("#wrap");
            const rfs = wrap.requestFullscreen || wrap.webkitRequestFullScreen || wrap.mozRequestFullScreen || wrap.msRequestFullscreen;
            rfs.call(wrap);
            return;
        }
        let isAnime = this.currentSlide.animation();
        if(isAnime === false){
            this.currentSlide.close(() => {
                if(!this.slides[this.slideIdx + 1]) return;
                this.currentSlide.content.remove();
                this.currentSlide = new this.slides[++this.slideIdx]();
                this.currentSlide.show();
                localStorage.setItem("slideIdx", this.slideIdx);
                document.querySelector("#now-slide").innerText = this.slideIdx + 1;
            });
        }
    }

    
}