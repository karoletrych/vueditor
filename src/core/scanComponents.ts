type Type = String | Number | Boolean | Object | Date| Function | Symbol; // TODO: Array?

interface Prop
{
    Name: string;
    Type: Type;
    Default: any;
}
interface Computed
{
    Name: string;
}

interface Method
{
    Name: string;
    Length: number;
}

type ComponentRef = string;

interface Component{
    Name: string;
    Props: Record<string, Prop>;
    Computed: Record<string, Computed>;
    Methods: Record<string, Method>;
    Components: Record<string, ComponentRef>;
}

const isComponent = (pluginPart: any) =>
    typeof pluginPart !== 'function';

const scanProp = (vueProp: [string, any]): Prop => {
    return {
        Default: vueProp[1].default,
        Name: vueProp[0],
        Type: vueProp[1].type || vueProp[1]
    };
};

export const scan: (plugin: any) => Component[] =
    plugin => {
        const components =
            Object.values(plugin)
                .filter(isComponent)
                .map((componentAny) => {
                    const component = componentAny as any;
                    return ({
                        Name: component.name as string,
                        Props: Object.entries(component.props)
                                .map(scanProp)
                                .reduce<Record<string, Prop>>((o, p) => {
                                    o[p.Name] = p;
                                    return o;
                                } , {}),
                        Computed: Object.entries(component.computed || [])
                            .map(([name, type]) => ({Name: name}))
                            .reduce<Record<string, Computed>>((o, c) => {
                                o[c.Name] = c;
                                return o;
                                } , {}),
                        Methods: Object.entries(component.methods || [])
                            .map(([name, m]) => ({Name: name, Length: (m as Function).length}))
                            .reduce<Record<string, Method>>((o, m) => {
                                o[m.Name] = m;
                                return o;
                            } , {}),
                        Components: Object.entries(component.components || [])
                            .map(([name, c]) => (c as any).name)
                            .reduce<Record<string, ComponentRef>>((o, cr) => {
                                o[cr] = cr;
                                return o;
                            } , {})
                    });
                }
            );
        return components;
    };
