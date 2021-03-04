import {connect} from "react-redux";
import Editor from "./Editor";
import {AppActions, DataSourceState} from "../state/types";
import {AppState} from "../state/configureStore";
import {ThunkDispatch} from "redux-thunk";

export interface EditorProps {

}

export interface EditorState {

}

interface LinkStateProp {
    dataSource: DataSourceState | {};
}

interface LinkDispatchProps {
}

export type Props = EditorProps & LinkStateProp & LinkDispatchProps;

const mapStateToProps = (state: AppState, ownProps: EditorProps): LinkStateProp => ({
    dataSource: state.dataSource,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: EditorProps): LinkDispatchProps => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Editor);
