import { v4 } from 'node-uuid';

export default class Book {
    id = v4();
    name = '';
    description = '';
    count = 0;
}
