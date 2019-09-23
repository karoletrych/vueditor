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
    Type: Type;
}

interface Method
{
    Name: string;
    Type: Type;
}

interface Component{
    Name: string;
    Props: Record<string, Prop>;
    Computed: Record<string, Computed>;
    Methods: Record<string, Method>;
    Components: Record<string, Component>;
}

const isComponent = (pluginPart: any) =>
    typeof pluginPart !== 'function';

const scanProp = (vueProp: [string, any]): Prop => {
    return {
        Default: vueProp[1].default,
        Name: vueProp[0],
        Type: vueProp[1].type
    };
};

export const scan: (plugin: any) => Component[] =
    plugin => {
        const components =
            Object.values(plugin)
                .filter(isComponent)
                .map((component) => {
                    const c = component as any;
                    return {
                        Name: c.name as string,
                        Props: Object.entries(c.props).map(scanProp).reduce( ,{}),
                        Computed: [] as Computed[],
                        Methods: [] as Method[],
                        Components: [] as Component[]
                    };
                }
            );
        return components;
    };
