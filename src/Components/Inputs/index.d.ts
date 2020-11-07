export interface TextInputProps
    extends React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    verient?: 'primary' | 'secondary';
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}
