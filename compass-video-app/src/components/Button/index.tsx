
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({

    base: 'flex justify-center items-center uppercase font-worksans font-bold tracking-widest cursor-pointer box-border transition-all duration-150',

    variants: {
        size: {
            default: 'w-12 h-12 p-3 font-bold',
            sm: 'w-10 h-10 p-3',
            md: 'px-6 py-3.5 rounded-[4px] my-6',
            primary: 'flex justify-center items-center p-2 md:px-4 rounded',
        },

        primary: {
            true: 'bg-primary-300 text-neutral--100 text-[1rem] hover:bg-primary-200 active:bg-primary-500 sm:w-[374px]'
        },

        secondary: {
            true: 'bg-neutral-100 text-neutral-600 font-bold tracking-widest hover:bg-neutral-200'
        },

        outlined: {
            true: 'bg-black/10 text-neutral-100 border-white outline outline-1 outline-neutral-100 rounded-[4px] hover:text-neutral-900 hover:bg-neutral-100/40 hover:outline-none'
        },

        outlinedSecondary: {
            true: ' border-white border rounded-full text-white  hover:text-white/90 bg-black/10 hover:border-black hover:text-black!important hover:bg-black hover:filter hover:invert hover:grayscale active:bg-primary-500 '
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
        outlinedSecondary?: boolean;
        outlinedCircleCheck?: boolean;
        outlineCirclePrimary?: boolean;
    }; 

export function Button({primary, secondary, outlined, outlinedCircle, outlinedSecondary, outlinedCircleCheck, outlineCirclePrimary, size, ...props}: ButtonProps) {
    return (
        <button
            data-primary={primary}
            data-secondary={secondary}
            data-outlined={outlined}
            data-outlinedCircle={outlinedCircle}
            data-outlinedSecondary={outlinedSecondary}
            data-outlinedCircleCheck={outlinedCircleCheck}
            data-outlineCirclePrimary={outlineCirclePrimary}
            className={button({size, primary, secondary, outlined, outlinedSecondary, outlinedCircle, outlinedCircleCheck, outlineCirclePrimary})}
            {...props}
        >
 
        </button>
    )
}