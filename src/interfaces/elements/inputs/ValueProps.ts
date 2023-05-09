export interface ValueProps {
    value:string;
    placeholder:string;
    onChangeText:any;
    onEndEditing?:any;
    styled?: Styles;
}

export enum Styles {
    Default,
    DarkBorder,
    DarkSmallBorder
}
