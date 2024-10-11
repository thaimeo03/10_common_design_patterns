"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableView = exports.PieGraphView = exports.BarGraphView = void 0;
class BarGraphView {
    constructor(dataModel) {
        this.dataModel = dataModel;
        this.id = this.dataModel.subscribe(this);
    }
    notify(data) {
        console.log(`BarGraph, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Bar graph using data: ${JSON.stringify(data)}`);
    }
    delete() {
        this.dataModel.unSubscribe(this.id);
    }
}
exports.BarGraphView = BarGraphView;
class PieGraphView {
    constructor(dataModel) {
        this.dataModel = dataModel;
        this.id = this.dataModel.subscribe(this);
    }
    notify(data) {
        console.log(`PieGraph, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Pie graph using data: ${data}`);
    }
    delete() {
        this.dataModel.unSubscribe(this.id);
    }
}
exports.PieGraphView = PieGraphView;
class TableView {
    constructor(dataModel) {
        this.dataModel = dataModel;
        this.id = this.dataModel.subscribe(this);
    }
    notify(data) {
        console.log(`Table, id:${this.id}`);
        this.draw(data);
    }
    draw(data) {
        console.log(`Drawing a Table using data: ${JSON.stringify(data)}`);
    }
    delete() {
        this.dataModel.unSubscribe(this.id);
    }
}
exports.TableView = TableView;
