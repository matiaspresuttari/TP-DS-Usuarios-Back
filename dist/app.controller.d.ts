import { AppService } from './app.service';
export declare class AppController {
    private readonly AppService;
    constructor(AppService: AppService);
    getHello(): string;
    getVersion(query: {
        all?: boolean;
    }, params: {
        type: string;
    }): string | {
        number: number;
        date: Date;
        creator: string;
    };
}
