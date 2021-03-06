import {
    readLessee,
    createLessee,
    deleteLessee,
    updateLessee,
    loginLessee,
} from './ctrl/lessee.ctrl';
import { createLesseeSchema } from './schema/lesseeSchema';

const routes = [
    {
        method: 'POST',
        url: '/lessee/signup',
        handler: createLessee,
        schema: createLesseeSchema,
    },
    {
        method: 'POST',
        url: '/lessee/login',
        handler: loginLessee,
    },
    {
        method: 'GET',
        url: '/lessee/:name',
        handler: readLessee,
    },
    {
        method: 'DELETE',
        url: '/lessee/:name',
        handler: deleteLessee,
    },
    {
        method: 'PUT',
        url: '/lessee/:name',
        handler: updateLessee,
    },
]

export default routes;
