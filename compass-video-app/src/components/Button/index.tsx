
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({

    base: 'flex items-center uppercase font-worksans font-bold tracking-widest cursor-pointer box-border transition-all duration-150',

    variants: {
        size: {
            default: 'w-12 h-12 p-3 font-bold',
            sm: 'w-10 h-10 p-3',
            md: 'px-6 py-3.5 rounded-[4px]',
        },

        primary: {
            true: 'bg-primary-300 text-neutral--100 text-[1rem] hover:bg-primary-200 active:bg-primary-500'
        },

        secondary: {
            true: 'bg-neutral-100 text-neutral-600 font-bold tracking-widest hover:bg-neutral-200'
        },

        outlined: {
            true: ' border-white border-2 rounded-[4px] text-white hover:text-black!important hover:bg-black hover:text-white/90 bg-transparent hover:border-black hover:filter hover:invert hover:grayscale hover:brightness-100'
        },

        outlinedCircle: {
            true: 'border-[2px] border-white rounded-full text-white bg-black hover:border-black hover:text-black/90 hover:bg-neutral-100!importanthover:bg-neutral-100!important hover:filter hover:invert hover:grayscale hover:brightness-100 '
        },

        outlineCirclePrimary: {
            true: 'bg-primary-300 text-neutral--100  hover:bg-primary-200 active:bg-primary-500 rounded-full'
        },

        outlinedCircleCheck: {
            true: 'border-[1px] border-white rounded-full text-white hover:text-black bg-black hover:bg-black/60 active:border-2'
        }

    },
});

export type ButtonProps = ComponentProps<'button'> & 
    VariantProps<typeof button> & {
        primary?: boolean;
        secondary?: boolean;
        outlined?: boolean;
        outlinedCircle?: boolean;
        outlinedCircleCheck?: boolean;
        outlineCirclePrimary?: boolean;
    }; 

export function Button({primary, secondary, outlined, outlinedCircle, outlinedCircleCheck, outlineCirclePrimary, size, ...props}: ButtonProps) {
    return (
        <button
            data-primary={primary}
            data-secondary={secondary}
            data-outlined={outlined}
            data-outlinedCircle={outlinedCircle}
            data-outlinedCircleCheck={outlinedCircleCheck}
            data-outlineCirclePrimary={outlineCirclePrimary}
            className={button({size, primary, secondary, outlined, outlinedCircle, outlinedCircleCheck, outlineCirclePrimary})}
            {...props}
        >
 
        </button>
    )
}