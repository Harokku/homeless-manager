import {branch, renderNothing} from 'recompose'
import moment from 'moment'

const renderNullIfNotToday = (day = 'day') =>
  branch(
    props => props[day].format('YYYY-MM-DD') !== moment().format('YYYY-MM-DD'),
    renderNothing
  );

export default renderNullIfNotToday