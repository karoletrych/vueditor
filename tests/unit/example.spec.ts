import { expect } from 'chai';
import * as Ast from '@/components/HtmlAst';
import * as StringifyAst from '@/components/StringifyAst';

describe('HelloWorld.vue', () => {
  it('stringifies AST', () => {
    let o : Ast.IElement = {
      type: "element",
      Tag: {type: "div"},
      Attributes: [{Key:"v-show", Value:"true"}],
      ElementContents: [
          {
              type: "element",
              Tag: {type: "p"},
              Attributes: [],
              ElementContents: [
                  {type: "binding", bindingExpression: "greeting" },
                  {type: "htmlString", content: " World!"}
              ]
          }
      ]
    }

    expect(StringifyAst.StringifyElement.stringify(o)).to.be.equal(`<div v-show="true"><p>{{greeting}} World!</p></div>`);
  });
});
