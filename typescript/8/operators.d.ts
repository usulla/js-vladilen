interface Person {
    name: string;
    age: number;
}
declare type PersonKeys = keyof Person;
declare let key: PersonKeys;
declare type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: Date;
};
declare type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>;
declare type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>;
declare let user1: UserKeysNoMeta1;
