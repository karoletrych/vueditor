export enum Type {String, Number, Boolean, Object, Date, Function, Symbol, Array}

export interface Prop
{
    Name: string;
    Type: Type;
    Default: any;
}
export interface Computed
{
    Name: string;
}

export interface Method
{
    Name: string;
    Length: number;
}

export interface Slot
{
    Name: string;
}

export type ComponentRef = string;

export interface Component{
    Name: string;
    Props: Record<string, Prop>;
    Computed: Record<string, Computed>;
    Methods: Record<string, Method>;
    ComponentRefs: Record<string, ComponentRef>;
}
