// @flow
import { connect } from 'react-redux';

import HierarchyListSettings from 'components/HierarchyListSettings';
import { expandAll, collapseAll } from 'state/ducks/hierarchy';
import { loadInvalidated } from 'state/ducks/fetchHierarchy';
import type { State } from 'state'

const mapStateToProps = (state: State) => {
    return {  
        invalidateUrl : state.loadStatus.dataOrigin,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInvalidateClicked: (url: string) => {
            dispatch(loadInvalidated(url));
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