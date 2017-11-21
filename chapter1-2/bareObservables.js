const observable = events => {
    const INTERVAL = 1 * 1000;
    let schedulerId;
    return {
        subscribe: observer => {
            schedulerId = setInterval(() => {
                if (events.length === 0) {
                    observer.complete();
                    clearInterval(schedulerId);
                    schedulerId = undefined;
                } else {
                    observer.next(events.shift());
                }
            }, INTERVAL);
            return {
                unsubscribe: () => {
                    if (schedulerId) {
                        clearInterval(schedulerId);
                    }
                }
            }
        }
    }
}

let sub = observable([1, 5, 6]).subscribe({
    next: console.log,
    complete: () => console.log('done!')
})