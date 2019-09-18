export interface P {
    type: "p"
}

export interface Input {
    type: "input"
}

export interface Div {
    type: "div"
}

export type HtmlTag = P | Input | Div

export type ComponentTag = {type: "componentTag", componentName: string}

export type Tag = HtmlTag | ComponentTag

export interface Attribute {
    Key: string,
    Value?: string
}

export interface HtmlString {
    type: "htmlString", 
    content: string
}
export interface Binding {
    type: "binding", 
    bindingExpression: string
}

export type ElementContent = HtmlString | Binding | IElement

export interface IElement {
    type: "element",
    Tag : Tag,
    Attributes : Attribute[],
    ElementContents : ElementContent[]
}


