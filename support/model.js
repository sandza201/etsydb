const path = require('path');
const fs = require('fs');

class Model {
    static get dataPath() {
        const fileName = `${this.name.toLowerCase()}s.json`;
        return path.join(__dirname, '..', 'database', fileName);
    }

    static findAll() {
        const data = JSON.parse(fs.readFileSync(this.dataPath));

        return data.map((modelData) => new Model(modelData));
    }

    static findById(id) {
        const data = JSON.parse(fs.readFileSync(this.dataPath));
        const modelData = data.find((modelData) => modelData.id === id);
        if (!modelData) {
            return this.name + ' with id:' + id + ' not found';
        }
        return new Model(modelData);
    }

    static create(data) {
        try {
            this.validate(data);
            const modelData = new Model(data);
            const existingData = JSON.parse(fs.readFileSync(this.dataPath));
            const ids = existingData.map((modelData) => modelData.id);
            const id = ids.length > 0 ? Math.max(...ids) + 1 : 1;
            modelData.id = id;
            existingData.push(modelData);
            fs.writeFileSync(this.dataPath, JSON.stringify(existingData, null, 2));
            return modelData;
        } catch (err) {
            return err.message;
        }
    }

    static update(data) {
        const existingData = JSON.parse(fs.readFileSync(this.dataPath));
        const index = existingData.findIndex((modelData) => modelData.id === id);
        if (index === -1) {
            return null;
        }
        const updatedData = { id, ...data };
        existingData[index] = updatedData;
        fs.writeFileSync(this.dataPath, JSON.stringify(existingData, null, 2));
        return new modelClass(updatedData);
    }

    static delete(id) {
        const existingData = JSON.parse(fs.readFileSync(this.dataPath));
        const index = existingData.findIndex((modelData) => modelData.id === id);
        if (index === -1) {
            return 'Model with id ' + id + ' not found!';
        }
        existingData.splice(index, 1);
        fs.writeFileSync(this.dataPath, JSON.stringify(existingData, null, 2));
        return true;
    }

    static validate(data) {
        const fields = this.fields || [];

        for (const field of fields) {
            if (field.required && !(field.name in data)) {
                throw new Error(`Required field '${field.name}' is missing!`);
            }

            if (field.required && !data[field.name]) {
                throw new Error(`Required field '${field.name}' is empty!`);
            }

            if (data[field.name] === undefined && field.default !== undefined) {
                data[field.name] = field.default;
            }
        }

    }

    constructor(data) {

        Object.assign(this, data);
    }
}

module.exports = Model;