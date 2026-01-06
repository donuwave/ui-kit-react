import React, {FC} from 'react';

export interface ButtonProps {
    color: string;
}

export const Button: FC<ButtonProps> = ({color}) => {
    return (
        <button>
            {color} - text
        </button>
    );
};