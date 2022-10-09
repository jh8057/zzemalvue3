class person {
    public name: string;
    constructor(parameters: any) {
        this.name = parameters.name;
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
