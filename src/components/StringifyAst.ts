import * as Ast from "./HtmlAst"

export type Stringify<a> = { stringify: (x: a) => string }

export const StringifyHtmlTag: Stringify<Ast.HtmlTag> = { stringify: x => x.type }
export const StringifyComponentTag: Stringify<Ast.ComponentTag> = { stringify: x => x.componentName }
export const StringifyTag: Stringify<Ast.Tag> = { stringify: x => {
        if(x.type === "componentTag")
            return StringifyComponentTag.stringify(x);
        else{
            return StringifyHtmlTag.stringify(x);
        }
    } }

export const StringifyBinding: Stringify<Ast.Binding> = { stringify: x => "{{" + x.bindingExpression + "}}" }
export const StringifyAttribute: Stringify<Ast.Attribute> = { stringify: x => x.Key + "=" + '"' + x.Value + '"'}

export const StringifyElement: Stringify<Ast.IElement> = { stringify: x => {
        let contents = x.ElementContents.map(content => {
            if(content.type === "htmlString")
                return content.content;
            else if(content.type === "binding")
                return "{{" +  content.bindingExpression + "}}";
            else if (content.type === "element")
                return StringifyElement.stringify(content);
        }).join("");
        let attributes = x.Attributes.map(attr => StringifyAttribute.stringify(attr)).join(" ");

        return "<" + StringifyTag.stringify(x.Tag) + (attributes.length > 0 ? " " : "") +
            attributes + 
            ">" +
            contents +
            "</" + StringifyTag.stringify(x.Tag) + ">" 
    }
}


