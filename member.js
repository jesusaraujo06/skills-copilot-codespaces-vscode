function skillsMember() {
    var member = {
        name: "John",
        age: 30,
        calculeNumbers: function(var1, var2) {
            return var1 + var2;
        }
    };
    console.log(member.calculeNumbers(1, 2));
}