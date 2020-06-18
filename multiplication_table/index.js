for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        let result = i * j
        document.write(`${i}*${j}=${result} `)
    }
    document.write('<br>')
}