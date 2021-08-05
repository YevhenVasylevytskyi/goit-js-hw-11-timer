class CountdownTimer {

    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;        
        
    }
    
    start() {
        
        const startTime = this.targetDate.getTime();

        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.updateTimer(time);
        }, 1000);
    }

    getPad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {        
        const days = this.getPad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.getPad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.getPad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.getPad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }

    updateTimer({ days, hours, mins, secs }) {
        const timerInterface = document.querySelector(this.selector).children;
        
        timerInterface[0].childNodes[1].textContent = `${days}`;
        timerInterface[1].childNodes[1].textContent = `${hours}`;
        timerInterface[2].childNodes[1].textContent = `${mins}`;
        timerInterface[3].childNodes[1].textContent = `${secs}`;

    }   
    
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Aug 12, 2021'),
});

countdownTimer.start();