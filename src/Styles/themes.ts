import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        mode?: string;
        PRIMARY_BACKGROUND_COLOR?: string;
        SECONDARY_BACKGROUND_COLOR?: string;
        PRIMARY_TEXT_COLOR?: string;
        SECONDARY_TEXT_COLOR?: string;
        PRIMARY_BUTTON_COLOR?: string;
        SECONDARY_BUTTON_COLOR?: string;
        HAIRLINE_COLOR?: string;
        GRADIENT: string[];
        SHADOW: string;

        FONT_REGULAR: string;
        FONT_MEDIUM: string;
        FONT_BOLD: string;
    }
}

export type THEME_TYPE = 'light' | 'dark';

export const lightTheme: DefaultTheme = {
    mode: 'light',
    PRIMARY_BACKGROUND_COLOR: '#e5e5e5',
    SECONDARY_BACKGROUND_COLOR: '#fff',
    PRIMARY_TEXT_COLOR: '#202125',
    SECONDARY_TEXT_COLOR: '#5e6267',
    PRIMARY_BUTTON_COLOR: '#4A5AEF',
    //SECONDARY_BUTTON_COLOR: colors.radiantBlue,
    HAIRLINE_COLOR: '#C9C9CB',
    GRADIENT: [
        'rgba(255,255,255,0)',
        'rgba(255,255,255,0)',
        'rgba(255,255,255,1)',
    ],
    SHADOW: `4px 4px 50px rgba(0, 0, 0, 0.25)`,

    FONT_REGULAR: 'Montserrat-Regular',
    FONT_MEDIUM: 'Montserrat-Medium',
    FONT_BOLD: 'Montserrat-Bold',
};

export const darkTheme: DefaultTheme = {
    mode: 'dark',
    PRIMARY_BACKGROUND_COLOR: '#090E11',
    SECONDARY_BACKGROUND_COLOR: '#262D31',
    PRIMARY_TEXT_COLOR: 'white',
    SECONDARY_TEXT_COLOR: 'rgba(255,255,255,0.87)',
    PRIMARY_BUTTON_COLOR: '#4A5AEF',
    SECONDARY_BUTTON_COLOR: 'white',
    HAIRLINE_COLOR: '#C9C9CB',
    GRADIENT: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,1)'],
    SHADOW: `4px 4px 50px rgba(0, 0, 0, 0.25)`,

    FONT_REGULAR: 'Montserrat-Regular',
    FONT_MEDIUM: 'Montserrat-Medium',
    FONT_BOLD: 'Montserrat-Bold',
};
