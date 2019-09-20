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
    Props: Prop[];
    Computed: Computed[];
    Methods: Method[];
    Components: Component[];
}

export const scan: (plugin: any) => Component[] =
    plugin => {
        const components =
            Object.values(plugin)
                .map((component) => {
                    return {
                        Name: component.name,
                        Props: (component.props as any[]),
                        Computed: (component as any).computed,
                        Methods: (component as any).methods,
                        Components: (component as any).components
                    };
                }
            );
        return components;
    };
