let util = {
    remove: (arr, value) => {

        return arr.filter((ele) => {
            return ele != value;
        });
    }
};
var app = new Vue({
    el: "#app",
    data: {
        newName: "",
        names: ["Joe", "Mary"]

    },
    methods: {
        addName() {
            this.names.push(this.newName);
            this.newName = "";
        },
        deleteName(index) {
      this.names=util.remove(this.names,names[index]);
        }
    }

});
