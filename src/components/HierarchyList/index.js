// @flow
import React, { Component } from 'react';

import './HierarchyList.css';

export type HierarchyPayload = {
    type: 'string' | 'number' | 'boolean' | 'date',
    payload: any,
}

export type HierarchyPayloadRow = {
    columns: HierarchyPayload[],
    children?: Hierarchy,
    expanded: boolean,
}

export type Hierarchy = {
    headers: string[];
    payload: HierarchyPayloadRow[],
}

export type HierarchyProps = {
    hierarchy: Hierarchy,
}

function createHeader(header: string[]) {
    return <section className="HierarchyList-Header">
        {header.map(createCell)}
    </section>;
}

function createCell(content: any, index: number | string) {
    return <p className="cell" key={index}>{content}</p>;
}

function createRow(row: HierarchyPayloadRow, parentIndex: string) {
    return <div key={parentIndex}>
    <section className="HierarchyList-Row">
        <div className="HierarchyList-RowExpand">
            {row.children !== undefined &&
                <p className={row.expanded? "HierarchyList-RowExpand--down" : ""}>▶</p>
            }
        </div> 
        {row.columns.map((item, index) => createCell(item.payload, parentIndex + index))}
    </section>
        {row.children !== undefined && row.expanded &&
            <HierarchyList hierarchy={row.children} /> }
    </div>
}

function createRows(rows: HierarchyPayloadRow[]) {
    return rows.map((row, index) => createRow(row, index.toString()));
}

export default function HierarchyList(props: HierarchyProps) {
    return (<div className="HierarchyList">
        {createHeader(props.hierarchy.headers)}
        {createRows(props.hierarchy.payload)} 
    </div>);
}