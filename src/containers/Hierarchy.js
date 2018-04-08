// @flow
import { connect } from 'react-redux'
import { expandRow } from 'state/ducks/hierarchy';

import type { State } from 'state'
import HierarchyList from 'components/HierarchyList';

const mapStateToProps = state => {
    return {
        hierarchies: state.hierarchies,
        rootHierarchy: state.rootHierarchy,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRowExpand: (hId: number, rId: number, state: boolean) => {
            dispatch(expandRow(hId, rId, state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HierarchyList);