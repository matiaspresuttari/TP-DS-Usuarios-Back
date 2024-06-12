export declare class AppService {
    getHello(): string;
    getVersion(query: {
        all?: boolean;
    }): string | {
        number: number;
        date: Date;
        creator: string;
    };
}
