import { v4 } from 'node-uuid';

export default class Book {
    id = v4();
    name = '';
    author = '';
    description = '';
    count = 0;
}
