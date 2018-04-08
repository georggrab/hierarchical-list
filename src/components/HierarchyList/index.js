// @flow
import React, { Component } from 'react';

import type { RecordOf, RecordFactory } from 'immutable';
import { List, Map, Record } from 'immutable';

import type { HierarchyRowRecord, RowExpandCallback, HierarchyRecord } from 'state/ducks/hierarchy'

import './HierarchyList.css';

export type HierarchyProps = {
    hierarchies: Map<number, HierarchyRecord>,
    rootHierarchy: ?number,
    onRowExpand: RowExpandCallback,
}

const createCell = (content: any, index: number | string) => {
    return <p className="cell" key={index}>{content}</p>;
}

const Row = ({row, hierarchyIndex, onRowExpand, hierarchies}) => {
    return <div>
    <section className="HierarchyList-Row">
        <div className="HierarchyList-RowExpand">
            {row.childId != null &&
                <p onClick={() => onRowExpand(hierarchyIndex, row.rowIndex, !row.expanded)} 
                    className={row.expanded? "HierarchyList-RowExpand--down" : ""}>▶</p>
            }
        </div> 
        {row.columns.map((item, index) => createCell(item.payload, index))}
    </section>
        {row.childId != null && row.expanded &&
            <HierarchyList 
                rootHierarchy={row.childId}
                onRowExpand={onRowExpand} 
                hierarchies={hierarchies} /> }
    </div>
}

const createHeader = (header: List<string>) => {
    return <section className="HierarchyList-Header">
        {header.map(createCell)}
    </section>;
}

function createRows(rows: List<HierarchyRowRecord>, hierarchyIndex: number, onRowExpand: RowExpandCallback, hierarchies: Map<number, HierarchyRecord>) {
    return rows.map((row) => 
        <Row 
            hierarchies={hierarchies}
            key={row.rowIndex} 
            hierarchyIndex={hierarchyIndex} 
            row={row} 
            onRowExpand={onRowExpand} />);
}

export default function HierarchyList(props: HierarchyProps) {
    if (props.rootHierarchy == null) {
        return <div className="HierarchyList HierarchyList--empty"></div>;
    }
    const hierarchy = props.hierarchies.get(props.rootHierarchy)
    if (hierarchy == null) {
        throw Error('Invalid Hierarchy input')
    }
    return (<div className="HierarchyList">
        {createHeader(hierarchy.headers)}
        {createRows(hierarchy.payload, hierarchy.hierarchyIndex, props.onRowExpand, props.hierarchies)} 
    </div>);
}