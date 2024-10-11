"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlElement = void 0;
const html_tag_class_1 = require("./html-tag.class");
class HtmlElement extends html_tag_class_1.HtmlTag {
    constructor(tagName) {
        super();
        this.tagName = tagName;
        this.startTag = "";
        this.body = "";
        this.endTag = "";
    }
    getTagName() {
        return this.tagName;
    }
    setStartTag(tag) {
        this.startTag = tag;
    }
    setEndTag(tag) {
        this.endTag = tag;
    }
    setTagBody(body) {
        this.body = body;
    }
    generateHtml() {
        console.log(`${this.startTag} ${this.body} ${this.endTag}`);
    }
}
exports.HtmlElement = HtmlElement;
