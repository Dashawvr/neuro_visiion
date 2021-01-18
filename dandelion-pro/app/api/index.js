import axios from 'axios';
import  GetMain from './main/index';

export default GetMain(SERVER_URL);

import {GetMain} from '../../api/index.js';

const test = async () => {
    const {data} = await GetMain();
}
useEffect( test,[])
