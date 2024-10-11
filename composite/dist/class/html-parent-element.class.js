"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlParentElement = void 0;
const html_tag_class_1 = require("./html-tag.class");
class HtmlParentElement extends html_tag_class_1.HtmlTag {
    constructor(tagName) {
        super();
        this.tagName = tagName;
        this.startTag = "";
        this.endTag = "";
        this.childrenTag = [];
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
    addChildTag(htmlTag) {
        this.childrenTag.push(htmlTag);
    }
    removeChildTag(htmlTag) {
        const index = this.childrenTag.indexOf(htmlTag);
        if (index > -1) {
            this.childrenTag.splice(index, 1);
        }
    }
    generateHtml() {
        console.log(this.startTag);
        for (const tag of this.childrenTag) {
            tag.generateHtml();
        }
        console.log(this.endTag);
    }
}
exports.HtmlParentElement = HtmlParentElement;
