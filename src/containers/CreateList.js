import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from './Todo'
import CreateList from '../components/CreateList'

export const CreateListContainer = connect(mapStateToProps, mapDispatchToProps)(CreateList);
