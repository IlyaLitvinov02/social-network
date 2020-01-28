import DialogItems from './DialogItems';
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage.dialogsData
    };
}

let mapDispatchToProps = (dispatch) => {
    return {

    };
} 

const DialogItemsContainer = connect(mapStateToProps, mapDispatchToProps)(DialogItems);


export default DialogItemsContainer;