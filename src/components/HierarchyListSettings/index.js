import React from 'react'
import './HierarchyListSettings.css'

export type HierarchyListSettingsProps = {
    onExpandAllClicked: () => void,
    onCollapseAllClicked: () => void,
    onInvalidateClicked: () => void,
    invalidateUrl: string,
}

export const HierarchyListSettings = (props: HierarchyListSettingsProps) => {
    return <section className="HierarchyListSettings">
        <div onClick={props.onExpandAllClicked}>expand all</div>
        <div onClick={props.onCollapseAllClicked}>collapse all</div>
        <div onClick={() => {props.onInvalidateClicked(props.invalidateUrl)}}>invalidate</div>
    </section>
}

export default HierarchyListSettings