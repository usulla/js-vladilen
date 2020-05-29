declare function strip(x: string | number): string;
declare class MyResponse {
    header: string;
    result: string;
}
declare class MyError {
    header: string;
    message: string;
}
declare function handle(res: MyResponse | MyError): {
    info: string;
};
declare type AlertType = 'success' | 'danger' | 'warning';
declare function setAlertType(type: AlertType): void;
