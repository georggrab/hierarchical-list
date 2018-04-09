// @flow
import { connect } from 'react-redux';

import HierarchyListSettings from 'components/HierarchyListSettings';
import { expandAll, collapseAll } from 'state/ducks/hierarchy/index';

const mapStateToProps = state => {
    return {  }
}

const mapDispatchToProps = dispatch => {
    return {
        onInvalidateClicked: () => {
        },
        onCollapseAllClicked: () => {
            dispatch(collapseAll());
        },
        onExpandAllClicked: () => {
            dispatch(expandAll())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HierarchyListSettings);