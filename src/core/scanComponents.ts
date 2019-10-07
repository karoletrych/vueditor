import {Prop, Component, ComponentRef, Computed, Method, Type, Slot} from './scanComponents.types';

const isComponent = (pluginPart: any) =>
    typeof pluginPart !== 'function';

const scanProp = (vueProp: [string, any]): Prop => {
    return {
        default: vueProp[1].default,
        name: vueProp[0],
        type: vueProp[1].type || vueProp[1]
    };
};

export const scanComponents: (plugin: any) => Component[] =
    plugin => {
        const components =
            Object.values(plugin)
                .filter(isComponent)
                .map((componentAny) => {
                    const component = componentAny as any;
                    return ({
                        name: component.name as string,
                        props: Object.entries(component.props)
                                .map(scanProp)
                                .reduce<Record<string, Prop>>((o, p) => {
                                    o[p.name] = p;
                                    return o;
                                } , {}),
                        computed: Object.entries(component.computed || [])
                            .map(([name, type]) => ({name: name}))
                            .reduce<Record<string, Computed>>((o, c) => {
                                o[c.name] = c;
                                return o;
                                } , {}),
                        methods: Object.entries(component.methods || [])
                            .map(([name, m]) => ({name: name, length: (m as Function).length}))
                            .reduce<Record<string, Method>>((o, m) => {
                                o[m.name] = m;
                                return o;
                            } , {}),
                        componentRefs: Object.entries(component.components || [])
                            .map(([name, c]) => (c as any).name)
                            .reduce<Record<string, ComponentRef>>((o, cr) => {
                                o[cr] = cr;
                                return o;
                            }, {})
                    });
                }
            );
        return components;
    };
