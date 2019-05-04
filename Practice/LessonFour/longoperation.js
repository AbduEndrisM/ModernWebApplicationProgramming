const longOperation = (() => {
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum = sum + i;
    }
    return sum;
});

process.on("message", msg =>{
    const sum = longOperation();
    process.send(sum);
})