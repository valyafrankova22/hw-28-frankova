function checkPrompt(userNum) {
    if (userNum === null) throw new Error(`Not valid`);
    if (userNum.trim() === ``) throw new Error(`Not valid`);
    if (isNaN(userNum)) throw new Error(`Not valid`);

    return true;
}



let calculator = {
    read(
        a = prompt(`Enter a number`),
        b = prompt(`Enter a number`)
    ) {
        checkPrompt(a);
        checkPrompt(b);
        this.a = a;
        this.b = b;
    },

    sum() {
       if(!this.a && !this.b) return `error`;

       return this.a + this.b;
    },
    mul() {
        if(!this.a && !this.b) return `error`;

        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
