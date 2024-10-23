export interface MovieDetailsProps {
    film: {
        name: string;
        description: string;
        duration: number;
        genres?: string[];
        cast?: string[];
    };
}

export interface ConfigOptions {
    baseURL: string;
    headers: {
        'Content-Type': string;
        'Authorization': string;
    };
}

export interface AuthState {
    loading: boolean;
    datalist: any[];
    dataObj: any;
    errorMessage: string | null;
    token: string | null;
}


export interface RegisterData {
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface LoginData {
    email: string;
    password: string;
}

export interface LogoutData {
    token: string;
}

export const Hero = {
    title: 'Naruto Clein',
    description: 'Feel the Movie take our Film to determine your Mood for the perfect Viewing Experience',
    video: 'src/assets/hero_banner.mp4'
};
export const Collaboration = [
    { src: 'src/assets/Logonetflix.png', alt: 'Netflix' },
    { src: 'src/assets/youcode.png', alt: 'Youcode' },
    { src: 'src/assets/youtube.png', alt: 'youtube' },
    { src: 'src/assets/marvel.png', alt: 'marvel' },
    { src: 'src/assets/megarama.png', alt: 'megarama' },
    { src: 'src/assets/twitch.png', alt: 'twitch' },
];