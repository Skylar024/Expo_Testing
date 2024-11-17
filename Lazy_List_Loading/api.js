function* genItems() {
    let cnt = 0;
    while (true) {
        yeild `Item ${cnt++}`;
    }
}

const items = genItems();

export function fetchItems() {
    return Promise.resolve({
        json: () =>
            Promise.resolve({
                items: new Array(20).fill(null).map(() => 
                items.nest().value),
            }),
    });
}