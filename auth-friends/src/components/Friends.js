import React from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = props => {
     useEffect(() => {
    const getData = () => {

      axiosWithAuth()
        .get('/api/data')
        .then(res => {
          console.log(res);
          this.setState({
            gasPrices: res.data.data
              .filter(price => price.type === 'Gasoline - Regular')
              .filter(
                price =>
                  price.location === 'US' || price.location === 'State of Hawaii'
              )
          });
        });
    };

    getData();
  }, [])

}