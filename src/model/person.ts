class person {
    public name: string;
    public age: number;
    constructor(parameters: any) {
        this.name = parameters.name;
        this.age = parameters.age;
    }

    get info() {
        return {
            name: this.name,
            age: 10,
        };
    }

    validate(parameters: any) {
        if (typeof parameters.name !== 'string') {
            return false;
        }
    }
}
