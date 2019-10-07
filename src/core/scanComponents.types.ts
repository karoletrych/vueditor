export enum Type {String, Number, Boolean, Object, Date, Function, Symbol, Array}

export interface Prop
{
    name: string;
    type: Type;
    default: any;
}
export interface Computed
{
    name: string;
}

export interface Method
{
    name: string;
    length: number;
}

export interface Slot
{
    name: string;
}

export type ComponentRef = string;

export interface Component{
    name: string;
    props: Record<string, Prop>;
    computed: Record<string, Computed>;
    methods: Record<string, Method>;
    componentRefs: Record<string, ComponentRef>;
}
